import React from 'react';
import Product from './Product';

const Products = (props) => {
    const allProducts = props.allProductsProps.map(p => {

        return (
            <Product productsProps={p} />
        )
    });

    return (
        <div className="products-container">
            {allProducts}
        </div>
    )
}

export default Products;
