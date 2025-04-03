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
        <div id={category} style={{ width: "100%", borderRadius: "1rem", margin: "2rem 0 1rem 0", height: "100%", backgroundColor: "white" }}>
            <img src={img} alt="food image" style={{ width: "100%", borderRadius: "0.5rem 0.5rem 0 0", height: "15rem", objectFit: "cover" }} />
            <p style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "1rem" }}>
                <h4>{title}</h4>
                <a style={{ backgroundColor: "orange", borderRadius: "0.2rem", fontSize: "1.2rem", color: "white", padding: "0.2rem" }}>${price}</a>
            </p>
            <p style={{ textAlign: "justify", margin: "1rem", color: "#475569" }}>{desc}</p>
        </div>
    )
}