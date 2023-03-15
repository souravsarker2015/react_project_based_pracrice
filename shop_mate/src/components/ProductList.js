import {useCallback, useEffect, useState} from "react";

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [url, setUrl] = useState("http://localhost:8000/product")
    const [counter, setCounter] = useState(0)

    // fetch("http://localhost:8000/product")
    //     .then(response => response.json())
    //     .then(data => console.log(data))

    // console.log(products)

    const fetchProducts = useCallback(async () => {
            const response = await fetch(url)
            const data = await response.json()
            setProducts(data)
        }, [url]
    )

    useEffect(() => {
        fetchProducts();

        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => setProducts(data))


    }, [fetchProducts]);

    useEffect(() => {
        console.log(counter)
    }, [counter]);

    return (
        <section>
            <div className="filter">
                <button onClick={() => setCounter(counter + 1)}>{counter}</button>
                <button onClick={() => setUrl("http://localhost:8000/product")}>All</button>
                <button onClick={() => setUrl("http://localhost:8000/product?in_stock=true")}>In stock</button>
            </div>


            {products.map((product) => (
                <div className="card" key={product.id}>
                    <p className={'id'}>{product.id}</p>
                    <p className={'name'}>{product.name}</p>
                    <p className={'info'}>
                        <span>$ {product.price}</span>
                        <span className={product.in_stock ? "instock" : "unavailable"}> {product.in_stock ? "in stock" : "unavailable"} </span>
                    </p>
                </div>

            ))}
        </section>
    );
};