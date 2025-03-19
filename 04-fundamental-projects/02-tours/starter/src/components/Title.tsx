import React from "react";

export const Title: React.FunctionComponent<{ title: string }> = ({
    title,
}) => {
    return (
        <>
            <h1 style={{ textAlign: "center", padding: "5rem 0rem 1rem 0rem" }}>{title}</h1>
            <div style={{ backgroundColor: "green", height: "0.3rem", width: "5rem", borderRadius: "1rem", textAlign: "center", margin: "0 auto" }}></div>
        </>
    );
};
