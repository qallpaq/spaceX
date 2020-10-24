import React from "react";
import Item from "../item";
import {withRouter} from "react-router";
import './item-list.scss';


const ItemList = ({item, type, history}) => {
    return (
        <ul className='items__list'>
            {
                item.map((data) => {
                    return (

                        <li className={`items__list-element`}
                            key={data.id}
                            onClick={() => history.push(`/${type}/${data.id}`)}>
                            <Item data={data} type={type}/>
                        </li>
                    )
                })
            }
        </ul>
    );
};


export default withRouter(ItemList);