import React from "react";
import HeaderSimple from "./HeaderSimple";

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <HeaderSimple links={[{ link: 'asdf', label: 'Main'}, { link: 'qwer', label: 'Listing'}]} />
            <main>{children}</main>
        </>
    )
}
