import React from 'react';

function QuizHeader({ currentIndex, totalQuestions, score, progress }) {
  return (
    <header className="quiz-header">
      <div className="header-top">
        <div>
          <p className="eyebrow">DSA 2026</p>
          <h1>Quiz de revisão de JavaScript</h1>
        </div>
        <div className="score-badge">Pontuação: {score}</div>
      </div>

      <div className="progress-block">
        <div className="progress-meta">
          <span>Questão {currentIndex + 1}</span>
          <span>
            {currentIndex + 1}/{totalQuestions}
          </span>
        </div>
        <div className="progress-bar" aria-label="Progresso do quiz">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </header>
  );
}

export default QuizHeader;
