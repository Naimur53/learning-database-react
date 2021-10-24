import React, { useEffect, useState } from 'react';

const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(result => setProduct(result))
    }, [])
    return (
        <div>
            this products page itme
            <h1> {product.length}</h1>
        </div>
    );
};

export default Products;