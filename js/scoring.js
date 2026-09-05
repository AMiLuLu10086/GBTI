(function () {
  function getCoreOption(question, answer) {
    return question.options.find(function (option) {
      return option.pole === answer;
    });
  }

  function computeCoreCombo(answers) {
    const votes = {};

    Object.keys(CORE_DIMENSIONS).forEach(function (dim) {
      votes[dim] = {};
      Object.keys(CORE_DIMENSIONS[dim].poles).forEach(function (pole) {
        votes[dim][pole] = 0;
      });
    });

    QUESTIONS.filter(function (question) {
      return question.kind === 'core';
    }).forEach(function (question) {
      const answer = answers[question.id];
      if (!getCoreOption(question, answer)) return;
      votes[question.dim][answer] += 1;
    });

    const combo = {};

    Object.keys(CORE_DIMENSIONS).forEach(function (dim) {
      const poles = Object.keys(CORE_DIMENSIONS[dim].poles);
      const first = poles[0];
      const second = poles[1];

      if (votes[dim][first] === votes[dim][second]) {
        combo[dim] = first;
      } else {
        combo[dim] = votes[dim][first] > votes[dim][second] ? first : second;
      }
    });

    return combo;
  }

  function computeCoreType(answers) {
    const combo = computeCoreCombo(answers);
    return TYPES.find(function (type) {
      return Object.keys(combo).every(function (dim) {
        return type.core[dim] === combo[dim];
      });
    });
  }

  function computeExtraScores(answers) {
    const raw = {};
    const max = {};

    Object.keys(EXTRA_DIMENSIONS).forEach(function (dim) {
      raw[dim] = 0;
      max[dim] = 0;
    });

    QUESTIONS.filter(function (question) {
      return question.kind === 'extra';
    }).forEach(function (question) {
      const value = Number(answers[question.id]);
      if (!value) return;
      raw[question.dim] += value;
      max[question.dim] += 3;
    });

    const scores = {};

    Object.keys(EXTRA_DIMENSIONS).forEach(function (dim) {
      scores[dim] = max[dim] ? Math.round((raw[dim] / max[dim]) * 100) : 0;
    });

    return scores;
  }

  function isHiddenTriggered(answers) {
    const gateA = QUESTIONS.find(function (question) {
      return question.id === 'gate_a';
    });
    const gateB = QUESTIONS.find(function (question) {
      return question.id === 'gate_b';
    });

    const answerA = answers.gate_a;
    const answerB = answers.gate_b;

    const optionA = gateA && gateA.options.find(function (option) {
      return option.value === answerA;
    });
    const optionB = gateB && gateB.options.find(function (option) {
      return option.value === answerB;
    });

    return Boolean(optionA && optionA.hidden && optionB && optionB.hidden);
  }

  function computeResult(answers) {
    const hidden = isHiddenTriggered(answers);
    const base = computeCoreType(answers);

    return {
      hidden: hidden,
      type: hidden ? HIDDEN_TYPE : base,
      base: base,
      extra: computeExtraScores(answers)
    };
  }

  window.GBTIScoring = {
    computeResult: computeResult,
    computeCoreType: computeCoreType,
    computeExtraScores: computeExtraScores,
    isHiddenTriggered: isHiddenTriggered
  };
})();
