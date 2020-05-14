import React from 'react';
import classes from './Logo.css'

import BurgerLogo from '../../Assets/images/burger-logo.png';

const logo = (props) => (
    <div className={classes.Logo}>
         <img src={BurgerLogo} alt="burger"/>
    </div>
   
)

export default logo;