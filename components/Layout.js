import Link from 'next/link';
import styles from '@/styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand} aria-label="Simulador de exame de condução">
            <img src="/logo.svg" alt="Cau Solutions" className={styles.logo} />
            <span>
              <strong>Simulador</strong>
              <small>Exame de Condução</small>
            </span>
          </Link>

          <nav className={styles.nav}>
            {/* <Link href="/" className={styles.navLink}>Início</Link> */}
            {/* <Link href="/" className={styles.ctaLink}>Começar agora</Link> */}
          </nav>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>© {new Date().getFullYear()} Cau Solutions — treino seguro, moderno e confiável.</p>
          <a href="mailto:arlindolazaro202@gmail.com">arlindolazaro202@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}
