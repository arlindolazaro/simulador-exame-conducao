import Link from 'next/link';
import styles from '@/styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand} aria-label="Simulador">
            <img src="/logo.svg" alt="Cau Solutions" className={styles.logo} />
            <span className={styles.brandText}>Simulador • Cau Solutions</span>
          </Link>

          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Início</Link>
            <Link href="/" className={styles.ctaLink}>Começar</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div>
            © {new Date().getFullYear()} Cau Solutions —
            <a href="mailto:arlindolazaro202@gmail.com" style={{ marginLeft: 8, color: '#2563eb' }}>
              arlindolazaro202@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
