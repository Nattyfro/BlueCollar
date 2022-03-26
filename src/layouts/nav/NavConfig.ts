// routes
import Routes from '../../routes';
// _data

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: '1',
    subheader: 'Hot Links',
    items: [
      { title: 'Home', path: Routes.career.landing },
      { title: 'Candidates', path: Routes.career.jobs },
      { title: 'Support', path: Routes.support },
    ],
  },
];

export const navConfig = [
  {
    title: 'Candidates',
    path: Routes.career.jobs
  },
  
  {
    title: 'Favourites',
    path: Routes.career.favourites
  },
  {
    title: 'Support',
    path: Routes.support
  },

  
];



/* Career
career: {
  landing: '/career',
  jobs: '/career/jobs',
  job: (id: string) => `/career/jobs/${id}`,
  posts: '/career/blog',
  post: (slug: string) => `/career/blog/${slug}`,
  about: '/career/about-us',
  contact: '/career/contact-us',
}, */