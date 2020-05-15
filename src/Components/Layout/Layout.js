import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer'


class Layout extends Component{
    state = {
        backderopShow : true
    }

    closeBackDropHandler = () => {
        this.setState({backderopShow : false})
    }

    render(){
        return(
            <Aux>
            <Toolbar/>
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