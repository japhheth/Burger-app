import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7 
}

class BurgerBuilder extends Component {
    state = {
       ingredients : {
            meat : 0,
            cheese : 0,
            bacon : 0,
            salad : 0
        },
        totalPrice : 0
    }

    addIngredients = (type) => {
        console.log("hello")
        const current = this.state.ingredients[type];
        console.log(current);
        const oldCount = current + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = oldCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const OldPrice = this.state.totalPrice;
        const newPrice = OldPrice + priceAddition;

        this.setState({totalPrice : newPrice, ingredients : updatedIngredient})


    }

    removeIngredients = (type) => {
        
    }

    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls added={this.addIngredients}/>
            </Aux>
        )
    }
}

export default BurgerBuilder