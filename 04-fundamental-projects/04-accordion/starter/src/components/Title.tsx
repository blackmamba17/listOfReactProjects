import React, { FC } from "react"

export const Title: FC<{ title: string }> = ({ title }) => {
    return (
        <p style={{ transform: "scale(3.5)" }}>{title}</p>
    )
}