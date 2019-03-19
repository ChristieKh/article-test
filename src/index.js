import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router} from 'react-router-dom';
import store, {history} from './store'
import Articles from "./components/Articles";
import Item from "./components/Item";

import './index.css'

const target = document.getElementById("root");

render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={Articles}/>
            <Route exact path="/item/:id" component={Item}/>
        </Router>
    </Provider>, target);