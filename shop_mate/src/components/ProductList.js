import {useState} from "react";
// import {UseFetch} from "../hooks/UseFetch"
import {UseFetch} from "../hooks/UseFetch";
import Loading from "../assets/loading.gif"

export const ProductList = () => {
    // const [products, setProducts] = useState([])
    const [url, setUrl] = useState("http://localhost:8000/product")
    const {data: products, loading, error} = UseFetch(url,{content:"abc"})


    return (
        <section>
            <div className="filter">
                {/*<button onClick={() => setCounter(counter + 1)}>{counter}</button>*/}
                <button onClick={() => setUrl("http://localhost:8000/product")}>All</button>
                <button onClick={() => setUrl("http://localhost:8000/product?in_stock=true")}>In stock</button>
            </div>
            {/*<img src={Loading} alt=""/>*/}
            {
                loading && <p className={'loading'}>
                    {error}
                </p>
            }
            {
                loading && <p>

                </p>
            }


            {products && products.map((product) => (
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

// import {useCallback, useEffect, useState} from "react";
// import {useFetch} from "../hooks/useFetch"
//
//
// export const ProductList = () => {
//     const [products, setProducts] = useState([])
//     const [url, setUrl] = useState("http://localhost:8000/product")
//     const [counter, setCounter] = useState(0)
//
//     // fetch("http://localhost:8000/product")
//     //     .then(response => response.json())
//     //     .then(data => console.log(data))
//
//     // console.log(products)
//
//     const fetchProducts = useCallback(async () => {
//             const response = await fetch(url)
//             const data = await response.json()
//             setProducts(data)
//         }, [url]
//     )
//
//     useEffect(() => {
//         fetchProducts();
//
//         // fetch(url)
//         //     .then(response => response.json())
//         //     .then(data => setProducts(data))
//
//
//     }, [fetchProducts]);
//
//     useEffect(() => {
//         console.log(counter)
//     }, [counter]);
//
//     return (
//         <section>
//             <div className="filter">
//                 <button onClick={() => setCounter(counter + 1)}>{counter}</button>
//                 <button onClick={() => setUrl("http://localhost:8000/product")}>All</button>
//                 <button onClick={() => setUrl("http://localhost:8000/product?in_stock=true")}>In stock</button>
//             </div>
//
//
//             {products.map((product) => (
//                 <div className="card" key={product.id}>
//                     <p className={'id'}>{product.id}</p>
//                     <p className={'name'}>{product.name}</p>
//                     <p className={'info'}>
//                         <span>$ {product.price}</span>
//                         <span className={product.in_stock ? "instock" : "unavailable"}> {product.in_stock ? "in stock" : "unavailable"} </span>
//                     </p>
//                 </div>
//
//             ))}
//         </section>
//     );
// };