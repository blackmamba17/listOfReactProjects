import React from 'react'
import listOfPersons from '../data'

export const Ulist = () => {
    return (
    <ul style={{paddingTop: "1rem"}}>
        {listOfPersons.map((person, index) => {
            return (
                <li key={person.name+person.id}>
                    <article className='personArticle'>
                        <img className='listOfImages' src={person.image} />
                        <p style={{display:"inline-block"}}><h3>{person.name}</h3><br /><h4>{ person.age} years</h4></p>
                    </article>
                </li>
            )
        })}
    </ul>)
}