import React, { Fragment } from "react";
import { Formik, Form, FastField } from "formik";
import * as Yup from "yup";

import { connect } from "react-redux";
import * as signUp from "../Store/actions/index";

import InputField from "./customField/InputField";
import { FormGroup, Button } from "reactstrap";
import Spinner from "./UI/Spinner";

const Signup = (props) => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(2, "limit 2")
      .required("This field is required"),

    email: Yup.string()
      .trim()
      .email("No is Email")
      .required("This field is required"),

    password: Yup.string()
      .matches(/[0-9]+/, "Password shounld container number")
      .matches(/[a-zA-Z]+/, "Password shounld contaner character")
      .min(6, "limit 6")
      .max(32, "max 32")
      .required("This field is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("This field is required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("values", values);
        props.onAuthStart(values.name, values.email, values.password, true);
      }}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log(values, errors, touched);
        return (
          <Form>
            {/*fasFied truyen vao input field props field form */}
            <FastField name="name" component={InputField} label="Name" />
            <FastField name="email" component={InputField} label="Email" />
            <FastField
              name="password"
              component={InputField}
              label="Password"
              type="password"
            />
            <FastField
              name="confirmPassword"
              component={InputField}
              label="ConfirmPassword"
              type="password"
            />

            <FormGroup>
              <Button type="submit" color="primary">
                SIGNUP
              </Button>
            </FormGroup>
            <Spinner />
          </Form>
        );
      }}
    </Formik>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token,
    loading: state.auth.loading,
    error: state.auth.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuthStart: (name, email, password, isSignup) =>
      dispatch(signUp.authStartUser(name, email, password, isSignup)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
