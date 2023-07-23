"use client"

export default function CreateTodo() {
  const createTodo = async () => {
    await fetch('http://localhost:3000/api/todo', {
      method: 'POST',
      body: JSON.stringify({
        title: "料理",
        content: "夕飯を作る",
        userId: 2
      })
    })

    console.log('end')
  }

  const updateTodo = async () => {
    await fetch('http://localhost:3000/api/todo', {
      method: 'PATCH',
      body: JSON.stringify({
        title: "夕飯作り"
      })
    })

    console.log('end')
  }

  return (
    <div>
      <button onClick={createTodo}>登録する</button>
      <button onClick={updateTodo}>更新する</button>
    </div>
  )
}
