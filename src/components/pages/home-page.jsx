import React, {useEffect} from "react";
import './home-page.scss';
import {setCurrentPage} from "../../actions";
import {connect} from "react-redux";


const HomePage = ({setCurrentPage}) => {
    useEffect(() => {
        setCurrentPage(1);
    }, []);

    return (
        <div className='home-page'>
            <h1 className='home-page__title'>WELCOME TO SPACE-X</h1>
        </div>
    );
};

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = {
    setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);