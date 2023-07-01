import { Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import FormikControl from './Formik/FormikControl';
import './form/forms.css';

function DeliveryForm() {
  const navigate = useNavigate();
  const options = [
    { key: 'Cash On Delivery', value: 'cashdeli' },
    { key: 'Pay On Credit', value: 'creditcard' },
  ];

  const initialValues = {
    country: '',
    city: '',
    street: '',
    building: '',
    formOfPayment: '',
  };

  const validationSchema = Yup.object().shape({
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    street: Yup.string().required('Required'),
    building: Yup.string().required('Required'),
    formOfPayment: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form Data: ', values);
    navigate('/');
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <div className="App-in">
              <Form className="login">
                <h1 className="form-h1">Delivery</h1>
                <FormikControl
                  control="input"
                  type="text"
                  label="Country"
                  name="country"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="City"
                  name="city"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Street"
                  name="street"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Building"
                  name="building"
                />
                <FormikControl
                  control="radio"
                  name="formOfPayment"
                  label="Payment Type"
                  options={options}
                />

                <button
                  className="submit-btn"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Order Now
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
}

export default DeliveryForm;
