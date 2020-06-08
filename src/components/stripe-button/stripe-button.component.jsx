import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GrWlGBtJ6xAcoA3SR3DCtMGlvb9bqwLqbpDt2NgZkJM3NzpOkB27RyWoF5izoBKkS9x17PoKKY95llkX5eTBrE300XtgJAcP0';

    const onToken =token=>{
        console.log(token);
        alert('Payment Succesful');
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name= 'RealONES Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            desprciption={`Your total is $ ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;