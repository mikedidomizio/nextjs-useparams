'use client'
import {useParams} from "next/navigation";

export const RouteAndLength = () => {
    const { slug } = useParams()

    const len = slug.length

    return <>
        {slug} - {len}
    </>
}
