import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import classes from './OrderSummary.css';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log('[OrderSummary]')
    }

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey} className={classes.List}><span className={classes.OrderSummary}>{igKey}</span> : {this.props.ingredients[igKey]}</li>
            )
        })
        return(
            <Aux>
                <div className={classes.Content}>
                    <h2>Your order</h2>
                    <p>A delicious burger with the following ingredients :</p>
                    <ul className={classes.ul}>{ingredientSummary}</ul>
                    <p>Continue to checkout?</p>
                    <p><strong>Total: ${this.props.totalPrice.toFixed(2)}</strong></p>
                    <div className={classes.CenterContent}>
                        <Button btnType="Success" clicked={this.props.processOrder}>CONTINUE</Button>
                        <Button btnType="Danger" clicked={this.props.cancelOrder}>CANCEL</Button>
                    </div>
                </div>
                
            </Aux>
        )
            
    }
    
}

export default OrderSummary;