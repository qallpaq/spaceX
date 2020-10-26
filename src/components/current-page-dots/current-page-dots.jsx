import React from "react";
import './current-page-dots.scss';
import {connect} from "react-redux";


const CurrentPageDots = ({currentPage}) => {
    const dots = [1, 2, 3, 4, 5];

    return (
        <div className='current-page-dots'>
            {
                dots.map(dot => {
                    return (
                        <div key={dot}
                             className={`current-page-dots__item ${currentPage === dot ? 'active' : null}`}>
                            {dot}
                        </div>
                    )
                })
            }
        </div>
    );
};

const mapStateToProps = ({basic: {currentPage}}) => {
    return {currentPage}
};

export default connect(mapStateToProps)(CurrentPageDots);