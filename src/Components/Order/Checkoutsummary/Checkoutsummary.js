import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './Checkoutsummary.css';


const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well !</h1>
            <div >
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Success" clicked>CONFIRM</Button>
            <Button btnType="Danger" clicked>CANCEL</Button>
        </div>
    )
}


export default checkoutSummary;