import React, { PropsWithChildren, useState } from "react";
import { FC } from "react";

export const Button: FC<PropsWithChildren> = ({ children }) => {

    const [isButtonHover, setIsButtonHover] = useState(false)

    return <button onMouseEnter={() => {
        setIsButtonHover(!isButtonHover)
    }} onMouseLeave={() => {
        setIsButtonHover(!isButtonHover)
    }} style={{ color: "white", backgroundColor: isButtonHover ? "#cb9126" : "orange", border: "transparent", padding: "0.5rem", borderRadius: "0.5rem", width: isButtonHover ? "20%" : "16%", boxShadow: "1px 5px 1rem grey", cursor: "pointer" }}>{children}</button>
}