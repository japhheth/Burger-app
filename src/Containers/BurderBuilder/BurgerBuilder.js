import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios.orders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7 
}

class BurgerBuilder extends Component {
    state = {
       ingredients : null,  
        totalPrice : 4,
        purchasable : false,
        purchasing : false,
        loading : false,
        error : false
    }
    componentDidMount(){
        axios.get('https://react-burger-app-4cd2a.firebaseio.com/Ingredients.json')
             .then(response => {
                 this.setState({ingredients : response.data})
             })
             .catch(error => {
                 this.setState({error : true})
             })
    }

    updatePurchase (ingredient){
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
        this.props.history.push('/Checkout');
        // this.setState({loading : true})
        // const order = {
        //     ingredients : this.state.ingredients,
        //     price : this.state.totalPrice,
        //     customer : {
        //         name : 'Japheth',
        //         address : {
        //             street : 'No 36 Oyedele Oguniyi Street',
        //             zipCode : '42100',
        //             country : 'Nigeria'
        //         },
        //         email : 'japhheth@test.com '
        //     },
        //     deliveryMethod : "Fastest" 
        // }
        // axios.post('/orders.json', order)
        // .then(response => {
        //     this.setState({loading : false, purchasing : false })
        // })
        // .catch(err => this.setState({loading : false, purchasing : false }))
        // alert('You can Continue')
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = <Spinner/> 
        if (this.state.loading){
            orderSummary = <Spinner/>
        }
        let burger = this.state.error ? <p style={{textAlign : 'center'}}>Ingredients cannot be loaded right now !</p> : <Spinner/>
        if(this.state.ingredients){
            burger = <Aux>
                     <Burger ingredients={this.state.ingredients}/>
                        <BuildControls added={this.addIngredients} 
                               removed={this.removeIngredients} 
                               disabled={disabledInfo} 
                               ordered={this.purchaseHandler}
                               purchased={this.state.purchasable}
                               price={this.state.totalPrice}/>
                    </Aux>
            orderSummary = <OrderSummary ingredients={this.state.ingredients} 
            totalPrice={this.state.totalPrice}
            cancelOrder={this.purchaseCancelHandler} processOrder={this.processOrders}/>
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} closeModal={this.purchaseCancelHandler}>
                   {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);