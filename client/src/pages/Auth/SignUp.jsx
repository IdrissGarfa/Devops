import React, { useState } from 'react'

import { useNavigate } from "react-router-dom"

import { FormikProvider, useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

import devopsBg from "../../../public/assets/devops.png";
import devopsLogo from "../../../public/assets/logo.png";

import { SiFacebook } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/Io";

import SignUpOne from '../../components/Auth/SignUpOne';
import SignUpTwo from '../../components/Auth/SignUpTwo';

const signupAPI = "http://localhost:8000/api/auth/signup";

const SignUp = () => {

  const [loading, setLoading] = useState(true);
  const [signUp, setSignUp] = useState(false);

  const navigate = useNavigate()

  setInterval(() => {
    setLoading(false);
  }, 1000);

  const formik = useFormik({

    initialValues: {
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      university: "",
      password: "",
      passwordConfirmation: ""
    },

    onSubmit: (values) => {
      axios.post(signupAPI,values)
      .then((res) => {
        console.log(res.data)
        navigate("/signin");
      })
      .catch((err) => console.log(err));
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
      ,
      phone: Yup.number()
        .required("Phone is required"),
      firstName: Yup.string()
        .required("First name is required"),
      lastName: Yup.string()
        .required("last name is required"),
      university: Yup.string()
        .required("University is required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Password is required"),
      passwordConfirmation: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Password missmatch"
        )
      })
    })

  });

  const validForm = [formik.values.email,formik.values.phone, formik.values.password ].every(Boolean) && formik.values.password === formik.values.passwordConfirmation;

  const handleSubmit = async () => {
      if (!signUp && validForm) {
          setSignUp(!signUp)
      }else if (signUp){
        formik.submitForm();
      }
  }


  return (
    <div className='flex h-screen'>
      {
        loading ? (

          <div role="status" className='absolute top-1/2 left-1/2'>
            <svg aria-hidden="true" className="w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
          </div>

        ) :
          (
            <>
              <section className='hidden md:flex flex-1 items-center justify-center'>
                <img className='h-[80%] ml-14' src={devopsBg} alt="img" />
              </section>
              <section className="dark:bg-gray-900 flex-1">
                <div className="flex flex-col items-center h-screen justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                  <div className='self-center mb-12 md:hidden'>
                    <img className='h-12 w-26' src={devopsLogo} alt="Devops logo" />
                  </div>
                  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-4xl dark:text-white">
                          Sign Up
                        </h1>
                      
                      <p className='text-sm leading-tight text-gray-700 md:text-md'>Join our devops community now!</p>
                      <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                        {
                          !signUp ? (
                            <SignUpOne handleSubmit={handleSubmit} formik={formik}/>
                          ) : (
                            <SignUpTwo formik={formik} />
                          )
                        }
                      </form>
                    </div>
                  </div>
                  <div className='mt-10'>
                    <ul className='flex gap-10 items-center text-2xl '>
                      <a href='https://www.facebook.com/devops.isima' target={'_blank'}><SiFacebook className='text-blue-600' /></a>
                      <a href='https://www.instagram.com/devops_isima/' target={'_blank'}><BsInstagram className='text-orange-500' /></a>
                      <a href='#' target={'_blank'}><IoLogoTwitter className='text-blue-600' /></a>
                    </ul>
                  </div>
                </div>
              </section>
            </>)}
    </div>
  )
}

export default SignUp