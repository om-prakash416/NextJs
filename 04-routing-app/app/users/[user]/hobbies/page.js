import Link from 'next/link'
import React from 'react'

export default function page(params) {

    let a = params.user;

    console.log(params.user)
  return (
    <div>
          <h1>your hobbies</h1>
          <Link href={`../${a}/hobbies/wrestling`}>Wrestling</Link><br />
          <Link href={`../${a}/hobbies/boxing`}>Boxing</Link><br />
          <Link href={`../${a}/hobbies/painting`}>Painting</Link><br />
          <Link href={`../${a}/hobbies/athletics`}>Athletics</Link><br />



    </div>
  )
}
