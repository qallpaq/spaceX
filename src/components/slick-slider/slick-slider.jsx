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
                <ul style={{marginBottom: "30px"}}> {dots} </ul>
            </div>
        )
    };

    const styledImg = {
        width: 100 + '%',
        height: 60 + 'vh',
        cursor: 'pointer',
        backgroundColor: 'rgba(255,255,255,0.95)',
        padding: 15 + 'px'
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