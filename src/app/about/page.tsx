import Link from "next/link";

export default function About(){
    return (
        <div>
            <h1>Hi My name is Lucas</h1>
            <Link href="/" className="font-bold hover:text-cyan-600">Home</Link>
        </div>
    )
}