import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios.orders';

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
        totalPrice : 4,
        purchasable : false,
        purchasing : false
    }

    updatePurchase (ingredient){
        // const ingredient = {
        //     ...this.state.ingredients
        // };

        const sum = Object.keys(ingredient)
        .map(igKey => {
            return ingredient[igKey]
        })
        .reduce((sum, el) => {
            return sum + el
        }, 0)
        this.setState({purchasable : sum > 0});
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
        this.updatePurchase(updatedIngredient);

    }

    removeIngredients = (type) => {
        const current = this.state.ingredients[type];
        if(current <= 0){
            return;
        }
        const oldCount = current - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = oldCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const OldPrice = this.state.totalPrice;
        const newPrice = OldPrice - priceDeduction;

        this.setState({totalPrice : newPrice, ingredients : updatedIngredient})
        this.updatePurchase(updatedIngredient);
    }
    purchaseHandler = () => {
        this.setState({purchasing : true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing : false})
    }

   
    processOrders = () => {
        const order = {
            ingredients : this.state.ingredients,
            price : this.state.totalPrice,
            customer : {
                name : 'Japheth',
                address : {
                    street : 'No 36 Oyedele Oguniyi Street',
                    zipCode : '42100',
                    country : 'Nigeria'
                },
                email : 'japhheth@test.com '
            },
            deliveryMethod : "Fastest" 
        }
        axios.post('/orders.json', order)
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(err))
        alert('You can Continue')
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} closeModal={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} 
                                  totalPrice={this.state.totalPrice}
                                  cancelOrder={this.purchaseCancelHandler} processOrder={this.processOrders}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls added={this.addIngredients} 
                               removed={this.removeIngredients} 
                               disabled={disabledInfo} 
                               ordered={this.purchaseHandler}
                               purchased={this.state.purchasable}
                               price={this.state.totalPrice}/>
            </Aux>
        )
    }
}

export default BurgerBuilder