import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const req = await request.json();
    console.log('req', req)
    await fetch('http://localhost:3001/todo', {
      method: 'POST',
      body: JSON.stringify(req),
      headers: {
        "Content-Type": "application/json"
      }
    })

    return NextResponse.json({ message: "This Worked", success: true })
  } catch (error) {
    return NextResponse.json({ message: error, success: false })
  }
}

export async function PATCH(request: Request) {
  try {
    const req = await request.json();
    await fetch('http://localhost:3001/todo/8', {
      method: 'PATCH',
      body: JSON.stringify(req),
      headers: {
        "Content-Type": "application/json"
      }
    })

    return NextResponse.json({ message: "This Worked", success: true })
  } catch (error) {
    return NextResponse.json({ message: error, success: false })
  }
}
