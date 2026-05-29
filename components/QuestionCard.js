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
    <article className={styles.questionCard}>
      <div className={styles.questionMeta}>
        <span className={styles.badge}>Questão {questionNumber}</span>
        <span className={styles.badgeMuted}>{totalQuestions} perguntas no total</span>
      </div>
      <h2 className={styles.questionTitle}>{question.question}</h2>
      <p className={styles.questionHint}>Escolha a resposta certa e avance com confiança.</p>
      <AnswerOptions
        options={question.options}
        selectedAnswer={selectedAnswer}
        correctAnswer={question.answerIndex}
        reviewMode={reviewMode}
        onSelect={onSelect}
      />
    </article>
  );
}
