export default async function Home() {
    const test = await fetch('http://localhost:3001/user')
    const testJson = await test.json()
    console.log('hoge', testJson)

  return (
    <>
      <h1>Hello World</h1>
      <p>{testJson[0].name}</p>
    </>
  )
}
