import React from "react";
import {Route, Switch} from "react-router";
import Header from "../header";
import Footer from "../footer";
import './app.scss';
import {ContactPage, DragonPage, HomePage, RocketsPage, ShipsPage} from "../pages";
import {DragonDetailsContainer, RocketDetailsContainer, ShipDetailsContainer} from "../containers/details-containers";
import CurrentPageNumber from "../current-page-number";
import CurrentPageDots from "../current-page-dots";


const App = () => {
    return (
        <div className='app'>
            <div className="app-content">
                <Header/>
                <CurrentPageNumber/>
                <CurrentPageDots/>
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
            </div>
            <Footer/>
        </div>
    );
};


export default App;