import React from 'react'
import { useSelector } from 'react-redux'
import  ProductComponent from './ProductComponent';

const ProductListing = () => {
    // Fetch the products from redux store.
    // Use selector is how you access your state.
    const products = useSelector((state) => state);
    console.log(products);

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing