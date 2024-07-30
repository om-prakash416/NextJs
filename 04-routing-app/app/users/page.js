import React from 'react'
import Link from 'next/Link'

export default function page() {
  return (
    <div>
          <Link href='users/1'>
              <h2>User1</h2>
          </Link>
          <Link href='users/2'>
              <h2>User2</h2>
          </Link>
          <Link href='users/3'>
              <h2>User3</h2>
          </Link>
          <Link href='users/4'>
              <h2>User4</h2>
          </Link>
          <Link href='users/5'>
              <h2>User5</h2>
          </Link>
          <Link href='users/6'>
              <h2>User6</h2>
          </Link>
    </div>
  )
}
