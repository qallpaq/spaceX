import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick-slider.scss';


const SlickSlider = ({arr}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };

    return (
        <Slider {...settings}>
            {arr.map((el, idx) => {
                return (
                    <div className='slide' key={idx}>
                        <img src={el} alt="slider-img"/>
                    </div>
                );
            })}
        </Slider>
    );
};


export default SlickSlider;