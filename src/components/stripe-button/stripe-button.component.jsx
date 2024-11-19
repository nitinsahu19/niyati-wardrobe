import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51QMjwbGC5mck7tK00JrwAq2FfdrrJTyAUmHH4875zDuKLk1TaRjBiXi2MTyEO7gshE6ZCgLuRt9Ys86YS55wHnIZ00oi7jzxBv";

  const ontoken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Niyati Wardrobe Pvt. Ltd."
      billingAddress
      shippingAddress
      image="https://cdn-icons-png.flaticon.com/512/892/892458.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={ontoken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
