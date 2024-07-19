import { useState } from 'react'
import Button from '@mui/material/Button'

interface AddItem {
  (newItem: { text: string; isChecked: boolean; id: number }): void
}

export default function Form({ onAddItems }: { onAddItems: AddItem }) {
  const [text, setText] = useState<string>('')

  const newItem = { text, isChecked: false, id: Date.now() }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!text) return

    onAddItems(newItem)
    setText('')
    console.log(newItem)
  }

  function handleClick() {
    if (!text) return
    onAddItems(newItem)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Item...'
        value={text}
        onChange={handleChange}
      />
      <Button onClick={handleClick} variant='contained'>
        Add
      </Button>
    </form>
  )
}
