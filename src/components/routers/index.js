import React from "react";
import {Route, Switch} from "react-router";
import {ContactPage, DragonPage, HomePage, RocketsPage, ShipsPage} from "../pages";
import {DragonDetailsContainer, RocketDetailsContainer, ShipDetailsContainer} from "../containers/details-containers";


const Routers = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/rockets' exact component={RocketsPage}/>
            <Route path='/rockets/:id' render={({match}) => {
                return <RocketDetailsContainer id={match.params.id}/>
            }}/>

            <Route path='/dragons' exact component={DragonPage}/>
            <Route path='/dragons/:id' render={({match}) => {
                return <DragonDetailsContainer id={match.params.id}/>
            }}/>

            <Route path='/ships' exact component={ShipsPage}/>
            <Route path='/ships/:id' render={({match}) => {
                return <ShipDetailsContainer id={match.params.id}/>
            }}/>

            <Route path='/contact' exact component={ContactPage}/>
        </Switch>
    )
}


export default Routers