import React from "react";
import './current-page-number.scss';
import {useSelectorContext} from "../context/selector-context/selector-context";


const CurrentPageNumber = () => {
    const {currentPage} = useSelectorContext()

    return (
        <div className='current-page-number'>
            <span className='current-page-title'>0{currentPage}</span> / 05
        </div>
    );
};


export default CurrentPageNumber;