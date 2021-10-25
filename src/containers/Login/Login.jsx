import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../../components/InputField/InputFIeld';
import Button from '../../components/Button/Button';
import { LoginStyled } from './LoginStyled';
import { LoginUserAction } from '../../store/auth/actions';

const schema = yup.object().shape({
  userName: yup.string().default('').required().min(4),
  password: yup.string().default('').required().min(4),
});

const Login = () => {

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  const onSumbitHandler = (values) => {
    dispatch(LoginUserAction(values));
  };

  return (
    <LoginStyled>
      <Formik
        initialValues={schema.cast()}
        validationSchema={schema}
        onSubmit={(values) => onSumbitHandler(values)}
        auto
      >
        {() => (
          <Form className="Login__Form">
            <InputField
              autoComplete="off"
              name="userName"
              type="text"
              placeholder="Username"
            />
            <InputField
              name="password"
              type="password"
              placeholder="Password"
            />
            <Button
              loading={loading}
              className="Login__Form__Btn"
              type="submit"
            >
              Log in
            </Button>
          </Form>
        )}
      </Formik>
    </LoginStyled>
  );
};

export default Login;
