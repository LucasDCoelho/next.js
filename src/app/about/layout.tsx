import { ReactNode } from "react";

interface AboutLayoutProps {
    children: ReactNode
}

export default function AboutLayout({ children }: AboutLayoutProps){
    return(
        <div>
            <h1>About</h1>
            {children}
        </div>
    )
}