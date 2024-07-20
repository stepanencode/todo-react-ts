import Form from './Form'
import { useState } from 'react'
import TodoList from './TodoList'
// import { Box } from '@mui/material'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import { Grid, Typography } from '@mui/material'

interface Item {
  text: string
  isChecked: boolean
  id: number
}

function App() {
  const [items, setItems] = useState<Item[]>([])

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
    <Container maxWidth='sm'>
      <Paper
        elevation={12}
        sx={{
          width: '450px',
          height: '450px',
          padding: '25px',
          margin: '50px',
          bgcolor: '#e0f2fb',
        }}
      >
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          sx={{ marginBottom: '25px' }}
        >
          <Grid item>
            <Typography variant='h2' sx={{ color: '#1976d2' }}>
              TODO LIST
            </Typography>
          </Grid>
        </Grid>
        <Form onAddItems={handleAddItems} />
        <TodoList
          items={items}
          onClearList={handleClearList}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
      </Paper>
    </Container>
  )
}

export default App
