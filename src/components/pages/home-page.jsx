import React, {useEffect} from "react";
import './home-page.scss';
import {setCurrentPage} from "../../actions";
import {useDispatch} from "react-redux";


const HomePage = () => {
    useEffect(() => {
        dispatch(setCurrentPage(1));
    }, []);

    const dispatch = useDispatch()

    return (
        <div className='home-page'>
            <h1 className='home-page__title'>WELCOME TO SPACE-X</h1>
        </div>
    );
};

export default HomePage;