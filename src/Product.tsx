import React from "react";

type ProductProps = {
    title: string,
    description: string,
    price:number
}

function Product(props: ProductProps) {
    return (
        <>
            <div className="bg-cyan-500 font-bold "><h1>{props.title}</h1>
                <h1>{props.description}</h1>
                <h1>RS {props.price}</h1>
            </div>
        </>
    );
}
export default Product;