'use client'
import React from 'react'
import ExampleServer from './ExampleServer'
export default function ExampleClient() {
    console.log("Im client component")
  return (
    <div>
          <h2>This is Client Component</h2>
          <ExampleServer />
          
    </div>
  )
}
