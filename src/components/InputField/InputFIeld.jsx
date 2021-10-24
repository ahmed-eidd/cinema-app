import { ErrorMessage, Field } from 'formik';
import React from 'react';
import { InputFieldStyled } from './InputFieldStyled';

const InputFIeld = ({
  name,
  label,
  placeholder,
  style,
  className,
  ...props
}) => (
  <InputFieldStyled className={className}>
    <label htmlFor={name}>
      {' '}
      {label}
    </label>
    <Field
      name={name}
      {...props}
      className="InputField"
      placeholder={placeholder}
    />
    <ErrorMessage name={name}>
      {(msg) => <p className="ErrorMessage">{msg}</p>}
    </ErrorMessage>
  </InputFieldStyled>
);

export default InputFIeld;
