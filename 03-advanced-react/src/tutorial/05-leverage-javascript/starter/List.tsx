import React from "react"
import { people } from "../../../data"
import { Person } from "./Person"

export const List = () => {
    return (
        <div>
            {people.map((person, index) => {
                return (
                    <Person key={index} person={person} />
                )
            })}
        </div>
    )
}