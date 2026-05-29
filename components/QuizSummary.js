import Link from 'next/link';
import styles from '@/styles/Quiz.module.css';

export default function QuizSummary({ correctCount, totalQuestions, onRestart, onHome }) {
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const score20 = ((percentage * 20) / 100).toFixed(1);
  const passed = Number(score20) >= 10;
  const status = passed ? 'APROVADO' : 'REPROVADO';

  return (
    <section className={`${styles.summaryCard} ${passed ? styles.summaryCardPass : styles.summaryCardFail}`}>
      <div className={styles.summaryIntro}>
        <p className={styles.summaryEyebrow}>Resultado final</p>
        <h2>Parabéns pela sua sessão</h2>
        <p className={styles.summaryText}>A sua performance foi registada com clareza e precisão.</p>
      </div>

      <div className={styles.summaryStatsGrid}>
        <article className={styles.summaryMiniCard}><span>Acertos</span><strong>{correctCount}</strong></article>
        <article className={styles.summaryMiniCard}><span>Erros</span><strong>{totalQuestions - correctCount}</strong></article>
        <article className={styles.summaryMiniCard}><span>Percentagem</span><strong>{percentage}%</strong></article>
        <article className={styles.summaryMiniCard}><span>Nota em 20</span><strong>{score20}</strong></article>
      </div>

      <div className={`${styles.summaryStatus} ${passed ? styles.summaryStatusPass : styles.summaryStatusFail}`}>{status}</div>

      <div className={styles.summaryActions}>
        <button type="button" className={styles.primaryButton} onClick={onRestart}>Refazer quiz</button>
        {/* <Link href="/" className={styles.secondaryButtonLink} onClick={onHome}>Voltar ao início</Link> */}
      </div>
    </section>
  );
}
