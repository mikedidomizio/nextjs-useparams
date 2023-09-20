import {NestedComponent} from "@/components/NestedComponent";
import {ReactNode} from "react";

export const SomeComponent = ({ children, title}: { children: ReactNode, title: string}) => {
    return <>
        <h1>{title}</h1>
        {children}

        <NestedComponent />
    </>
}
