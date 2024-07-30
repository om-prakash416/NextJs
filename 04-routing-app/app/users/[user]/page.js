import React from 'react'

export default function page(params) {
    console.log(params.user)
  return (
    <div>
      user:{params.user}
    </div>
  )
}
