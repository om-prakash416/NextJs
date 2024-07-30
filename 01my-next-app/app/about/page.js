import Link from "next/link"



export default function About() {
    return (
        <>
        <div className="flex justify-center items-center text-center font-bold ">
                <h2>About Me</h2> <br/>
                <Link href="/">Link To Home Page</Link><br/>
                <Link href="/signup" >SignUp Page</Link><br/>
                <Link href="/login">Login </Link><br/>
            </div>
        </>
    )
}