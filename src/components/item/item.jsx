import React from "react";
import './item.scss';


const Item = ({data, type}) => {
    const {flickr_images} = data;

    const setDetails = () => {
        switch (type) {
            case 'rockets':
                return ['rocket_name'];
            case 'dragons':
                return ['name'];
            default:
                return null
        }
    };

    return (
        <>
            <div
                className='item__list-img-wrapper'
                style={{background: `url(${flickr_images[1]}) no-repeat center`, 'backgroundSize': 'cover'}}>
            </div>

            <div className='item__list-info'>
                {setDetails().map((key, idx) => {
                    return (
                        <div className='item__list-row' key={idx}>
                            <h1 className='item__title'>{data[key]}</h1>
                        </div>
                    );
                })}
            </div>
        </>
    );
};


export default Item;