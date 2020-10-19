import React, {useState} from "react";
import './slider.scss';


const Slider = ({array}) => {
    const [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * (array.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (array.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className='slider'>
            {array.map((el, idx) => {
                return (
                    <div className='slide' style={{transform: `translateX(${x}%)`}} key={idx}>
                        <img src={el} alt="slider-img"/>
                    </div>
                );
            })}
            <button id='goLeft' onClick={goLeft}>
                <i className="fas fa-chevron-left" style={{fontSize: 40 + 'px'}}>
                </i>
            </button>

            <button id='goRight' onClick={goRight}>
                <i className="fas fa-chevron-right" style={{fontSize: 40 + 'px'}}>
                </i>
            </button>
        </div>
    );
};

export default Slider;
