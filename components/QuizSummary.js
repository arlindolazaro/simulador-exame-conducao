import styles from '@/styles/Quiz.module.css';

export default function QuizSummary({ correctCount, totalQuestions, onRestart }) {
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const score20 = ((percentage * 20) / 100).toFixed(1);
  const status = score20 >= 10 ? 'APROVADO' : 'REPROVADO';

  return (
    <div className={styles.summaryCard}>
      <h2>Resultado Final</h2>
      <div className={styles.summaryRow}>
        <span>Acertos</span>
        <strong>{correctCount}</strong>
      </div>
      <div className={styles.summaryRow}>
        <span>Erros</span>
        <strong>{totalQuestions - correctCount}</strong>
      </div>
      <div className={styles.summaryRow}>
        <span>Percentagem</span>
        <strong>{percentage}%</strong>
      </div>
      <div className={styles.summaryRow}>
        <span>Nota em 20</span>
        <strong>{score20}</strong>
      </div>
      <div className={styles.summaryStatus}>{status}</div>
      <button type="button" className={styles.primaryButton} onClick={onRestart}>
        Refazer Quiz
      </button>
    </div>
  );
}
