import styles from '@/styles/Quiz.module.css';

export default function StatCard({ label, value, accent = 'default' }) {
  const accentClass =
    accent === 'green' ? styles.statCardGreen :
    accent === 'blue' ? styles.statCardBlue :
    accent === 'violet' ? styles.statCardViolet : '';

  return (
    <article className={`${styles.statCard} ${accentClass}`}>
      <span className={styles.statLabel}>{label}</span>
      <strong className={styles.statValue}>{value}</strong>
    </article>
  );
}
