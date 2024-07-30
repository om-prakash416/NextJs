import React from 'react'

export default async function getUser(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { next :
        { revalidate :60 } })
    if (!res.ok) throw new Error("Failed to Fetch data");
    return res.json();
}
