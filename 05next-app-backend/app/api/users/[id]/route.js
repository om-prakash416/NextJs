import { NextResponse } from 'next/server'
import React from 'react'

export default async function GET(request,par) {
    const singleData = users.filter((item) == par.params.id)

    console.log(pa.params.id);
    if (singleData.length === 0) {
        return NextResponse.json({message:"no data found"},{status:404})
    }
  return NextResponse.json(singleData)
}
