import { Metadata } from 'next';

import { LandingDocument, LandingQueryResult, LandingQueryVariables } from '@/gql';

import { fetchAPI } from '@/lib/api';

import './home.css';
import { Params } from './types';

export const metadata: Metadata = {
  title: 'Anton Fedulov',
};

export default async function Home({ params }: Params) {
  const { lang } = params;

  const landingData = await fetchAPI<LandingQueryResult, LandingQueryVariables>(LandingDocument, {
    locale: lang,
  });

  const { hero, about, project, blog } = landingData?.data ?? {};

  const heroAttributes = hero?.data?.attributes;
  const aboutAttributes = about?.data?.attributes;
  const projectAttributes = project?.data?.attributes;
  const blogAttributes = blog?.data?.attributes;

  return (
    <>
      <main className="container">
        <section className="af-hero__bg"></section>
        <section className="min-h-[100dvh]">
          <p>{heroAttributes?.name}</p>
          <p>{heroAttributes?.toContacts}</p>
          <p>{heroAttributes?.toWorks}</p>
          <p>{heroAttributes?.down}</p>
        </section>
        <section className="min-h-[100dvh]">
          <p>{aboutAttributes?.title}</p>
          <p>{aboutAttributes?.myStack}</p>
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
    </>
  );
}
