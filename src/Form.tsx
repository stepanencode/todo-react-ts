import { useState } from 'react'
import Button from '@mui/material/Button'
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
    <>
      <Grid
        container
        // spacing={2}
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
              bgcolor: 'background.default',
              color: 'text.primary',
            }}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={handleClick}
            variant='contained'
            sx={{ bgcolor: 'background.default', color: 'text.primary' }}
          >
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
