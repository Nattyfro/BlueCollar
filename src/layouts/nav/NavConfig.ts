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
      { title: 'Account', path: Routes.career.myAccount },
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
  {
    title: 'Settings',
    path: Routes.career.myAccount
  },

  
];