import React, { FC } from "react"
import { Tab } from "../types/Types";


export const TabHero: FC<{ tab: Tab }> = ({ tab }) => {
    const { company, dates, duties, id, order, title } = tab
    return (
        <div style={{ margin: "3rem" }} id={id}>
            <h2>{title}</h2>
            <button style={{ margin: "1rem 0 1rem 0", background: "#cbd5e1", border: 'transparent', padding: "0.5rem", borderRadius: "0.6rem" }}>{company}</button>
            <h5 style={{ color: "#64748b" }}>{dates}</h5>
            {duties?.map((duty, index) => {
                return <div style={{ display: "flex", justifyContent: "space-around", margin: "1rem" }} key={`duty${index}`}>
                    <p style={{ color: "green", fontSize: "1.7rem", marginRight: "2rem" }}>{`<<`}</p>
                    <p style={{ boxSizing: "border-box" }}>{duty}</p>
                </div>
            })}
        </div>
    )
}