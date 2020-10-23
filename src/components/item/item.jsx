import React from "react";
import './item.scss';


const Item = ({data, type}) => {
    const {flickr_images} = data;

    const setDetails = () => {
        switch (type) {
            case 'rockets':
                return ['rocket_name', 'country', 'company', 'first_flight'];
            case 'dragons':
                return ['name', 'type', 'active', 'first_flight'];
            default:
                return null
        }
    };

    return (
        <>
            <div className='item__list-img-wrapper'>
                <img className='item__list-img'
                     src={flickr_images[0]}
                     alt="item-img"/>
            </div>

            <div className='item__list-info'>
                {setDetails().map((key, idx) => {
                    return (
                        <div className='item__list-row' key={idx}>
                            {`${key.replace('_', ' ')}: ${data[key]}`}
                        </div>
                    );
                })}
            </div>
        </>
    );
};


export default Item;