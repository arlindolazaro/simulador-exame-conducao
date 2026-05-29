import AnswerOptions from '@/components/AnswerOptions';
import styles from '@/styles/Quiz.module.css';

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  reviewMode,
  onSelect,
}) {
  return (
    <div className={styles.questionCard}>
      <div className={styles.questionMeta}>
        <span>Questão {questionNumber}</span>
        <span>{totalQuestions} totais</span>
      </div>
      <h2 className={styles.questionTitle}>{question.question}</h2>
      <AnswerOptions
        options={question.options}
        selectedAnswer={selectedAnswer}
        correctAnswer={question.answerIndex}
        reviewMode={reviewMode}
        onSelect={onSelect}
      />
    </div>
  );
}
