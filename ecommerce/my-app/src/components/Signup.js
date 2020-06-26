import React, { Fragment } from 'react';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup'

import { connect } from 'react-redux';
import * as signUp from '../Store/actions/index'

import InputField from './customField/InputField';
import { FormGroup, Button } from 'reactstrap';
const Signup = (props) => {

    const initialValues = {
        name: "",
        email: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().trim().min(2, "limit 2").required("This field is required"),

        email: Yup.string().trim().email("No is Email").required("This field is required"),

        password: Yup.string().matches(/^[a-z]+\d+$/, "no correct").min(6, "limit 6").max(32, "max 32").required('This field is required')
    })
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => {console.log("values", values);
            props.onAuthStart(values.name, values.email, values.password, true)
        }}
            
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
                       type='password'
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
const mapDispatchToProps = dispatch => {
    return {
        onAuthStart: (name, email, password, isSignup) => dispatch(signUp.authStartUser(name, email, password, isSignup))
    }
}
export default connect(null, mapDispatchToProps)(Signup);