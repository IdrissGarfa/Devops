import React from 'react'

const SignUpTwo = ({ formik }) => {
    return (
        <>
            <div className='flex flex-wrap gap-4'>
                <div className='flex-1'>
                    <label htmlFor="firstName" className={`${formik.touched.firstName && formik.errors.firstName ? "text-orange-500" : "text-gray-900"} block mb-2 text-sm font-medium dark:text-white`}>
                        {
                            formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : "First Name"
                        }
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-blue-600 focus:ring-blue-600 block w-full p-2.5"
                        placeholder="John"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className='flex-1'>
                    <label htmlFor="lastName" className={`${formik.touched.lastName && formik.errors.lastName ? "text-orange-500" : "text-gray-900"} block mb-2 text-sm font-medium dark:text-white`}>
                        {
                            formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : "Last Name"
                        }
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-blue-600 focus:ring-blue-600 block w-full p-2.5"
                        placeholder="John"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        onBlur={formik.handleBlur}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="university" className={`${formik.touched.university && formik.errors.university ? "text-orange-500" : "text-gray-900"} block mb-2 text-sm font-medium dark:text-white`}>
                    {
                        formik.touched.university && formik.errors.university ? formik.errors.university : "University"
                    }
                </label>
                <input
                    type="text"
                    name="university"
                    id="university"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-blue-600 focus:ring-blue-600 block w-full p-2.5"
                    placeholder="University"
                    onChange={formik.handleChange}
                    value={formik.values.university}
                    onBlur={formik.handleBlur}
                />

            </div>

            <button type="submit" className="w-full flex gap-2 justify-center items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Sign up
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <a href="/signup" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign in</a>
            </p>
        </>
    )
}

export default SignUpTwo