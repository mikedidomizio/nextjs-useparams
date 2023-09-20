import Link from "next/link";

export default function Page() {
  return (
    <main className="p-24">
      <h1>Welcome to the company website</h1>
      <br/>

      <h2>Blog posts</h2>
      <Link href="/tailwind">Tailwind</Link>
      <br/><br/>

      <h2>Our teams</h2>
      <Link href="/team/sales">Sales</Link>
      <br/>
    </main>
  )
}
