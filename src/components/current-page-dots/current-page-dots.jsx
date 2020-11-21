import React from "react";
import './current-page-dots.scss';
import {useSelectorContext} from "../context/selector-context/selector-context";


const CurrentPageDots = () => {
    const {currentPage} = useSelectorContext()
    const dots = [1, 2, 3, 4, 5];

    return (
        <div className='current-page-dots'>
            {
                dots.map(dot => {
                    return (
                        <div key={dot}
                             className={`current-page-dots__item ${currentPage === dot && 'active'}`}>
                            {dot}
                        </div>
                    )
                })
            }
        </div>
    );
};


export default CurrentPageDots;