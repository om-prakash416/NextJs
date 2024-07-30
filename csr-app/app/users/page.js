import React from 'react'
import Link from 'next/link';
import getAllUser from '../lib/getAllUser';

export default async function Users() {
    const usersData = getAllUser();
    const users = await usersData;
    console.log(users)
    return (
        <div>
            {users.map(user => {

                return (<p key={user.id}>

                    return <Link href={`/users/${user.id}`}>{user.name}</Link>
                </p>
                )
            })}
        </div>
    )
}
