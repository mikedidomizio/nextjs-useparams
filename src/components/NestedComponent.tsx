'use client'
import {useParams} from "next/navigation";

export const NestedComponent = () => {
    const { post } = useParams()

    const len = post.length // if used in a component without param would result in an error at runtime

    return <>
        {post} - {len}
    </>
}
