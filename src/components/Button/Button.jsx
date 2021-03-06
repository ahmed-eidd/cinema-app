import React from 'react';
import { Spinner } from 'react-bootstrap';
import { ButtonStyled } from './ButtonStyled';

/* eslint-disable react/prop-types */

const Button = ({
  type = 'button', className, children, loading = false,
}) => (
  <ButtonStyled className={className} type={type} disabled={loading}>
    <span className="Button__Text">{children}</span>
    {loading && (
    <div className="Button__Spinner">
      <Spinner as="span" animation="border" role="status" />
    </div>
    )}
  </ButtonStyled>
);

export default Button;
