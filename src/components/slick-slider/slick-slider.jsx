import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SlickSlider = ({arr}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        appendDots: dots => (
            <div>
                <ul style={{marginBottom: "33px", backgroundColor: 'rgba(253,253,253,0.3)'}}> {dots} </ul>
            </div>
        )
    };

    const styledImg = {
        width: 100 + '%',
        height: 60 + 'vh',
        cursor: 'pointer'
    };

    return (
        <Slider {...settings}>
            {arr.map((el, idx) => {
                return (
                    <div className='slide' key={idx}>
                        <img src={el} alt="slider-img" style={styledImg}/>
                    </div>
                );
            })}
        </Slider>
    );
};


export default SlickSlider;