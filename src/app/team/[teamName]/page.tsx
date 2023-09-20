'use client'
import {SomeComponent} from "@/components/SomeComponent";
import {useParams} from "next/navigation";

export default function Page() {
    const {teamName} = useParams()

    return (
        <main className="p-24">
            <SomeComponent title={`Team: ${teamName}`}>
                Some of the great people on this team are ...
            </SomeComponent>
        </main>
    )
}
