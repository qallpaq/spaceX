import React from "react";
import './app.scss';
import {Route, Switch} from "react-router";
import {HomePage, RocketsPage, ShipsPage} from "../pages";
import RocketDetailsContainer from "../rocket-details/rocket-details-container";
import Header from "../header";
import ShipDetailsContainer from "../ship-details/ship-details-container";
import Footer from "../footer";


const App = () => {
    return (
        <div className="app">
            <Header/>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/rockets' exact component={RocketsPage}/>
                <Route path='/rockets/:id' render={({match}) => {
                    return <RocketDetailsContainer id={match.params.id}/>
                }}/>
                <Route path='/ships' exact component={ShipsPage}/>
                <Route path='/ships/:id' render={({match}) => {
                    return <ShipDetailsContainer id={match.params.id}/>
                }}/>
            </Switch>
            <Footer/>
        </div>
    );
};

export default App;