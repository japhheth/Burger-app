import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer'


class Layout extends Component{
    state = {
        backderopShow : false
    }

    closeBackDropHandler = () => {
        this.setState({backderopShow : false})
    }

    toggleSidedrawer = () => {
        this.setState((prevState) => {
            return {backderopShow : !prevState.backderopShow}
        })
    }

    render(){
        return(
            <Aux>
            <Toolbar toggleToggle={this.toggleSidedrawer}/>
            <Sidedrawer closed={this.closeBackDropHandler}
                        open={this.state.backderopShow}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
            </Aux>
        )    
    }
} 

export default Layout;