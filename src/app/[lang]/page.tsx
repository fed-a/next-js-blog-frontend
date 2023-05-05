import './home.css';
import { Params } from './types';

export default function Home({ params }: Params) {
  // eslint-disable-next-line no-unused-vars
  const { lang } = params;
  return (
    <main>
      <section className="hero-bg-gradient-light dark:hero-bg-gradient min-h-[100dvh]">
        Главная
      </section>
    </main>
  );
}
