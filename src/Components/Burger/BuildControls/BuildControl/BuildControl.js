import React from 'react';
import classes from './BuildControl.css'


const buildcontrol = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More} onClick={props.ingredientAdd}>More</button>
    </div>
);

export default buildcontrol 