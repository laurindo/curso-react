import React, {Component} from "react";
import {Router, Switch, Route, Redirect} from "react-router-dom";
import {createBrowserHistory} from "history";
import Header from "./components/Header";
import HomePage from "./pages/home/HomePage";
import PromotionsPage from "./pages/promotions/PromotionsPage";

class RouterGuest extends Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route component={Header}/>
                </Switch>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/promotions" component={PromotionsPage}/>
                </Switch>
            </Router>
        );
    }
}

export default RouterGuest;