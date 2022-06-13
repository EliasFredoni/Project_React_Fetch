import React from 'react'
import SchabloneOne from './SchabloneOne';
import { useState, useEffect } from 'react';

export default function SchabloneMore() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=apple&from=2022-06-12&to=2022-06-12&sortBy=popularity&apiKey=948449140e8346e8ba27b1d6de03da86')
            .then(res => res.json())
            .then(json => {
                setProducts(json.articles)
            })
    }, [])

    console.log(products);

    return (
        <div>
            {products.map((elt, i) =>
                <SchabloneOne
                    key={i}
                    urlToImage={elt.urlToImage}
                    title={elt.title}
                    description={elt.description}
                    author={elt.author}
                />
            )}
        </div>
    )
}
