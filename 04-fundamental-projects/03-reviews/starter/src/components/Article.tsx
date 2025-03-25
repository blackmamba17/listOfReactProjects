import React, { useEffect, useState } from "react"
import reviews from "../data"
import { Avatar } from "./Avatar"
import { Typography } from "./Typography"


export const Article = () => {
    const [isButtonHover, setIsButtonHover] = useState(false)
    const [isArrowRightHover, setIsArrowRightHover] = useState(false)
    const [isArrowLeftHover, setIsArrowLeftHover] = useState(false)
    const [getIndexOfReview, setIndexOfReview] = useState(0)
    const { id, image, job, name, text } = reviews[getIndexOfReview]

    useEffect(() => {

    }, [])

    const moveIntoArray = (index: number) => {

        console.log(`index è ${index}`)

        console.log(`l'array length è ${reviews.length}`)
        let newIndex = getIndexOfReview + index
        if (newIndex < 0) { newIndex = reviews.length - 1 }
        else if (newIndex >= reviews.length) { newIndex = 0 }
        else {

            console.log('newindex: ', newIndex)
            setIndexOfReview(newIndex)
            console.log(`l'array al momento è al numero ${getIndexOfReview}`)
            return
        }
        console.log(`${reviews.length} index: ${index}`)
        setIndexOfReview(newIndex)
        console.log(`l'array al momento è al numero ${getIndexOfReview}`)

    }


    return (
        <article style={{ boxSizing: "border-box", padding: "2rem", boxShadow: " 0.1rem 0.1rem 2rem 0.1rem", width: "60vw", height: "50vh", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", textAlign: "justify" }}>
            <Avatar src={image} />
            <div style={{ textAlign: "center" }}>
                <Typography variant="h1">{name}</Typography>
                <Typography variant="p" style={{ margin: "0.5rem", color: "purple", fontSize: "1.3rem" }}>{job}</Typography>
                <Typography variant="p" style={{ textAlign: "justify" }}>
                    {text}
                </Typography>
                <Typography style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ margin: "1rem" }}>
                        <a onClick={() => {
                            moveIntoArray(-1)
                        }} onMouseEnter={() => {
                            setIsArrowRightHover(!isArrowRightHover)
                        }} onMouseLeave={() => {
                            setIsArrowRightHover(!isArrowRightHover)
                        }} style={{
                            fontSize: "3rem", margin: "0.6rem", color: isArrowRightHover ? "#ab54ab" : "purple", textDecoration: "bold", cursor: isArrowRightHover ? "pointer" : "default", userSelect: "none"
                        }}>{'<'}</a>
                        <span></span>
                        <a onClick={() => {
                            moveIntoArray(1)
                        }} onMouseEnter={() => {
                            setIsArrowLeftHover(!isArrowLeftHover)
                        }} onMouseLeave={() => {
                            setIsArrowLeftHover(!isArrowLeftHover)
                        }} style={{ fontSize: "3rem", margin: "0.6rem", color: isArrowLeftHover ? "#ab54ab" : "purple", textDecoration: "bold", cursor: isArrowLeftHover ? "pointer" : "default", userSelect: "none" }}>{'>'}</a>
                    </div>
                    <button onMouseEnter={() => {
                        setIsButtonHover(!isButtonHover)
                    }} onMouseLeave={() => {
                        setIsButtonHover(!isButtonHover)
                    }} style={{ display: "block", width: "25%", padding: "0.5rem", backgroundColor: isButtonHover ? "purple" : "#ab54ab", color: "white", fontWeight: "bold", borderRadius: "10px", border: "transparent" }}>surprise me</button>
                </Typography>
            </div>
        </article >
    )
}