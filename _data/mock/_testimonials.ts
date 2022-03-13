import _mock from './_mock';

// ----------------------------------------------------------------------

export const _testimonials = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  role: _mock.role(index),
  avatar: _mock.image.avatar(index),
  rating: 5,
  review: _mock.text.reviews(index)
}));
