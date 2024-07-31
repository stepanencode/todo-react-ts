import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import AddIcon from '@mui/icons-material/Add'
import { Grid } from '@mui/material'
import { TodoItem } from './types'

interface AddItem {
  (newItem: TodoItem): void
}

export default function AddItemForm({ onAddItems }: { onAddItems: AddItem }) {
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

  return (
    <>
      <Grid
        container
        alignItems='center'
        direction='row'
        justifyContent='space-between'
        onSubmit={handleSubmit}
        component='form'
        noValidate
        autoComplete='off'
      >
        <Grid item>
          <TextField
            id='outlined-basic'
            label='new todo item'
            variant='outlined'
            type='text'
            size='small'
            fullWidth
            placeholder='new todo item'
            value={text}
            onChange={handleChange}
            sx={{
              width: '300px',
            }}
          />
        </Grid>
        <Grid item>
          <Button type='submit' variant='contained'>
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
