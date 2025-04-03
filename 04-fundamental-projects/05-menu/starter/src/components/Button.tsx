import React, { PropsWithChildren, useState } from "react";
import { FC } from "react";
import { menu } from '../data'

const changeMenu = (typeOfSelectedMenu: string) => {
    const newMenu = menu.filter((typeOfMenu) => {
        return typeOfMenu.category === typeOfSelectedMenu
    })
    return newMenu

}

export const Button: FC<PropsWithChildren & {
    setTypeOfMenu: React.Dispatch<React.SetStateAction<typeof menu>>
}> = ({ children, setTypeOfMenu }) => {

    const [isButtonHover, setIsButtonHover] = useState(false)

    return <button onClick={(e) => {
        const typeOfSelectedMenu = e.currentTarget.textContent || 'all'
        if (typeOfSelectedMenu === 'all') return setTypeOfMenu(menu)
        setTypeOfMenu(changeMenu(typeOfSelectedMenu))
    }} onMouseEnter={() => {
        setIsButtonHover(!isButtonHover)
    }} onMouseLeave={() => {
        setIsButtonHover(!isButtonHover)
    }} style={{ color: "white", backgroundColor: isButtonHover ? "#cb9126" : "orange", border: "transparent", borderRadius: "0.5rem", boxShadow: "1px 5px 1rem grey", cursor: "pointer", fontSize: "1rem", padding: "0.5rem" }}>{children}</button>
}