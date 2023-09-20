'use client'
import {SomeComponent} from "@/components/SomeComponent";
import {useParams} from "next/navigation";

export default function Page() {
    const { post } = useParams()

    return (
        <main className="p-24">
            {typeof post === 'string' ? <SomeComponent title={post}>
                <ul>
                    <li>Thanks for checking out my blog post</li>
                </ul>
            </SomeComponent> : null}
        </main>
    )
}
