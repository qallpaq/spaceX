import React from "react";
import Item from "../item";
import {withRouter} from "react-router";
import './item-list.scss';
import {connect} from "react-redux";


const ItemList = ({item, type, history, defaultTheme}) => {
    return (
        <ul className='items__list'>
            {
                item.map((data) => {
                    return (
                        <li className={`items__list-element ${!defaultTheme ? 'items__list-element_dark' : null}`}
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

const mapStateToProps = ({basic: {defaultTheme}}) => {
    return {defaultTheme}
};


export default withRouter(connect(mapStateToProps)(ItemList));