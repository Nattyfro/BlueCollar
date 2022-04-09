// ----------------------------------------------------------------------

export const _paymentMethods = [
  {
    value: 'paypal',
    label: 'Pay Me Hourly',
    caption: 'You will be redirected to PayPal website to complete your purchase securely.',
    icons: ['https://zone-assets-api.vercel.app/assets/icons/payment/ic_paypal.svg'],
  },
  {
    value: 'monthly',
    label: 'Pay Me Monthly',
    caption: 'We support Mastercard, Visa, Discover and Stripe.',
    icons: [
      'https://zone-assets-api.vercel.app/assets/icons/payment/ic_visa.svg',
    ],
  },

  {
    value: 'annually',
    label: 'Pay Me Annually',
    caption: 'We support Mastercard, Visa, Discover and Stripe.',
    icons: [
      'https://zone-assets-api.vercel.app/assets/icons/payment/ic_mastercard.svg',
      
    ],
  },

];
