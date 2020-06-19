import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurderBuilder/BurgerBuilder';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Checkout from './Containers/Checkout/Checkout';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
              <Switch>
                  <Route path="/Checkout"  component={Checkout}/>
                  <Route path="/" exact component={BurgerBuilder}/>
              </Switch>
            
        </Layout>
      </BrowserRouter>
      
     
    );
  }
}

export default App;
