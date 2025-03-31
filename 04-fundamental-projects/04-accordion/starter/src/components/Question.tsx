import React, { FC, useEffect, useState } from "react"

export const Question: FC<{
    questions: {
        id: number;
        title: string;
        info: string;
    }[]
}> = ({ questions }) => {
    const [isClicked, setIsClicked] = useState(false)
    const [currentButtonClicked, setCurrentButtonClicked] = useState('')

    console.log(isClicked)

    return (
        <>
            {questions.map(({ id, title, info }) => {
                return (<div key={id} style={{ border: "1px solid grey", padding: "1rem", width: "80%", borderRadius: "1rem", boxShadow: "0 0.2rem 0.2rem" }}>
                    <p style={{ display: "flex", justifyContent: "space-between" }}>
                        <h5>{title}</h5>
                        <button id={'button' + id}
                            onClick={(e) => {
                                setCurrentButtonClicked(e.currentTarget.id)
                                if (e.currentTarget.id === currentButtonClicked) {
                                    setIsClicked(!isClicked)
                                }
                            }} style={{ borderRadius: "50%", width: "2rem", height: "2rem", border: "transparent", backgroundColor: "#5bafb7", color: "white", cursor: "pointer" }}>+</button>
                    </p>
                    <p>
                        {currentButtonClicked === ('button' + id) && isClicked && info}

                    </p>
                </div>)
            })}
        </>
    )


}