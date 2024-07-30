import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        const id = req.url.split('users/[1]');
        console.log(id);
        console.log(user)
        const singleData = users.filter((user) => user.id.toString() === id);
        console.log(singleData);


        if (singleData === 0) {
            return NextResponse.json({message:'Data Not Found'})
        }
        return NextResponse.json({message:'Ok'})
    }
    catch (err) {
        return NextResponse.json({ message:'error',err},{status:500}) 
    }
}

//delete
export const DELETE = async (req) => {
    try {
        const id = req.url.split('user/')[1];
        console.log(id)

        const userIndex = users.findIndex((user) => user.id.toString() === id);

        if (userIndex === -1) {
            return NextResponse.json({message:'user data not found'})
        }
        users.splice(userIndex, 1);
        console.log(users)
        return NextResponse.json({message:"Deleted"})
    }
    catch (err) {
        return NextResponse.json({ message: Error, err },{status:500})
    }
}

//update

export const PUT = async (req) => {
    try {
        const id = req.url.split('user/')[1];
        console.log(id);
        const { username } = await req.json();
        const user = users.find(user.id.toString() === id);
        user.username = username;
        return NextResponse({message:'User update'})
    }
    catch (err) {
        return NextResponse.json({message:Error,err},{status:500})
    }
}