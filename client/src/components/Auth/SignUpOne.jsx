import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const SignUpOne = ({ formik, handleSubmit }) => {
  return (
    <>
      <div>
        <label htmlFor="email" className={`${formik.touched.email && formik.errors.email ? "text-orange-500" : "text-gray-900"} block mb-2 text-sm font-medium dark:text-white`}>
          {
            formik.touched.email && formik.errors.email ? formik.errors.email : "Your email"
          }
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-blue-600 focus:ring-blue-600 block w-full p-2.5"
          placeholder="name@university.com"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
      </div>
      <div>
        <label htmlFor="phone" className={`${formik.touched.phone && formik.errors.phone ? "text-orange-500" : "text-gray-900"} block mb-2 text-sm font-medium dark:text-white`}>
          {
            formik.touched.phone && formik.errors.phone ? formik.errors.phone : "Phone number"
          }
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-blue-600 focus:ring-blue-600 block w-full p-2.5"
          placeholder="+216 20 000 100"
          onChange={formik.handleChange}
          value={formik.values.phone}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className='flex flex-wrap gap-4'>
        <div className='flex-1'>
          <label htmlFor="password" className={`${formik.touched.password && formik.errors.password ? "text-orange-500" : "text-gray-900"} block mb-2 text-sm font-medium dark:text-white`}>
            {
              formik.touched.password && formik.errors.password ? formik.errors.password : "Password"
            }
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className='flex-1'>
          <label htmlFor="passwordConfirmation" className={`${formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? "text-orange-500" : "text-gray-900"} block mb-2 text-sm font-medium dark:text-white`}>
            {
              formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? formik.errors.passwordConfirmation : "Confirm password"
            }
          </label>
          <input
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirmation}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>
      <button type='button' onClick={handleSubmit} className="w-full flex gap-2 justify-center items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Sign up
        <FaArrowRight className='text-white font-semibold' />
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account? <a href="/signin" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign in</a>
      </p>
    </>
  )
}

export default SignUpOne