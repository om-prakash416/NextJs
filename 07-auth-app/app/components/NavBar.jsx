"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton() {
    const { data:session } = useSession();

    if (session) {
        return (
          <>
            {session?.user?.name}
            <button onClick={() => signOut()}>SignOut</button>
          </>
        )
    }
    return (
        <>
            Not Sign In
            <button onClick={()=>signIn()}>SignIn</button>
        </>
    )
}

export default function NavBar() {
    return (
        <div>
            <AuthButton/>
        </div>
    )
}