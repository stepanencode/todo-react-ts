import { useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import AddIcon from '@mui/icons-material/Add'

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
    <Box onSubmit={handleSubmit} component='form' noValidate autoComplete='off'>
      <TextField
        id='outlined-basic'
        label='new todo item'
        variant='outlined'
        type='text'
        size='small'
        placeholder='new todo item'
        value={text}
        onChange={handleChange}
      />
      <Button onClick={handleClick} variant='contained'>
        <AddIcon />
      </Button>
    </Box>
  )
}
