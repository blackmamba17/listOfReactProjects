import React, { FC, useState } from "react";
import { TourType } from "./CarouselOfTours";

export const Tour: FC<{ tour: TourType, removeTour: (id: string) => void }> = ({ tour, removeTour }) => {
    const [readMoreOrLess, setReadMoreOrLess] = useState<'...read more' | ' read less'>('...read more')
    const [isHover, setIsHover] = useState(false)
    const [isArticleHover, setIsArticleHover] = useState(false)

    return (
        <article
            onMouseEnter={() => {
                setIsArticleHover(!isArticleHover)
            }}

            onMouseLeave={() => {
                setIsArticleHover(!isArticleHover)
            }}

            style={{
                boxSizing: "border-box",
                display: "block",
                position: "relative",
                margin: "2rem",
                boxShadow: isArticleHover ? "0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5)" : "0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.5)",
                width: "450px",
                borderRadius: "0.5rem",
                transform: isArticleHover ? "scale(1.1)" : "scale(1)"
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
                padding: "0.7rem",
                borderRadius: " 0 0.5rem 0 0.5rem"
            }}>${tour.price}</p>
            <div style={{ padding: "0 1rem 1rem 1rem", display: "flex", flexDirection: "column", margin: "0.5rem", justifyContent: "center", alignContent: "center", alignItems: "center", height: "250px" }}>
                <p hidden={readMoreOrLess === '...read more' ? false : true} style={{ textDecoration: "bold", margin: "0rem 1rem 1rem 1rem", fontSize: "2rem" }}>
                    {tour.name}
                </p>
                <p>
                    {readMoreOrLess === ' read less' ? tour.info : tour.info.substring(0, 150)}
                    <span onClick={() => {
                        readMoreOrLess === ' read less' ? setReadMoreOrLess('...read more') : setReadMoreOrLess(' read less')

                    }} style={{ color: "green", textDecoration: "underline", cursor: "pointer", }}>{readMoreOrLess}</span>
                </p>
                <button
                    hidden={readMoreOrLess === '...read more' ? false : true}
                    onMouseLeave={() => {
                        setIsHover(!isHover)
                    }} onMouseEnter={() => {
                        setIsHover(!isHover)
                    }} onClick={() => {
                        removeTour(tour.id)
                    }} style={{ width: "35%", padding: "0.5rem", margin: "1rem", borderRadius: "0.5rem", cursor: "pointer", backgroundColor: isHover ? "green" : "transparent", border: "1px solid green", color: isHover ? "white" : "green" }}>not interested</button>
            </div>
        </article>
    );
};
