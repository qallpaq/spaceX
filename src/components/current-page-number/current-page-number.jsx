import React from "react";
import './current-page-number.scss';
import {connect} from "react-redux";


const CurrentPageNumber = ({currentPage}) => {
    return (
        <div className='current-page-number'>
            <span className='current-page-title'>0{currentPage}</span> / 05
        </div>
    );
};


const mapStateToProps = ({basic: {currentPage}}) => {
    return {currentPage}
};

export default connect(mapStateToProps)(CurrentPageNumber);