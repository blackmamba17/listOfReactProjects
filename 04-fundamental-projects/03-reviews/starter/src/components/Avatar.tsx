import React, { FC } from "react"


export const Avatar: FC<{ src: string }> = ({ src }) => {
    return (
        <div style={{ borderRadius: "50%", width: "150px", height: "150px", backgroundColor: "purple", position: "relative" }}>
            <img src={src} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block", boxShadow: " 0.3rem -0.1rem 0 0.2rem purple" }} />
            <span style={{ position: "absolute", backgroundColor: "purple", borderRadius: "50%", width: "30%", height: "30%", top: "1rem", left: "-1rem" }}>
                <a style={{ top: "0.4rem", position: "absolute", left: "0.6rem", color: "white", fontSize: "4rem" }}>"</a>
            </span>
        </div>
    )
}