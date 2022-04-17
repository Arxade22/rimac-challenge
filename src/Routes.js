import React from "react";
import { BrowserRouter, Switch, Route, Redirect, } from "react-router-dom";
// local components
import Header from "./components/Header.js";
import Rimac from "./Rimac";
import ModulePlan from "./components/ModulePlan";
import WelcomeScreen from "./components/WelcomeScreen";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Rimac} />
                <Route exact path="/module" component={ModulePlan} />
                <Route exact path="/welcome" component={WelcomeScreen} />

                <Redirect to="/" />
            </Switch>

        </BrowserRouter>
    )
}