import React, { Fragment } from 'react';
import { Formik, Form, FastField } from 'formik';

import InputField from './customField/InputField';
import { FormGroup, Button } from 'reactstrap';
const Signup = () => {

    const initialValues = {
        name: "",
        email: '',
        password: ''
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => console.log("values", values)}
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

                       <FormGroup>
                           <Button type='submit' color="primary">SIGNUP</Button>
                       </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    );
};

export default Signup;