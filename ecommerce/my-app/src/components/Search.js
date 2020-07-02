import React from 'react';
import { Formik, Form, FastField, Field } from 'formik';
import InputField from './customField/InputField';
import SearchIcon from '@material-ui/icons/Search';
const Search = (props) => {
    const initalValues = {
        search: '',
        select: 'red'
    }


    return (
       <Formik
       initialValues={initalValues}
       onSubmit={value => {
           console.log(value)
       }}
       >
           {formikPros => {
               const {values, errors, touched} = formikPros;
               console.log(values, errors, touched);
               return (
                   <Form>
                       <FastField 
                            name="search"
                            component={InputField}
                            
                            placeholder='Search'
                            type='search'

                       />
                        <Field as="select" name="select">
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </Field>
                            <button type="submit"><SearchIcon /></button>
                   </Form>
               )
           }}
       </Formik>
    );
};

export default Search;