import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router} from 'react-router-dom';
import store, {history} from './store'
import Articles from "./containers/Articles";
import Item from "./containers/Item";

import './index.css'

const target = document.getElementById("root");

render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={Articles}/>
            <Route path="/item/:id" component={Item}/>
        </Router>
    </Provider>, target);