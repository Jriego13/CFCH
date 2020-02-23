import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import {StripeProvider, Elements, CardElement, injectStripe} from 'react-stripe-elements';

class _CardForm extends React.Component {
  render() {
    return (
      <form onSubmit={() => this.props.stripe.createToken().then(payload => console.log(payload))}>
        <CardElement />
        <button>Pay</button>
      </form>
    )
  }
}
const CardForm = injectStripe(_CardForm)

class Checkout extends React.Component {
  render() {
    return (
      <div className="Checkout">
        <h1>Available Elements</h1>
        <Elements>
          <CardForm />
        </Elements>
      </div>
    )
  }
}


function clicked(e){
  console.log("suck mike hawk");
}

function StripeCheckOut(props) {

  return(

    <div>
    <StripeProvider apiKey="pk_test_Ta0CNse03omUwFkkPuh55UbK001SUf4wKp">
      <Checkout />
    </StripeProvider>
    </div>
  );
}



export default StripeCheckOut;
