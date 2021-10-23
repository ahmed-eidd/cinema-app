import { Formik, Form } from 'formik';
import React from 'react';
import InputField from '../../components/InputField/InputFIeld';
import Button from '../../components/Button/Button';
import LoginShape from '../../components/Icons/LoginShape';
import { LoginStyled } from './LoginStyled';
import Footer from '../../components/Footer/Footer';
import LoginLayout from '../../components/LoginLayout/LoginLayout';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { LoginUserAction } from '../../store/auth/actions';
import { useSelector } from 'react-redux';

const schema = yup.object().shape({
  userName: yup.string().required().min(4).default(''),
  password: yup.string().required().min(4).default(''),
});

const Login = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  const onSumbitHandler = (values) => {
    dispatch(LoginUserAction(values));
  };

  return (
    <LoginLayout>
      <LoginStyled>
        <Formik
          initialValues={schema.cast()}
          validationSchema={schema}
          onSubmit={(values) => onSumbitHandler(values)}
          auto
        >
          {() => (
            <Form autoComplete='off' className='Login__Form'>
              <InputField
                autoComplete='off'
                name='userName'
                type='text'
                placeholder='Username'
              />
              <InputField
                name='password'
                type='password'
                placeholder='Password'
              />
              <Button
                loading={loading}
                className='Login__Form__Btn'
                type='submit'
              >
                Log in
              </Button>
            </Form>
          )}
        </Formik>
      </LoginStyled>
    </LoginLayout>
  );
};

export default Login;
