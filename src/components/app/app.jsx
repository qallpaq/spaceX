import React from "react";
import {Route, Switch} from "react-router";
import {connect} from "react-redux";
import Header from "../header";
import Footer from "../footer";
import './app.scss';
import {DragonPage, HomePage, RocketsPage, ShipsPage} from "../pages";
import {DragonDetailsContainer, RocketDetailsContainer, ShipDetailsContainer} from "../containers/details-containers";


const App = ({defaultTheme}) => {
    const blackTheme = {
        background: '#333',
        color: 'white'
    };

    return (
        <div className="app" style={!defaultTheme ? blackTheme : null}>
            <Header/>
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
            </Switch>
            <Footer/>
        </div>
    );
};

const mapStateToProps = ({basic: {defaultTheme}}) => {
    return {defaultTheme}
};

export default connect(mapStateToProps)(App);