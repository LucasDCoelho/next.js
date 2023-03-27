import Link from "next/link";

export default function Home() {

  return (
    <div>
      <header className="flex justify-evenly py-8">
        <section className="flex">
          <img src="" alt="..." />
        </section>
        <nav className="flex list-none gap-4">
          <li className="font-bold hover:text-cyan-600">Home</li>
          <li><Link href="/about">About</Link></li>
          <li>Skills</li>
          <li>Contact</li>
        </nav>
      </header>
    </div>  
  )
}
