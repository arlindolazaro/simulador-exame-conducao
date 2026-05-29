import styles from '@/styles/Quiz.module.css';

const labelForIndex = ['A', 'B', 'C', 'D', 'E', 'F'];

export default function AnswerOptions({ options, selectedAnswer, correctAnswer, reviewMode, onSelect }) {
  return (
    <div className={styles.optionsList}>
      {options.map((option, index) => {
        const isSelected = selectedAnswer === index;
        const isCorrect = correctAnswer === index;
        const className = reviewMode
          ? isCorrect
            ? styles.optionCorrect
            : isSelected
            ? styles.optionIncorrect
            : styles.optionDisabled
          : isSelected
          ? styles.optionSelected
          : styles.option;

        return (
          <button
            key={option}
            type="button"
            className={className}
            onClick={() => onSelect(index)}
            disabled={reviewMode}
          >
            <span className={styles.optionLabel}>{labelForIndex[index]})</span>
            <span>{option}</span>
          </button>
        );
      })}
    </div>
  );
}
