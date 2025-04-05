"use client"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Navbar() {
    const session = useSession()

    return (
        <div>
            {session.data?.user
                ? 
                <button className='' onClick={()=>signOut()}>
                   Logout 
                </button>
                : <button className='' onClick={()=>signIn()}> SignIn </button>
            }
        </div>
    )
}