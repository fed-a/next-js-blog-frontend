import './home.css';

export default function Home({ params }: { params: { lang: string } }) {
  const { lang } = params;
  return (
    <main>
      <section className="hero-bg-gradient-light dark:hero-bg-gradient min-h-[100dvh]">
        Главная
      </section>
    </main>
  );
}
