import styles from '@/styles/Quiz.module.css';

export default function ProgressBar({ value = 0, label = 'Progresso' }) {
  const normalized = Math.min(100, Math.max(0, value));

  return (
    <div className={styles.progressBox}>
      <div className={styles.progressLabelRow}>
        <span className={styles.progressLabel}>{label}</span>
        <strong>{normalized}%</strong>
      </div>
      <div className={styles.progressTrack} aria-hidden="true">
        <div className={styles.progressFill} style={{ width: `${normalized}%` }} />
      </div>
    </div>
  );
}
