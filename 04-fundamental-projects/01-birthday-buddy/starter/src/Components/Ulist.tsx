import React, { FC } from 'react'

export const Ulist: FC<{
    getListOfPersons: {
        id: number;
        name: string;
        age: number;
        image: string;
    }[]
}> = ({ getListOfPersons }) => {
    return (
        <>
            <ul style={{ paddingTop: "1rem" }}>
                {getListOfPersons.map((person, index) => {
                    return (
                        <li key={person.name + person.id}>
                            <article className='personArticle'>
                                <img className='listOfImages' src={person.image} />
                                <p style={{ display: "inline-block" }}><h3>{person.name}</h3><br /><h4>{person.age} years</h4></p>
                            </article>
                        </li>
                    )
                })}
            </ul>
        </>)
}