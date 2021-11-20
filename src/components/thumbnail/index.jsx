import "./styles.css"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";

export const Thumbnail = (props) => {

    return (
        <div className="thumbnail">
        <Link to={{pathname: `/product/${props.product.id}`}}><img src={ process.env.PUBLIC_URL + "/products/" + props.product.id + ".jpg"} alt={ props.product.name }/></Link>
            <Link to={{pathname: `/product/${props.product.id}`}}><h3>{ props.product.name }</h3></Link>
            <div>
                <span className="category">{ props.category }</span>
                <span className="price">{ props.product.price }</span>
            </div>
        </div>
    )
}

Thumbnail.propTypes = {
    product: PropTypes.array,
    category: PropTypes.string
};