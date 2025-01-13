import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'

const Buisness = () => {
    const [image, setImage] = useState('');
    const [name, setName] = useState('test');
    const [address, setAddress] = useState('test');
    const [city, setCity] = useState('test');
    const [state, setState] = useState('test');
    const [zipcode, setZipcode] = useState('test');
    const [category, setCategory] = useState('test');
    const [rating, setRating] = useState('test');
    const [review, setReview] = useState('test');
    const [count, setCount] = useState('test');

    return (
     <><><img src={image}>
        </img><h1>{name}</h1></>
        <p id="address">{address}</p>
        <p id="city">{city}</p>
        <p id="state">{state}</p>
        <p id="zipcode">{zipcode}</p>
        <h2>{category}</h2>
        <h3>{rating}</h3>
        <p>{[review, count]}</p>
        
        </>
    );
} 
export default Buisness