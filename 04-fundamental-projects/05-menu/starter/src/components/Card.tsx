import React from "react";
import { FC } from "react";


export const Card: FC<{
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
}> = ({ id, title, category, price, img, desc }) => {
    return (
        <div id={'id' + id} style={{ width: "100%", borderRadius: "1rem", margin: "2rem 0 1rem 0", padding: "0.5rem" }}>
            <img style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "1rem 1rem 0 0" }} src={img} alt="food image" />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", border: "1px solid orange" }}>
                <h5>{title}</h5>
                <a>{price}</a>

            </div><p>{desc}</p>
        </div>
    )
}