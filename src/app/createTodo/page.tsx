"use client"

export default function CreateTodo() {
  const createTodo = async () => {
    await fetch('http://localhost:3000/api', {
      method: 'POST',
      body: JSON.stringify({
        title: "料理",
        content: "夕飯を作る",
        userId: 2
      })
    })
  }

  return (
    <div>
      <button onClick={createTodo}>登録する</button>
    </div>
  )
}
