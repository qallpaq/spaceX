import React, {useState} from "react";
import './slider.scss';


const Slider = ({array}) => {
    const [x, setX] = useState({pos: 0, currentSlide: 1});

    const goLeft = () => {
        x.pos === 0 ? setX({pos: -100 * (array.length - 1), currentSlide: array.length})
            : setX({pos: x.pos + 100, currentSlide: x.currentSlide - 1});
    }

    const goRight = () => {
        x.pos === -100 * (array.length - 1) ? setX({pos: 0, currentSlide: 1})
            : setX({pos: x.pos - 100, currentSlide: x.currentSlide + 1});
    }

    const arrayForDots = array.map((_, idx) => idx + 1);

    return (
        <div className='slider'>
            {array.map((el, idx) => {
                return (
                    <div className='slide' style={{transform: `translateX(${x.pos}%)`}} key={idx}>
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

            <div className='slider-dots'>
                {
                    arrayForDots.map((el, idx) => {
                        return (
                            <button className={`slider__dot ${el === x.currentSlide && 'active'}`}
                                    key={idx}
                                    onClick={() => setX({pos: idx * (-100), currentSlide: el})}>
                                {el}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Slider;
