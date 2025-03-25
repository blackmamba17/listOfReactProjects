import React, { ComponentProps, PropsWithChildren } from "react"
import { FC } from "react"


type Variant = "h1" | "h2" | "p"

type TypographyProps = {
    variant?: Variant
} & ComponentProps<Variant>

//const style: Record<Variant, ComponentProps<Variant>['style']> = { h1: { display: "flex" } , }
export const Typography: FC<PropsWithChildren<TypographyProps>> = ({ children, variant, ...props }) => {

    const Component = variant || 'p'

    return (
        <Component {...props}>{children}</Component>

    )
}

