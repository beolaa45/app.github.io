import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';


const InputField = props => {

    
    const { 
        //tu formik, form truyen vao comphonent
        field, form,

        type, label, placeholder, disabled
    } = props
    const {name} = field;
   

    
     const {errors, touched} = form;
    const showError = errors[name] && touched[name];
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
            id={name}
            {...field}

            type={type}
            placeholder={placeholder}
            disabled={disabled}

            // has invalid => show error
            invalid={showError}
            />
            {/* {showError && <p>{errors[name]}</p>} */}
            {/* {showError && <FormFeedback>{errors[name]}</FormFeedback>} */}
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
};



export default InputField;

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
}

InputField.defaultProps = {
    
    type: '',
    label: "",
    placeholder: "",
    disabled: false
}