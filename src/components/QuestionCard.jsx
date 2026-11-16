import React from 'react';

function QuestionCard({ question, selectedAnswer, onSelect, onNext, isLastQuestion }) {
  return (
    <section className="question-card">
      <p className="question-tag">Questão {question.id}</p>
      <h2>{question.question}</h2>

      <div className="options-grid">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = question.correctAnswer === option;
          const showCorrect = selectedAnswer !== null && isCorrect;
          const showWrong = selectedAnswer !== null && isSelected && !isCorrect;

          return (
            <button
              key={option}
              type="button"
              className={[
                'option-button',
                isSelected ? 'selected' : '',
                showCorrect ? 'correct' : '',
                showWrong ? 'wrong' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => onSelect(option)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selectedAnswer !== null && (
        <div className="feedback-box">
          <p className={selectedAnswer === question.correctAnswer ? 'feedback-success' : 'feedback-error'}>
            {selectedAnswer === question.correctAnswer
              ? 'Resposta correta!'
              : `Resposta incorreta. A resposta correta é: ${question.correctAnswer}`}
          </p>
          <p className="explanation">{question.explanation}</p>
          <button type="button" className="next-button" onClick={onNext}>
            {isLastQuestion ? 'Ver resultado final' : 'Próxima questão'}
          </button>
        </div>
      )}
    </section>
  );
}

export default QuestionCard;
