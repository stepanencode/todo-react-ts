import Form from './Form'
import { useState } from 'react'
import TodoList from './TodoList'
import Paper from '@mui/material/Paper'
import { Grid, Typography } from '@mui/material'

interface TodoItem {
  text: string
  isChecked: boolean
  id: number
}

function App() {
  const [items, setItems] = useState<TodoItem[]>([])

  function handleAddItems(item: {
    text: string
    isChecked: boolean
    id: number
  }) {
    setItems((items) => [...items, item])
    console.log(items)
  }

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    )
  }

  function handleClearList() {
    setItems([])
  }
  return (
    <>
      <Paper
        elevation={12}
        sx={{
          width: '500px',
          minHeight: '450px',
          padding: '25px',
          margin: '0 auto',
          marginTop: '50px',
          bgcolor: '#e0f2fb',
        }}
      >
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          sx={{ marginBottom: '25px' }}
        >
          <Grid item>
            <Typography variant='h2' sx={{ color: '#1976d2' }}>
              TODO LIST
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={0} direction='column' alignItems='center'>
          <Grid item sx={{ width: '400px' }}>
            <Form onAddItems={handleAddItems} />
          </Grid>
          <Grid item alignSelf='flex-start'>
            <TodoList
              items={items}
              onClearList={handleClearList}
              onDeleteItem={handleDeleteItem}
              onToggleItem={handleToggleItem}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default App
