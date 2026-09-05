(function () {
  const app = {
    shuffledQuestions: [],
    answers: {},
    gateATriggered: false,
    currentIndex: 0
  };

  const normalQuestions = QUESTIONS.filter(function (question) {
    return question.kind !== 'gate';
  });

  const gateA = QUESTIONS.find(function (question) {
    return question.id === 'gate_a';
  });

  const gateB = QUESTIONS.find(function (question) {
    return question.id === 'gate_b';
  });

  const screens = {
    intro: document.getElementById('intro'),
    test: document.getElementById('test'),
    result: document.getElementById('result')
  };

  const questionList = document.getElementById('questionList');
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const submitBtn = document.getElementById('submitBtn');
  const testHint = document.getElementById('testHint');
  const prevBtn = document.getElementById('prevBtn');

  function showScreen(name) {
    Object.values(screens).forEach(function (screen) {
      screen.classList.toggle('active', screen.id === name);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function shuffle(items) {
    const arr = items.slice();
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function isGateATriggered() {
    const option = gateA.options.find(function (item) {
      return item.value === app.answers.gate_a;
    });
    return Boolean(option && option.hidden);
  }

  function getVisibleQuestions() {
    const visible = app.shuffledQuestions.slice();
    const gateIndex = visible.findIndex(function (question) {
      return question.id === 'gate_a';
    });

    if (gateIndex !== -1 && isGateATriggered()) {
      visible.splice(gateIndex + 1, 0, gateB);
    }

    return visible;
  }

  function getOptionValue(question, option) {
    return question.kind === 'core' ? option.pole : String(option.value);
  }

  function getDigitFromEvent(event) {
    if (event.key && /^[1-9]$/.test(event.key)) {
      return Number(event.key);
    }
    if (event.code) {
      const match = event.code.match(/^(?:Numpad|Digit)(\d)$/);
      if (match) {
        return Number(match[1]);
      }
    }
    return null;
  }

  function renderCurrentQuestion() {
    const visibleQuestions = getVisibleQuestions();
    const total = visibleQuestions.length;
    const question = visibleQuestions[app.currentIndex];

    if (!question) {
      questionList.innerHTML = '';
      updateProgress();
      return;
    }

    const options = question.options.map(function (option, optionIndex) {
      const value = getOptionValue(question, option);
      const code = String(optionIndex + 1);
      const checked = app.answers[question.id] === value ? 'checked' : '';

      return `
        <label class="option">
          <input type="radio" name="${question.id}" value="${value}" ${checked} />
          <div class="option-code">${code}</div>
          <div>${option.label}</div>
        </label>
      `;
    }).join('');

    questionList.innerHTML = `
      <article class="question">
        <div class="question-meta">
          <div class="badge">第 ${app.currentIndex + 1} / ${total} 题</div>
        </div>
        <div class="question-title">${question.text}</div>
        <div class="options">${options}</div>
      </article>
    `;

    questionList.querySelectorAll('input[type="radio"]').forEach(function (input) {
      input.addEventListener('change', function (event) {
        selectOption(event.target.value);
      });
    });

    updateProgress();
    prevBtn.disabled = app.currentIndex === 0;
  }

  function selectOption(value) {
    const visibleQuestions = getVisibleQuestions();
    const question = visibleQuestions[app.currentIndex];
    if (!question) return;

    app.answers[question.id] = value;

    if (question.id === 'gate_a') {
      app.gateATriggered = isGateATriggered();
      if (!app.gateATriggered) {
        delete app.answers.gate_b;
      }
    }

    const nextQuestions = getVisibleQuestions();

    if (app.currentIndex < nextQuestions.length - 1) {
      app.currentIndex += 1;
    }

    renderCurrentQuestion();
  }

  function goPrev() {
    if (app.currentIndex > 0) {
      app.currentIndex -= 1;
      renderCurrentQuestion();
    }
  }

  function updateProgress() {
    const visibleQuestions = getVisibleQuestions();
    const total = visibleQuestions.length;
    const done = visibleQuestions.filter(function (question) {
      return app.answers[question.id] !== undefined;
    }).length;

    progressBar.style.width = total ? `${(done / total) * 100}%` : '0%';
    progressText.textContent = `${done} / ${total}`;
    const complete = done === total && total > 0;
    submitBtn.disabled = !complete;
    testHint.textContent = complete
      ? '都答完了。现在可以把你的电子魂魄交给结果页审判。'
      : '全部答完才会放行。世界已经够乱了，起码把题做完整。';
  }

  function buildResultText(result) {
    const type = result.type;
    const lines = [
      'GBTI 游戏摆烂人格测试',
      `${type.code} · ${type.cn}`,
      type.intro,
      type.desc,
      ''
    ];

    Object.keys(EXTRA_DIMENSIONS).forEach(function (dim) {
      const score = result.extra[dim];
      const label = score >= 50 ? EXTRA_DIMENSIONS[dim].high : EXTRA_DIMENSIONS[dim].low;
      lines.push(`${EXTRA_DIMENSIONS[dim].name}：${label} ${score}%`);
    });

    return lines.join('\n');
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(function () {
        fallbackCopy(text);
      });
    }

    fallbackCopy(text);
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  function captureResult(result) {
    const shotBtn = document.getElementById('shotBtn');
    const target = document.querySelector('#result .result-wrap');

    if (!target || typeof html2canvas !== 'function') {
      shotBtn.disabled = false;
      shotBtn.textContent = '截图失败';
      window.setTimeout(function () {
        shotBtn.textContent = '截图';
      }, 1400);
      return;
    }

    shotBtn.disabled = true;
    shotBtn.textContent = '生成中…';

    html2canvas(target, {
      backgroundColor: '#0a0f1e',
      scale: 2,
      ignoreElements: function (element) {
        return element.classList && element.classList.contains('result-actions');
      }
    }).then(function (canvas) {
      const link = document.createElement('a');
      link.download = 'GBTI-' + result.type.code + '.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      shotBtn.disabled = false;
      shotBtn.textContent = '截图';
    }).catch(function (err) {
      console.error(err);
      shotBtn.disabled = false;
      shotBtn.textContent = '截图失败';
      window.setTimeout(function () {
        shotBtn.textContent = '截图';
      }, 1400);
    });
  }

  function renderResult() {
    const result = GBTIScoring.computeResult(app.answers);
    const type = result.type;

    document.getElementById('resultKicker').textContent = result.hidden
      ? '隐藏人格已激活'
      : '你的主类型';
    document.getElementById('resultTypeName').textContent = `${type.code} · ${type.cn}`;
    document.getElementById('resultBadge').textContent = result.hidden
      ? `品类 ${type.genre} · 烂局检测通过`
      : `品类 ${type.genre} · 主型匹配`;
    document.getElementById('resultSub').textContent = type.intro;
    document.getElementById('resultDesc').textContent = type.desc;
    document.getElementById('funNote').textContent = '本测试仅供娱乐，别拿去排位复盘、诊断人格或做人生判决。';

    const posterBox = document.getElementById('posterBox');
    const posterImage = document.getElementById('posterImage');

    if (type.image) {
      posterImage.src = type.image;
      posterImage.alt = `${type.code} · ${type.cn}`;
      posterBox.classList.remove('no-image');
    } else {
      posterImage.removeAttribute('src');
      posterImage.alt = '';
      posterBox.classList.add('no-image');
    }

    const coreDims = Object.keys(CORE_DIMENSIONS).map(function (dim) {
      const pole = result.base.core[dim];
      const label = CORE_DIMENSIONS[dim].poles[pole];
      return `
        <div class="dim-item">
          <div class="dim-item-top">
            <div>${CORE_DIMENSIONS[dim].name}</div>
            <div class="dim-item-score">${label}</div>
          </div>
          <p>你在${CORE_DIMENSIONS[dim].name}上更偏向「${label}」。</p>
        </div>
      `;
    });

    const extraDims = Object.keys(EXTRA_DIMENSIONS).map(function (dim) {
      const score = result.extra[dim];
      const label = score >= 50 ? EXTRA_DIMENSIONS[dim].high : EXTRA_DIMENSIONS[dim].low;
      return `
        <div class="dim-item">
          <div class="dim-item-top">
            <div>${EXTRA_DIMENSIONS[dim].name}</div>
            <div class="dim-item-score">${label} ${score}%</div>
          </div>
          <p>${EXTRA_DIMENSIONS[dim].name}表现：${label}。</p>
        </div>
      `;
    });

    document.getElementById('dimList').innerHTML = coreDims.concat(extraDims).join('');

    const shotBtn = document.getElementById('shotBtn');
    shotBtn.disabled = false;
    shotBtn.textContent = '截图';
    shotBtn.onclick = function () {
      captureResult(result);
    };

    document.getElementById('copyBtn').onclick = function () {
      copyText(buildResultText(result));
      document.getElementById('copyBtn').textContent = '已复制';
      window.setTimeout(function () {
        document.getElementById('copyBtn').textContent = '复制结果文字';
      }, 1400);
    };

    showScreen('result');
  }

  function startTest() {
    app.answers = {};
    app.gateATriggered = false;
    app.currentIndex = 0;

    const shuffled = shuffle(normalQuestions);
    const insertIndex = Math.floor(Math.random() * shuffled.length) + 1;
    app.shuffledQuestions = [
      ...shuffled.slice(0, insertIndex),
      gateA,
      ...shuffled.slice(insertIndex)
    ];

    renderCurrentQuestion();
    showScreen('test');
  }

  function handleKeydown(event) {
    if (!screens.test.classList.contains('active')) return;

    const digit = getDigitFromEvent(event);
    if (digit === null) return;

    const visibleQuestions = getVisibleQuestions();
    const question = visibleQuestions[app.currentIndex];
    if (!question) return;

    if (digit >= 1 && digit <= question.options.length) {
      event.preventDefault();
      selectOption(getOptionValue(question, question.options[digit - 1]));
    }
  }

  document.getElementById('startBtn').addEventListener('click', startTest);
  document.getElementById('submitBtn').addEventListener('click', renderResult);
  document.getElementById('restartBtn').addEventListener('click', startTest);
  document.addEventListener('keydown', handleKeydown);
  prevBtn.addEventListener('click', goPrev);
})();

