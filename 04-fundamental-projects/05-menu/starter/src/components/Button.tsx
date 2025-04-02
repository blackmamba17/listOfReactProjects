import React, { PropsWithChildren, useState } from "react";
import { FC } from "react";

export const Button: FC<PropsWithChildren> = ({ children }) => {

    const [isButtonHover, setIsButtonHover] = useState(false)

    return <button onMouseEnter={() => {
        setIsButtonHover(!isButtonHover)
    }} onMouseLeave={() => {
        setIsButtonHover(!isButtonHover)
    }} style={{ color: "white", backgroundColor: isButtonHover ? "#cb9126" : "orange", border: "transparent", borderRadius: "0.5rem", width: isButtonHover ? "22%" : "20%", boxShadow: "1px 5px 1rem grey", cursor: "pointer", fontSize: "1rem", padding: "0.5rem" }}>{children}</button>
}