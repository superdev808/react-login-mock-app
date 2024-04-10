import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { signInSchema } from '../../services/validator';
import { signInSchema } from "../../services/validator";
import loginImg from "../../assets/login.jpg";
import { ThreeDotLoading } from "../ui-components/loading-indicator";
import { AuthContext } from '../../services/contexts/auth-context';

const SignInForm: React.FC<{}> = () => {
  const { setAuthenticated } = useContext(AuthContext);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt="" />
      </div>

      <div className='bg-gray-800 flex flex-col justify-center'>
        <Formik
          initialValues={{ email: '', password: '', rememberMe: true }}
          validationSchema={signInSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Handle form submission
            setTimeout(() => {
              setAuthenticated(true)
              console.log(values);
              setSubmitting(false);
            }, 3000);
          }}
        >
          {({ isSubmitting }) => (
            <Form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
              <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
              <div className='flex flex-col text-gray-400 py-2'>
                <label htmlFor='email' className='self-start'>Email</label>
                <Field name="email" type="email" placeholder="Email" className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" />
                <ErrorMessage name='email' component='div' className='text-red-500 self-end' />
              </div>
              <div className='flex flex-col text-gray-400 py-2'>
                <label htmlFor='password' className='self-start'>Password</label>
                <Field name="password" type="password" placeholder="Password" className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" />
                <ErrorMessage name='password' component='div' className='text-red-500 self-end' />
              </div>
              <div className='flex justify-between text-gray-400 py-2'>
                <p className='flex items-center'>
                  <Field name="rememberMe" type="checkbox" className='mr-2' />
                  Remember Me
                </p>
                <p className='underline underline-offset-4 decoration-dotted'>Forgot Password</p>
              </div>
              <button type="submit" disabled={isSubmitting} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
                {isSubmitting ? <ThreeDotLoading /> : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignInForm;