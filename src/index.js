import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router"; 

import About from "./pages/About";
import Game from "./components/TicTacToe";
import Layout from "./pages/Layout";
import Todos from "./pages/Todos"; 

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}> 
            <IndexRoute component={Game}></IndexRoute>
            <Route path="about(/:article)" name="about" component={About}></Route> 
            <Route path="todos" name="todos" component={Todos} ></Route>
        </Route> 
    </Router>, 
    app 
);