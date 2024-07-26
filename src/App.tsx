import AddItemForm from './AddItemForm'
import { useState, useContext } from 'react'
import TodoList from './TodoList'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ColorModeContext } from './Theme'
import { TodoItem } from './types'

function App() {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  const [items, setItems] = useState<TodoItem[]>([])

  function handleAddItems(item: TodoItem) {
    setItems((items) => [...items, item])
    console.log(items)
  }

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleChange(newItem: TodoItem) {
    setItems((items) =>
      items.map((item) => (item.id === newItem.id ? newItem : item))
    )
  }

  function handleClearList() {
    setItems([])
  }
  return (
    <Box
      sx={{
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color='inherit'
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
      <Paper
        elevation={12}
        sx={{
          width: '500px',
          padding: '25px',
          margin: '0 auto',
          marginTop: '50px',
          bgcolor: 'background.default',
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
            <Typography variant='h2' sx={{ color: 'black' }}>
              TODO LIST
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={0} direction='column' alignItems='center'>
          <Grid item sx={{ width: '400px' }}>
            <AddItemForm onAddItems={handleAddItems} />
          </Grid>
          <Grid item alignSelf='flex-start'>
            <TodoList
              items={items}
              onClearList={handleClearList}
              onDeleteItem={handleDeleteItem}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default App
