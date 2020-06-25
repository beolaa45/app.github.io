import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

const InputField = props => {
    const { 
        field, form,
        type, label, placeholder, disabled
    } = props
    const {name} = field
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
            id={name}
            {...field}

            type={type}
            placeholder={placeholder}
            disabled={disabled}
            />
        </FormGroup>
    );
};

InputField.propTypes = {
    
};

export default InputField;