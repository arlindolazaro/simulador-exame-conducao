import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import quizData from '@/data/quiz-data.json';
import styles from '@/styles/Home.module.css';

const exams = quizData.filter((item) => item.title.toUpperCase().startsWith('EXAME'));
const tests = quizData.filter((item) => item.title.toUpperCase().startsWith('TESTE'));

export default function Home() {
  const [name, setName] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
  };

  const resetFlow = () => {
    setHasStarted(false);
    setSelectedCategory(null);
    setName('');
  };

  const itemsToShow = selectedCategory === 'EXAME' ? exams : selectedCategory === 'TESTE' ? tests : [];

  return (
    <Layout>
      <main className={styles.page}>
        <section className={styles.heroModern}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Treino profissional</span>
            <h1>Simulador de Exame de Condução</h1>
            <p>
              Uma experiência moderna, rápida e confiável para praticar exames e testes com feedback claro, navegação intuitiva e design preparado para Vercel.
            </p>
            <div className={styles.benefitRow}>
              <span>✓ Questões reais</span>
              <span>✓ Progresso em tempo real</span>
              <span>✓ Interface mobile-first</span>
            </div>
          </div>
          <aside className={styles.heroCard}>
            <p className={styles.heroCardTitle}>Comece a treinar</p>
          {!hasStarted ? (
            <>
              <label className={styles.fieldLabel} htmlFor="visitorName">
                Como prefere ser chamado?
              </label>
              <div className={styles.fieldInputRow}>
                <input
                  id="visitorName"
                  type="text"
                  className={styles.fieldInput}
                  placeholder="Ex: Ana, João..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button type="button" className={styles.ctaButton} onClick={handleStart}>
                  Continuar
                </button>
              </div>
              <p className={styles.heroNote}>Insira o seu nome para personalizar a experiência e continuar com confiança.</p>
            </>
          ) : !selectedCategory ? (
            <div>
              <p className={styles.heroNote}>Olá, {name || 'treinador'} — escolha um modo para começar:</p>
              <div className={styles.buttonGroup}>
                <button className={styles.primaryButton} onClick={() => handleSelectCategory('EXAME')}>
                  Exames completos
                </button>
                <button className={styles.primaryButton} onClick={() => handleSelectCategory('TESTE')}>
                  Testes rápidos
                </button>
              </div>
              <div className={styles.infoPill}>Escolha o modo que melhor serve o seu treino.</div>
              <div style={{ marginTop: 18 }}>
                <button className={styles.navLinkLike} onClick={resetFlow}>Voltar</button>
              </div>
            </div>
          ) : (
            <div>
              <p className={styles.heroNote}>Mostrando: {selectedCategory === 'EXAME' ? 'Exames' : 'Testes'}</p>
              <div style={{ marginTop: 12 }}>
                <button className={styles.navLinkLike} onClick={() => setSelectedCategory(null)}>Voltar</button>
              </div>
            </div>
          )}
        </aside>
      </section>

      {selectedCategory && (
        <section className={styles.sectionList}>
          <div className={styles.sectionHeaderAlt}>
            <p className={styles.sectionOverline}>{selectedCategory === 'EXAME' ? 'Exames' : 'Testes'}</p>
            <h2>{selectedCategory === 'EXAME' ? 'Exames completos' : 'Testes rápidos'}</h2>
            <p className={styles.sectionIntro}>Selecione um conjunto para iniciar a sua sessão de treino.</p>
          </div>
          <div className={styles.gridWide}>
            {itemsToShow.map((item) => (
              <Link key={item.id} href={`/quiz/${item.id}`} className={styles.cardWide}>
                <span className={styles.cardTag}>{item.title.split(' ')[0]}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.cardFooter}>
                  <span>{item.questions.length} perguntas</span>
                  <strong>Começar →</strong>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      </main>
    </Layout>
  );
}
