import { useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import AddIcon from '@mui/icons-material/Add'
import { Grid } from '@mui/material'

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
      <Grid
        container
        spacing={2}
        alignItems='center'
        direction='row'
        justifyContent='center'
      >
        <Grid item xs={8}>
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
          />
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleClick} variant='contained'>
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
