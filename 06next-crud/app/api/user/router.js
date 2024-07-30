import { NextResponse } from "next/server"


//read
export const GET = async (req, res) => {
    try {
        return NextResponse.json(users)
    }
    catch (err) {
        return NextResponse.json({message:'Error',err},{status:500})
    }
}

//create

export const POST = async (req, res) => {
    const { username } = await req.json();
    try {
        const newData = { username };
        newData.id = users.length + 1;
        users.push(newData);
        return NextResponse.json(users)
    
    }
    catch (err){
        return NextResponse.json({message:'Error',err},{status:500})
    }
    console.log(username);
}