import React from "react"

export const Title = ({ title }: { title: string }) => {
    return (
        <>
            <h2 style={{ marginTop: "2rem" }}>{title}</h2>
            <p style={{ backgroundColor: "orange", width: "7rem", height: "0.3rem", margin: "1rem" }}></p>
        </>
    )
}