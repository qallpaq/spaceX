import React from "react";
import './details.scss';
import SlickSlider from "../slick-slider/slick-slider";


const Details = ({details, type}) => {
    const setDetails = () => {
        switch (type) {
            case 'rockets':
                return ['rocket_name', 'description', 'boosters', 'stages', 'first_flight'];
            case 'dragons':
                return ['name', 'description', 'type', 'first_flight']
            default:
                return null
        }
    };

    const {flickr_images = []} = details;

    return (
        <div className='container'>
            <div className='item__details'>
                <SlickSlider arr={flickr_images}/>

                <div className='item__details-content'>
                    {setDetails().map((key, idx) => {
                        return (
                            <li key={idx} className='item__details-row'>
                                <span className='item__details-label'>{`${key.replace('_', ' ')}: `}</span>
                                {details[key]}
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};


export default Details;