import React, { useState } from "react"
import { Article } from "./Article"

export const Hero = () => {

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
            <Article />
        </div >
    )
}