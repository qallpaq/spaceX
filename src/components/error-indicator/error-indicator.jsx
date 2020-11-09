import React from "react";
import './error-idicator.scss';


const ErrorIndicator = () => {
    return (
        <div className='error-wrapper'>
            <h1 className='error-title'>we have some problems...</h1>
            <img className='error-content'
                 src="https://cdnimg.rg.ru/i/photogallery/2019/11/22/ca8073339fbb00a/ca8073339fbb00a1574401994.JPG"
                 alt="Problems"/>
        </div>
    );
};

export default ErrorIndicator;