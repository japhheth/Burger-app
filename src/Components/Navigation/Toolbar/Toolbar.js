import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../../Components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggler from '../Sidedrawer/DrawerToggler/DrawerToggler';

const toolBar = (props) => (
 <header className={classes.Toolbar}>
     <DrawerToggler toggleHandler={props.toggleToggle}/>
     <div className={classes.Logo}>
        <Logo />
     </div>
    
     <nav className={classes.DesktopOnly}>
         <NavigationItems/>
     </nav>
 </header>


);

export default toolBar