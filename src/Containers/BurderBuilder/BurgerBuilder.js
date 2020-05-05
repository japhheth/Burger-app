import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'



class BurgerBuilder extends Component {
    state = {
       ingredients : {
            meat : 0,
            cheese : 0,
            bacon : 0,
            salad : 0
     }
    }

    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Aux>
        )
    }
}

export default BurgerBuilder