import React, { FC } from "react"

export const Question: FC<{ id: number, title: string, info: string }> = ({ id, title, info }) => {
    return (
        <p key={id} style={{ border: "1px solid grey", padding: "1rem", width: "80%", borderRadius: "1rem", boxShadow: "0 0.2rem 0.2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {title}
            <button style={{ borderRadius: "50%", width: "2rem", height: "2rem", border: "transparent", backgroundColor: "#5bafb7", color: "white", cursor: "pointer" }}>+</button>
        </p>
    )
}