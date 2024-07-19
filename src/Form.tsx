import { useState } from 'react'

interface AddItem {
  (newItem: { text: string; isChecked: boolean; id: number }): void
}

export default function Form({ onAddItems }: { onAddItems: AddItem }) {
  const [text, setText] = useState<string>('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!text) return

    const newItem = { text, isChecked: false, id: Date.now() }

    onAddItems(newItem)
    setText('')
    console.log(newItem)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Item...'
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  )
}
