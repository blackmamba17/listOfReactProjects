import React, { FC } from "react"

export const Person: FC<{ person }> = ({ person = 'cacca' }) => {
    const img = person.images?.[0]?.small?.url || 'diocane'
    return (
        <div key={person.id}>
            {person.name}
            <img src={img
            } alt={person.name} />
        </div>
    )
}