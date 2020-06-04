import React from 'react';
import './HeadingSecondary.scss'
const HeadingSecondary = (props) => {
    return (
        <div className='Heading-secondary'>
            <h1>{props.title}</h1>
             <p>{props.des}</p>
        </div>
    );
};

export default HeadingSecondary;