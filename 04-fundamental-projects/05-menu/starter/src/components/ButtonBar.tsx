import React from "react";
import { FC } from "react";
import { Button } from "./Button";
import { menu } from '../data'


export const ButtonBar: FC<{
    arrayOfButtonLabels: string[], setTypeOfMenu: React.Dispatch<React.SetStateAction<typeof menu>>
}> = ({ arrayOfButtonLabels, setTypeOfMenu }) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%", margin: "1rem 0 1rem 0" }}>
            {arrayOfButtonLabels.map((buttonLabel, index) => {
                return <Button setTypeOfMenu={setTypeOfMenu} key={'button' + index}>{buttonLabel}</Button>
            })}
        </div >
    )
}