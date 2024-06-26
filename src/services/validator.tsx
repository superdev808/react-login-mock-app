import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  rememberMe: Yup.boolean().default(true),
});