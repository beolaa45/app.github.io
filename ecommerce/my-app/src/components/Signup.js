import React, { Fragment } from 'react';
import { Formik, Form, FastField } from 'formik';

import InputField from './customField/InputField';
const Signup = () => {

    const initialValues = {
        name: "",
        email: '',
        password: ''
    }
    return (
        <Formik
            initialValues={initialValues}
        >
            {formikProps => {
                const {values, errors, touched} = formikProps;
                console.log(values, errors, touched)
                return (
                    <Form>
                        {/*fasFied truyen vao input field props field form */}
                       <FastField 
                       name='name'
                       component={InputField}

                       label='Name'
                       placeholder='Name'
                       /> 
                       <FastField 
                       name='email'
                       component={InputField}

                       label='email'
                       placeholder='email'
                       /> 
                       <FastField 
                       name='password'
                       component={InputField}

                       label='password'
                       placeholder='password'
                       /> 
                    </Form>
                )
            }}
        </Formik>
    );
};

export default Signup;