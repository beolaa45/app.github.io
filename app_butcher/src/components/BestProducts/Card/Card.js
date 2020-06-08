import React from 'react';
import './Card.scss'
import  Button  from '../../UI/Button/Button';

const Card = (props) => {
    console.log(props)
    return (
        <div className='Card' key={props.keyCard}>
            <figure>
                <a href='#' alt='img'>
                    <img src={props.img}/>
                </a>
            </figure>
           

            <div className='caption'>
                <h3>{props.title}</h3>
                <p className='des'>{props.des}</p>
                <p className='dola'>£{props.dola.toFixed(2)}</p>
                <Button card='card1' >Add To Cart</Button>
            </div>
        </div>

        
    );
};

export default Card;