import React, { useContext } from "react";
import styled from "styled-components";
import { Redirect } from "react-router";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { CartContext } from "../contexts/CartContext";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import CheckoutSummary from "../components/CheckoutSummary";
import OrderConfirmation from "../components/OrderConfirmation";
import RadioInput from "../components/RadioInput";

const StyledCheckout = styled.div`
  background-color: #f2f2f2;
`;

const CheckoutFormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;
  margin-top: -1.125rem;
  margin-bottom: 6.0625rem;

  ${({ theme }) => theme.screens.tablet} {
    margin: 0 2.5rem;
    margin-bottom: 8.8125rem;
  }

  ${({ theme }) => theme.screens.laptop} {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 10.3125rem;
    margin-bottom: 8.8125rem;
  }
`;

const CheckoutForm = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.white};
  padding: 1.5rem;
  padding-top: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;

  ${({ theme }) => theme.screens.laptop} {
    padding: 3rem;
    padding-top: 3.375rem;
    width: 45.625rem;
    margin-bottom: 0;
  }
`;

const CheckoutTitle = styled.h1`
  font: ${({ theme }) => theme.typography.h4};
  letter-spacing: 2px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;

  ${({ theme }) => theme.screens.tablet} {
    font: ${({ theme }) => theme.typography.h3};
    font-weight: bold;
    letter-spacing: 1.15px;
  }
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
  margin-top: 2rem;

  ${({ theme }) => theme.screens.tablet} {
    margin-top: 3rem;
  }
`;

const RadioInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.5rem;

  ${({ theme }) => theme.screens.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const RadioInputName = styled.div`
  font: ${({ theme }) => theme.typography.body};
  font-weight: 700;
  margin-bottom: 1rem;

  ${({ theme }) => theme.screens.tablet} {
    margin-bottom: 0;
  }
`;

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [showConfirmation, setShowConfirmation] = React.useState(false);

  if (cartItems.length === 0) return <Redirect to="/" />;

  return (
    <StyledCheckout>
      {showConfirmation && (
        <OrderConfirmation hide={() => setShowConfirmation(false)} />
      )}
      <Header variant="filled" />
      <Button.Back />

      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          address: "",
          zipCode: "",
          city: "",
          country: "",
          paymentMethod: "cash",
          eMoneyNumber: "",
          eMoneyPin: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(/[a-zA-Z]/, "Only alphabets allowed")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          phoneNumber: Yup.string().matches(/[0-9]/, "Only numbers allowed"),
          address: Yup.string().required("Required"),
          zipCode: Yup.string().matches(/[0-9]/, "Only numbers allowed"),
          city: Yup.string().required("Required"),
          country: Yup.string().required("Required"),
          eMoneyNumber: Yup.string().matches(/[0-9]/, "Only numbers allowed"),
          eMoneyPin: Yup.string().matches(/[0-9]/, "Only numbers allowed"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            setShowConfirmation(true);
          }, 500);
        }}
      >
        <CheckoutFormWrapper>
          <CheckoutForm>
            <CheckoutTitle>Checkout</CheckoutTitle>
            <CheckoutSection>
              <CheckoutSectionTitle>Billing Details</CheckoutSectionTitle>
              <CheckoutSectionRow>
                <TextInput
                  type="text"
                  label="Name"
                  name="name"
                  placeholder="Alexei"
                />
                <TextInput
                  type="email"
                  label="Email Address"
                  name="email"
                  placeholder="alexei@gmail.com"
                />
                <TextInput
                  type="text"
                  label="Phone Number"
                  name="phoneNumber"
                  placeholder="+1 202-555-0136"
                />
              </CheckoutSectionRow>
            </CheckoutSection>
            <CheckoutSection>
              <CheckoutSectionTitle>Shipping Info</CheckoutSectionTitle>
              <CheckoutSectionRow>
                <TextInput
                  type="text"
                  label="Address"
                  name="address"
                  placeholder="1137 Williams Avenue"
                  full
                />
                <TextInput
                  type="text"
                  label="Zip Code"
                  name="zipCode"
                  placeholder="1001"
                />
                <TextInput
                  type="text"
                  label="City"
                  name="city"
                  placeholder="New York"
                />
                <TextInput
                  type="text"
                  label="Country"
                  name="country"
                  placeholder="United States"
                />
              </CheckoutSectionRow>
            </CheckoutSection>
            <CheckoutSection>
              <CheckoutSectionTitle>Payment Details</CheckoutSectionTitle>
              <CheckoutSectionRow>
                <RadioInputWrapper>
                  <RadioInputName>Payment method</RadioInputName>
                  <div>
                    <RadioInput
                      name="paymentMethod"
                      label="e-Money"
                      id="eMoney"
                      value="eMoney"
                    />
                    <RadioInput
                      name="paymentMethod"
                      label="Cash on Delivery"
                      id="cash"
                      value="cash"
                    />
                  </div>
                </RadioInputWrapper>
                <TextInput
                  type="number"
                  label="e-Money Number"
                  name="eMoneyNumber"
                  placeholder="238521993"
                />
                <TextInput
                  type="number"
                  label="e-Money PIN"
                  name="eMoneyPin"
                  placeholder="6891"
                />
              </CheckoutSectionRow>
            </CheckoutSection>
          </CheckoutForm>
          <CheckoutSummary />
        </CheckoutFormWrapper>
      </Formik>
      <Footer />
    </StyledCheckout>
  );
};

export default Checkout;
