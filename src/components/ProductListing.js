import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';
import { fetchProducts } from '../api/index';

const ProductListing = () => {
    // Fetch the products from redux store.
    // useSelector is how you access your state.
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts(fetchProducts()));
    }, []);
    

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing