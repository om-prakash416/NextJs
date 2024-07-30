import React from 'react'
import getAllUser from '@/app/lib/getAllUser'
import getUser from '@/app/lib/getUser'
import { Rye } from 'next/font/google';

export default async function user({ params }) {
    const userData = getUser(params.userId);

    const user = await userData;

    console.log(user)
    return (
        <div>
            <h2>{user.name}</h2>
        </div>
    )
}
export async function generateStaticParams() {
    const usersData = getAllUser();
    const users = await usersData;

    return users.map(user => ({
        userId: user.id.toString()
    }))
}
