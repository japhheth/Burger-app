import React, {Component} from 'react';
import PropTypes from 'prop-types'
import classes from './BurgerIngredients.css'


class BurgerIngredients extends Component{
    render(){
        let ingredient = null;
        if(this.props.type === 'bread-bottom'){
            return ingredient = <div className={classes.BreadBottom}></div>;
        } else if(this.props.type === 'bread-top'){
            return  ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            ) 
        }else if(this.props.type === 'meat'){
            return ingredient = <div className={classes.Meat}></div>
        }else if (this.props.type === 'cheese'){
            return ingredient = <div className={classes.Cheese}></div>
        }else if(this.props.type === 'salad'){
            return ingredient = <div className={classes.Salad}></div>
        }else if(this.props.type === 'bacon'){
            return ingredient = <div className={classes.Bacon}></div>
        }else {
           return ingredient = null
        }
    }
     
}

BurgerIngredients.propTypes = {
    type : PropTypes.string.isRequired
}


export default BurgerIngredients;
