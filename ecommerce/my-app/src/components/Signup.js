import React, { Fragment } from 'react';
import { Formik, Form } from 'formik';
import { FormGroup, Input, Label, Button} from 'reactstrap'
const Signup = () => {
    return (
        <Formik>
            {formikProps => {

                return (
                    <Form>
                       <FormGroup>
                            <Label />
                            <Input />   
                        </FormGroup> 
                    </Form>
                )
            }}
        </Formik>
    );
};

export default Signup;