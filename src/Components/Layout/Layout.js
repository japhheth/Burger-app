import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer'


const Layout = (props) => (
    <Aux>
        <Toolbar/>
        <Sidedrawer/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout;