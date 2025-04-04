import React, { useState } from "react";
import { FC } from "react";
import { Tab } from "../types/Types";



export const ButtonBar: FC<{
    labels: string[] | undefined,
    setIndexTab: React.Dispatch<React.SetStateAction<number>>
}> = ({ labels, setIndexTab }) => {
    const [isActive, setIsActive] = useState(0)

    return <div style={{ display: "flex", margin: "3rem", flexDirection: "column" }}>
        {labels?.map((label, index) => {
            const [isHover, setIsHover] = useState(false)
            return <a onClick={() => {
                setIndexTab(index)
                setIsActive(index)
            }} onMouseEnter={() => {
                setIsHover(!isHover)
            }} onMouseLeave={() => {
                setIsHover(!isHover)
            }} key={'button bar ' + index} style={{ textDecoration: isHover ? 'underline' : isActive === index ? 'underline' : '', margin: "1rem", cursor: "pointer", color: isHover ? "green" : isActive === index ? 'green' : 'black' }}>{label}</a>
        })}
    </div>
}