import React from 'react';

import classes from './BurgerIngredients.css'


const BurgerIngredients = (props) => {
    let ingredient = null;


    if(props.type === 'bread-bottom'){
     return  ingredient = <div className={classes.BreadBottom}></div>;
    } else if(props.type === 'bread-top'){
        return  ingredient = (
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
        ) 
    }else if(props.type === 'meat'){
        return ingredient = <div className={classes.Meat}></div>
    }else if (props.type === 'cheese'){
        return ingredient = <div className={classes.Cheese}></div>
    }else if(props.type === 'salad'){
        return ingredient = <div className={classes.Salad}></div>
    }else if(props.type === 'bacon'){
        return ingredient = <div className={classes.Bacon}></div>
    }else {
        return  ingredient = null
    }


    
}


export default BurgerIngredients;