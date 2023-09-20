'use client'
import {useParams} from "next/navigation";

export const RouteAndLength = () => {
    const { people } = useParams()

    const len = people.length // if used in a component without param would result in an error at runtime

    return <>
        {people} - {len}
    </>
}
