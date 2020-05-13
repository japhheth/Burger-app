import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: "Salad", type:"salad"},
    {label: "Cheeese", type:"cheese"},
    {label: "Bacon", type:"bacon"},
    {label: "Meat", type:"meat"}
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
          <p>Current price : <strong>{props.price.toFixed(2)}</strong></p> 
        {controls.map(ctrl => {
         
          return <BuildControl key={ctrl.label} 
                               label={ctrl.label} 
                               ingredientAdd={() => props.added(ctrl.type)}
                               ingredientRemove={() => props.removed(ctrl.type)} 
                               disabled={props.disabled[ctrl.type]}
                               />
        })}
    <button className={classes.OrderButton} 
            disabled={!props.purchased}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);


export default buildControls
