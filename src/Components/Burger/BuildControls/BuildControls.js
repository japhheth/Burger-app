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
        {controls.map(ctrl => {
          return <BuildControl key={ctrl.label} 
                               label={ctrl.label} 
                               ingredientAdd={() => props.added(ctrl.type)} />
        })}

    </div>
);


export default buildControls
