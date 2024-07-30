import React from 'react'

export default function page(params) {
    console.log(params)
  return (
    <div>
          <h2>User Id:{params.user}</h2>
          <h2>Hobbies:{params.hobbies[0]}</h2>

    </div>
  )
}
