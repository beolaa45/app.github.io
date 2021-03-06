
import React from 'react';

import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]
const buidControls = (props) => (
   <div className='BuildControls'>
       <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
       {controls.map(ctrl => {
           return <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    
                    added={() => {
                       
                      return  props.ingredientAdded(ctrl.type)
                     }}
                     removed={() => props.ingredientRemoved(ctrl.type)}
                     disabledd={props.disabled[ctrl.type]}
                    />
       })}
       <button className='OrderButton'
                disabled={!props.purchasable}
                onClick={props.ordered}>{props.authu ?  "ORDER NOW" : "SIGNIN NOW"}</button>
   </div>
)

export default buidControls;