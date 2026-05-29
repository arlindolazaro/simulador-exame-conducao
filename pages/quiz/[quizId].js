import { useMemo, useState } from 'react';
import Link from 'next/link';
import quizData from '@/data/quiz-data.json';
import Layout from '@/components/Layout';
import QuestionCard from '@/components/QuestionCard';
import QuizSummary from '@/components/QuizSummary';
import styles from '@/styles/Quiz.module.css';

export default function QuizPage({ quizSet }) {
  const questions = quizSet.questions;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(-1));
  const [finished, setFinished] = useState(false);

  const answeredCount = answers.filter((answer) => answer !== -1).length;
  const correctCount = useMemo(() => {
    return answers.reduce((total, answer, index) => {
      return total + (answer === questions[index].answerIndex ? 1 : 0);
    }, 0);
  }, [answers, questions]);

  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (selectedIndex) => {
    if (finished) return;
    const nextAnswers = [...answers];
    nextAnswers[currentIndex] = selectedIndex;
    setAnswers(nextAnswers);
  };

  const handleNavigate = (index) => {
    if (index < 0 || index >= questions.length) return;
    setCurrentIndex(index);
  };

  const handleFinish = () => {
    setFinished(true);
  };

  const handleRestart = () => {
    setAnswers(Array(questions.length).fill(-1));
    setCurrentIndex(0);
    setFinished(false);
  };

  return (
    <Layout>
      <div className={styles.header}>
        <div>
          <p className={styles.bread}>Quiz / {quizSet.title}</p>
          <h1>{quizSet.title}</h1>
          <p className={styles.subtitle}>{quizSet.description}</p>
        </div>

        <div className={styles.metaCard}>
          <div>
            <strong>{answeredCount}</strong>
            <span>Respondidas</span>
          </div>
          <div>
            <strong>{questions.length}</strong>
            <span>Total</span>
          </div>
          <div>
            <strong>{Math.round((answeredCount / questions.length) * 100)}%</strong>
            <span>Progresso</span>
          </div>
        </div>
      </div>

      <div className={styles.quizGrid}>
        <div className={styles.mainCard}>
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
            selectedAnswer={answers[currentIndex]}
            reviewMode={finished}
            onSelect={handleOptionSelect}
          />

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.secondaryButton}
              onClick={() => handleNavigate(currentIndex - 1)}
              disabled={currentIndex === 0}
            >
              Anterior
            </button>
            <button
              type="button"
              className={styles.secondaryButton}
              onClick={() => handleNavigate(currentIndex + 1)}
              disabled={currentIndex === questions.length - 1}
            >
              Próximo
            </button>
            {!finished ? (
              <button type="button" className={styles.primaryButton} onClick={handleFinish}>
                Finalizar Quiz
              </button>
            ) : (
              <button type="button" className={styles.primaryButton} onClick={handleRestart}>
                Refazer
              </button>
            )}
          </div>

          <div className={styles.numbersGrid}>
            {questions.map((_, index) => {
              const answered = answers[index] !== -1;
              return (
                <button
                  type="button"
                  key={index}
                  className={`${styles.navNumber} ${currentIndex === index ? styles.activeNumber : ''} ${answered ? styles.answeredNumber : ''}`}
                  onClick={() => handleNavigate(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>

        <aside className={styles.sideCard}>
          <div className={styles.summaryBox}>
            <h2>Resumo</h2>
            <p>
              {answeredCount} de {questions.length} perguntas respondidas.
            </p>
            <p>Escolha as respostas e finalize o quiz para ver o resultado.</p>
          </div>

          {finished && (
            <QuizSummary
              correctCount={correctCount}
              totalQuestions={questions.length}
              onRestart={handleRestart}
            />
          )}

          <div className={styles.homeLink}>
            <Link href="/">Voltar ao início</Link>
          </div>
        </aside>
      </div>
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: quizData.map((item) => ({ params: { quizId: item.id } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const quizSet = quizData.find((item) => item.id === params.quizId);
  if (!quizSet) {
    return { notFound: true };
  }

  return {
    props: {
      quizSet,
    },
  };
}
