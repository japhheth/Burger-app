import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Sidedrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';


const sideDrawer = (props) => {


    return(
        <div className={classes.Sidedrawer}>
            <div className={classes.Logo}>
            <Logo />
            </div>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </div>
    )
}

export default sideDrawer;