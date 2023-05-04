import './home.css';
import { Params } from './types';

export default function Home({ params }: Params) {
  const { lang } = params;
  console.log({ lang });
  return (
    <main>
      <section className="hero-bg-gradient-light dark:hero-bg-gradient min-h-[100dvh]">
        Главная
      </section>
    </main>
  );
}
