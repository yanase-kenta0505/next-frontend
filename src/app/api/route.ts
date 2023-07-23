import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    console.log('res', res)
    await fetch('http://localhost:3001/todo', {
      method: 'POST',
      body: JSON.stringify(res),
      headers: {
        "Content-Type": "application/json"
      }
    })

    return NextResponse.json({ message: "This Worked", success: true })
  } catch (error) {
    return NextResponse.json({ message: error, success: false })
  }
}
