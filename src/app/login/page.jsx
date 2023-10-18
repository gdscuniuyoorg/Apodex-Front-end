/* eslint-disable @next/next/no-img-element */
'use client';
/* eslint-disable @next/next/no-img-element */
import Logo from '../../components/Logo/page';
import Link from 'next/link';
import CustomButton from '../../components/Button/page';
import Input from '../../components/InputField/page';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    };

    return (
        <main className="w-screen h-screen center">
            <div className="w-[85%] h-[100%] center">
                <div className="w-1/2 h-full" style={{ background: "url(/images/signIn.png)", backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
                <div className="w-1/2 h-full px-16 pt-8 flex items-center">
                    <div className="flex-col flex w-full h-full gap-6">
                        <Logo />
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-lg leading-[46.867px]'>
                                Sign In
                            </h1>
                            <p className='leading-[19.2px] text-[14px]'>
                                It is good to have you back with us here at Talent Hunt
                            </p>
                        </div>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className='center w-full flex-col mb-6'>
                                        <div className='w-full'>
                                            <CustomButton onClick={() => {}}  fontWeight="bold">
                                                <img src="/svgs/google.svg" alt="google icon" />
                                                <p className='leading-[24px] noto-sans text-white'>
                                                    Sign In with Google
                                                </p>
                                            </CustomButton>
                                        </div>
                                        <div className='between w-full my-4'>
                                            <div className='bg-gray h-[1px] w-[43%]'></div>
                                            <p>or</p>
                                            <div className='bg-gray h-[1px] w-[43%]'></div>
                                        </div>
                                        <div className='flex flex-col w-full gap-3'>
                                            <Input type='email' label="Email Address" name="email" />
                                            <Input type='password' label="Password" name="password" />
                                        </div>
                                    </div>

                                    <div className='flex items-start leading-[19.2px] text-foundation text-sm mb-6'>
                                        <Link href="#">Forgot Password?</Link>
                                    </div>

                                    <CustomButton type="submit" disabled={isSubmitting} backgroundColor='#E6E6E6' boxShadow='0px -1px 0.5px 0px rgba(14, 14, 44, 0.40) inset' border='none'>
                                        <p className='uppercase font-semibold'>
                                            Sign In
                                        </p>
                                    </CustomButton>
                                </Form>
                            )}
                        </Formik>

                        <div className='center gap-1 leading-[120%] text-[14px]'>
                            <p>
                                Don’t have an account? 
                            </p>
                            <Link className='text-foundation' href="#">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;
