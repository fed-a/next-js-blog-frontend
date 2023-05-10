import { LandingDocument, LandingQueryResult, LandingQueryVariables } from '@/gql';

import { getClient } from '@/lib/apollo/client';

import './home.css';
import { Params } from './types';

export default async function Home({ params }: Params) {
  const { lang } = params;

  const client = getClient();
  const landingData = await client.query<LandingQueryResult['data'], LandingQueryVariables>({
    query: LandingDocument,
    variables: {
      locale: lang,
    },
  });

  const { hero, about, project, blog } = landingData.data ?? {};

  const heroAttributes = hero?.data?.attributes;
  const aboutAttributes = about?.data?.attributes;
  const projectAttributes = project?.data?.attributes;
  const blogAttributes = blog?.data?.attributes;

  return (
    <main>
      <section className="hero-bg-gradient-light dark:hero-bg-gradient min-h-[100dvh]">
        <p>{heroAttributes?.name}</p>
        <p>{heroAttributes?.toContacts}</p>
        <p>{heroAttributes?.toWorks}</p>
        <p>{heroAttributes?.down}</p>
      </section>
      <section className="min-h-[100dvh]">
        <p>{aboutAttributes?.title}</p>
        <p>{aboutAttributes?.myStack}</p>
        <p>{aboutAttributes?.stack}</p>
      </section>
      <section className="min-h-[100dvh]">
        <p>{projectAttributes?.title}</p>
      </section>
      <section className="min-h-[100dvh]">
        <p>{blogAttributes?.title}</p>
        <p>{blogAttributes?.tip}</p>
        <p>{blogAttributes?.lastPostsTitle}</p>
      </section>
    </main>
  );
}
