import React, { FC, useState } from "react";
import { TourType } from "./CarouselOfTours";

export const Tour: FC<{ tour: TourType, removeTour: (id: string) => void }> = ({ tour, removeTour }) => {
    const [readMoreOrLess, setReadMoreOrLess] = useState<'...read more' | '...read less'>('...read more')

    return (
        <article
            style={{
                boxSizing: "border-box",
                display: "block",
                position: "relative",
                margin: "1rem",
                boxShadow: "0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5)",
                minWidth: "35%",
                maxWidth: "35%",
                borderRadius: "0.5rem"
            }}>
            <img
                style={{
                    borderRadius: "0.5rem 0.5rem 0 0",
                    objectFit: "cover",
                    width: "100%",
                    display: "block",
                    height: "20rem",
                }}
                src={tour.image}
            />
            <p style={{
                backgroundColor: "green",
                color: "white",
                display: "inline-block",
                position: "absolute",
                top: "0",
                right: "0",
                padding: "0.5rem",
                borderRadius: " 0 0.5rem 0 0.5rem"
            }}>${tour.price}</p>
            <div style={{ padding: "1rem" }}>
                <h4>
                    {tour.name}
                </h4>
                <p>
                    {readMoreOrLess === '...read less' ? tour.info : tour.info.substring(0, 200)}
                    <span onClick={() => {
                        readMoreOrLess === '...read less' ? setReadMoreOrLess('...read more') : setReadMoreOrLess('...read less')

                    }} style={{ color: "green", textDecoration: "underline", cursor: "pointer" }}>{readMoreOrLess}</span>
                </p>
                <button onClick={() => {
                    removeTour(tour.id)
                }} style={{ width: "100%", marginTop: "1rem", marginBottom: "1rem", cursor: "pointer" }}>not interested</button>
            </div>
        </article>
    );
};
