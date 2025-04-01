import React from "react";
import { FC } from "react";
import { Card } from "./Card";

export const ArrayOfCards: FC<{
    ArrayOfCards: {
        id: number;
        title: string;
        category: string;
        price: number;
        img: string;
        desc: string;
    }[]
}> = ({ ArrayOfCards }) => {
    return (
        ArrayOfCards.map((card, index) => {
            return <Card {...card} key={'card' + index} />
        })
    )
}