import React from 'react'

const Product = (props) => {

    return (
        <figure className="products-items">
            <img src={props.productsProps.img} alt="produkter" />
            <figcaption>{props.productsProps.title}</figcaption>
            <p>{props.productsProps.price}</p>
        </figure>
    )
}

export default Product;
