import React from 'react';
import { Formik , Form , Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
const Checkout = () => {
    const initValues = {
        name: 'helo'
    }

    const onSubmit = value => {
        console.log(value)
    }

    const validationSchema = Yup.object({
        name: Yup.string().min(4).trim()
    })
    return (
        <Formik initialValues={initValues} onSubmit={onSubmit} validationSchema={validationSchema}>
           <Form style={{marginTop: '100px'}}>
               <label htmlFor='name'>Name</label>
               <Field name='name' type='text' id='name'/>
               <ErrorMessage name='name'/>
           </Form>
        </Formik>
    );
};

export default Checkout;