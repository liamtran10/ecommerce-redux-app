import axios from "axios";

export const fetchProducts = async() => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
};