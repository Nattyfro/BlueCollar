import { ReactElement } from 'react';
// utils
import { getAllPosts } from '../src/utils/get-mardown/career/posts';
// hooks
import { useRequest } from '../src/hooks';
// @types
import { JobProps } from '../src/@types/career';
// _data
import {
  _testimonials,
  _jobsByCountries,
} from '../_data/mock';
// layouts
import Layout from '../src/layouts';``
// components
import { Page, ErrorScreen } from '../src/components';
// sections
import { NewsletterTravel } from '../src/sections/newsletter';
import { TestimonialsCareer } from '../src/sections/testimonials';
// MYLES --- import { OurClientsCareer } from '../../src/sections/our-clients';
import {
  CareerLandingHero,
  CareerLandingGettingStarted,
  CareerLandingFeaturedJobs,
  // MYLES --- CareerLandingTopCompanies,
  CareerLangdingConnections,
  CareerLangdingForRecruiters,
} from '../src/sections/@career';

// ----------------------------------------------------------------------

export default function CareerLandingPage() {
  const { data: jobs = [], error } = useRequest<JobProps[]>({
    url: `/api/career/jobs`,
  });

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Landing - Career"> 
      <CareerLandingHero />

      <CareerLangdingConnections countries={_jobsByCountries} />
      
      <CareerLandingGettingStarted />

      <NewsletterTravel />

      <CareerLandingFeaturedJobs jobs={jobs.slice(-6)} />

      <TestimonialsCareer testimonials={_testimonials} />
      
      <CareerLangdingForRecruiters />

    </Page>
  );
}

// ----------------------------------------------------------------------

CareerLandingPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout transparentHeader>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}