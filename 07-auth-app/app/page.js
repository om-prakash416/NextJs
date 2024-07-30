import Image from "next/image";
import { getServerSession } from "next-auth";
import { signIn, signOut } from "next-auth/react";
export default async function Home() {
  const session = await getServerSession();
  return (
    <>
      Server Session:
      {session?.user?.name ? (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">{session?.user?.name}</div>
      ) : (
        <div>Not Logged In</div>
      )}
    </>
  )
}
