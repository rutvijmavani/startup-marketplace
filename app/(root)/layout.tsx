import React, { Suspense } from "react";
import Navbar from "../../components/Navbar";
//export const dynamic = 'force-dynamic'

export default function Layout({children} : Readonly<{children: React.ReactNode}>){
    return(
        <main className = "font-work-sans">
            <Navbar />
            {children}
        </main>
    )
}

