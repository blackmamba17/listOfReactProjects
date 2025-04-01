import React from "react";
import { FC } from "react";
import { Button } from "./Button";

export const ButtonBar: FC<{ arrayOfButtonLabels: string[] }> = ({ arrayOfButtonLabels }) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%", margin: "1rem 0 1rem 0" }}>
            {arrayOfButtonLabels.map((buttonLabel, index) => {
                return <Button key={'button' + index}>{buttonLabel}</Button>
            })}
        </div >
    )
}