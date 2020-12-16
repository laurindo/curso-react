import React, {Component} from "react";
import {Router, Switch, Route, Redirect} from "react-router-dom";
import {createBrowserHistory} from "history";
import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";

class RouterAuth extends Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route exact path="/entrar/signup" component={SignupPage}/>
                    <Route exact path="/entrar/login" component={LoginPage}/>
                </Switch>
                <Redirect to="/entrar/signup"/>
            </Router>
        );
    }
}

export default RouterAuth;