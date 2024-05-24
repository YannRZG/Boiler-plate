import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './checkoutForm'; // Assurez-vous que le chemin est correct

// Remplacez 'your-publishable-key-here' par votre clé publique Stripe
const stripePromise = loadStripe('your-publishable-key-here');

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};