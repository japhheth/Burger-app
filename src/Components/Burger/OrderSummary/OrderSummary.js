import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './OrderSummary.css';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey} className={classes.List}><span className={classes.OrderSummary}>{igKey}</span> : {props.ingredients[igKey]}</li>
        )
    })
    return(
        <Aux>
            <div className={classes.Content}>
                <h2>Your order</h2>
                <p>A delicious burger with the following ingredients :</p>
                <ul className={classes.ul}>{ingredientSummary}</ul>
                <p>Continue to checkout?</p>
                <p><strong>Total: ${props.totalPrice.toFixed(2)}</strong></p>
                <div className={classes.CenterContent}>
                    <Button btnType="Success" clicked={props.processOrder}>CONTINUE</Button>
                    <Button btnType="Danger" clicked={props.cancelOrder}>CANCEL</Button>
                </div>
            </div>
            
        </Aux>
    )
}

export default orderSummary;