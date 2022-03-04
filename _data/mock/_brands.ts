import _mock from './_mock';

// ----------------------------------------------------------------------

const BRANDS_NAME = [
  'Facebook1',
  'Instagram',
  'TikTok',
  'LinkedIn',
  'heroku',
  'lenovo',
  'microsoft',
  'netflix',
  'slack',
  'spotify',
  'tripadvisor',
  'vimeo',
];


/*
const BRANDS_NAME = [
  'airbnbz',
  'dropbox',
  'facebook',
  'google',
  'heroku',
  'lenovo',
  'microsoft',
  'netflix',
  'slack',
  'spotify',
  'tripadvisor',
  'vimeo',
]; */

export const _brands = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  // image: `https://zone-assets-api.vercel.app/assets/logos/${brand}.svg`,
  image: `https://blue-collar.vercel.app/assets/logos/${brand}.svg`,
}));

export const _brandsColor = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `https://zone-assets-api.vercel.app/assets/logos/${brand}_original.svg`,
}));


