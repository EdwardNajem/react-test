import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer() {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'Option 1' },
    { key: 'Option 2', value: 'Option 2' },
    { key: 'Option 3', value: 'Option 3' },
  ];
  const radioOptions = [
    { key: 'Option 1', value: 'Option 1' },
    { key: 'Option 2', value: 'Option 2' },
    { key: 'Option 3', value: 'Option 3' },
  ];
  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption 1' },
    { key: 'Option 2', value: 'cOption 2' },
    { key: 'Option 3', value: 'cOption 3' },
  ];
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOptions: '',
    checkboxOption: [],
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOptions: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required'),
  });
  const onSubmit = (values) => console.log('Form Data:', values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            type="description"
            label="Description"
            name="description"
          />
          <FormikControl
            control="select"
            type="options"
            label="Select a Topic"
            name="selectoptions"
            options={dropdownOptions}
          />
          <FormikControl
            control="radio"
            label="Radio Topic"
            name="radioOptions"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="Checkbox topics"
            name="checkboxOption"
            options={checkboxOptions}
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default FormikContainer;
