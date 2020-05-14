import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../../Components/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolBar = () => (
 <header className={classes.Toolbar}>
     <div>MENU</div>
     <Logo/>
     <nav>
         <NavigationItems/>
     </nav>
 </header>


);

export default toolBar