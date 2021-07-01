import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Checkbox from "../components/Checkbox";
import CheckoutSummary from "../components/CheckoutSummary";
import OrderConfirmation from "../components/OrderConfirmation";

const StyledCheckout = styled.div`
  background-color: #f2f2f2;
`;

const CheckoutFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10.3125rem;
  margin-top: -1.125rem;
  margin-bottom: 8.8125rem;
`;

const CheckoutForm = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.white};
  width: 45.625rem;
  padding: 3rem;
  padding-top: 3.375rem;
  border-radius: 8px;
`;

const CheckoutTitle = styled.h1`
  font: ${({ theme }) => theme.typography.h3};
  letter-spacing: 1.15px;
  font-weight: bold;
  text-transform: uppercase;
`;

const CheckoutSection = styled.div`
  margin-top: 3rem;
`;

const CheckoutSectionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CheckoutSectionTitle = styled.h2`
  font: ${({ theme }) => theme.typography.subTitle};
  color: ${({ theme }) => theme.colors.brand.peru};
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 3rem;
`;

const RadioInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const RadioInputName = styled.div`
  font: ${({ theme }) => theme.typography.body};
  font-weight: 700;
`;

const Checkout = () => {
  const [showConfirmation, setShowConfirmation] = React.useState(false);

  return (
    <StyledCheckout>
      {showConfirmation && (
        <OrderConfirmation hide={() => setShowConfirmation(false)} />
      )}
      <Header variant="filled" />
      <Button.Back />
      <CheckoutFormWrapper>
        <CheckoutForm>
          <CheckoutTitle>Checkout</CheckoutTitle>
          <CheckoutSection>
            <CheckoutSectionTitle>Billing Details</CheckoutSectionTitle>
            <CheckoutSectionRow>
              <TextInput name="Name" placeholder="Alexei" />
              <TextInput name="Email Address" placeholder="alexei@gmail.com" />
              <TextInput name="Phone Number" placeholder="+1 202-555-0136" />
            </CheckoutSectionRow>
          </CheckoutSection>
          <CheckoutSection>
            <CheckoutSectionTitle>Shipping Info</CheckoutSectionTitle>
            <CheckoutSectionRow>
              <TextInput
                name="Address"
                placeholder="1137 Williams Avenue"
                full
              />
              <TextInput name="Zip Code" placeholder="1001" />
              <TextInput name="City" placeholder="New York" />
              <TextInput name="Country" placeholder="United States" />
            </CheckoutSectionRow>
          </CheckoutSection>
          <CheckoutSection>
            <CheckoutSectionTitle>Payment Details</CheckoutSectionTitle>
            <CheckoutSectionRow>
              <RadioInputWrapper>
                <RadioInputName>Payment method</RadioInputName>
                <div>
                  <Checkbox
                    name="payment-method"
                    label="e-Money"
                    id="e-money"
                  />
                  <Checkbox
                    name="payment-method"
                    label="Cash on Delivery"
                    id="cash"
                  />
                </div>
              </RadioInputWrapper>
              <TextInput name="e-Money Number" placeholder="238521993" />
              <TextInput name="e-Money PIN" placeholder="6891" />
            </CheckoutSectionRow>
          </CheckoutSection>
        </CheckoutForm>
        <CheckoutSummary showConfirmation={() => setShowConfirmation(true)} />
      </CheckoutFormWrapper>
      <Footer />
    </StyledCheckout>
  );
};

export default Checkout;
