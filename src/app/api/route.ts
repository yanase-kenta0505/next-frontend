export async function POST(request: Request) {
  const res = await request.json();
  console.log('res', res)
  await fetch('http://localhost:3001/todo', {
    method: 'POST',
    body: JSON.stringify(res),
    headers: {
      'Content-Type': 'application/json'
    }})
}
