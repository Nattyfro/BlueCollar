// routes
import Routes from '../../routes';
// _data

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: '1',
    subheader: 'Hot Links',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_career.jpg',
    items: [
      { title: 'Home', path: Routes.career.landing },
      { title: 'Candidates', path: Routes.career.jobs },
      { title: 'Support', path: Routes.support },
    ],
  },
];

export const navConfig = [
  // MYLES { title: 'Home', path: '' },
  // MYLES { title: 'Components', path: Routes.componentsUI },
  // MYLES { title: 'Documentation', path: Routes.docs },
  /* MYLES {
    title: 'Pages',
    path: Routes.pages,
    children: [PageLinks[0], PageLinks[4], PageLinks[1], PageLinks[3], PageLinks[2], PageLinks[5]],
  }, */
  {
    title: 'Candidates',
    path: Routes.career.jobs
  },
  
  {
    title: 'Favourites',
    path: Routes.registerIllustration
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