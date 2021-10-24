import React, { useRef } from 'react';

const AddProduct = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const desRef = useRef();
    const handleSubmit = e => {
        const newProduct = { name: nameRef.current.value, price: priceRef.current.value, description: desRef.current.value }
        console.log(newProduct);
        const url = 'http://localhost:5000/products'
        fetch(url, {
            method: "post",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(newProduct)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("added");
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" placeholder='name' />
                <br />
                <input ref={priceRef} type="text" placeholder='price' />
                <br />

                <textarea ref={desRef} placeholder='write something about product ' cols="30" rows="10"></textarea>
                <br />

                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddProduct;