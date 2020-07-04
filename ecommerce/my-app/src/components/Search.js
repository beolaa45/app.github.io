import React from 'react';
import { Formik, Form, FastField, Field } from 'formik';
import InputField from './customField/InputField';
import SearchIcon from '@material-ui/icons/Search';
import Formbox from './style/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Search = (props) => {
    const initalValues = {
        search: '',
        select: 'red'
    }


    return (
        <Formbox>
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
                            
                            placeholder='Search for products'
                            type='search'

                       />
                        <Field as="select" name="select">
                            <option value="Accessories">Accessories</option>
                            <option value="clocks">Clocks</option>
                            <option value="cooking">Cooking</option>
                        </Field>
                        <ExpandMoreIcon />
                            <button type="submit"><SearchIcon /></button>
                   </Form>
               )
           }}
       </Formik>
    </Formbox>
    );
};

export default Search;