import React from 'react'
import PropTypes from 'prop-types'
import {
    useParams
  } from "react-router-dom"

export const Product = (props) => {
    const { id } = useParams();

    return (
        <div>
            <img src={ process.env.PUBLIC_URL + "/products/" + id + ".jpg"}/>
            
            
            { props.products.map( category =>
                {category.products.map( product =>
                    { product.id === id &&
                    <div>
                        <h1>{ product.name }</h1>
                        <span className="category">{ category.name }</span>
                        <span className="price">{ product.price }</span>
                    </div>
                    }
                ) }
                
            ) }
            
        </div>
    )
}

Product.propTypes = {
    products: PropTypes.array
};