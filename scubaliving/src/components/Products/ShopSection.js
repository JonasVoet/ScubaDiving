import React, { useState } from 'react';
import Products from './Products';
import './products.scss';

const ShopSection = () => {

    const [products] = useState([
        { img: "./assets/img/reg.jpg", title: "REGULATOR MED RESIST", price: "KR.899.-", id: 1 },
        { img: "./assets/img/fine.jpg", title: "REJSEFINNE", price: "KR.999.-", id: 2 },
        { img: "./assets/img/ur.jpg", title: "SCUBAPRO UR", price: "KR.1.500.-", id: 3 },
        { img: "./assets/img/handske.jpg", title: "COLDWATER CLOVES", price: "KR.1.499.-", id: 4 }
    ]);






    return (
        <div className="shop">
            <h1>MEST POPULÆRE DYKKERUDSTYR</h1>
            <Products allProductsProps={products} />
            <a href="index.html"> <h2 className="text-center">SE MERE LÆKKERT UDSTYR HER!</h2></a>
        </div>
    )
}

export default ShopSection;
