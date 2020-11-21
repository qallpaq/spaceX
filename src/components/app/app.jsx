import React from "react";
import Header from "../header";
import Footer from "../footer";
import CurrentPageNumber from "../current-page-number";
import CurrentPageDots from "../current-page-dots";
import Routers from "../routers";
import './app.scss';


const App = () => {
    return (
        <div className='app'>
            <div className="app-content">
                <Header/>
                <CurrentPageNumber/>
                <CurrentPageDots/>
                <Routers/>
            </div>
            <Footer/>
        </div>
    );
};


export default App;