import Form from './Form'
import { useState } from 'react'
import List from './List'

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
  return (
    <>
      <h3>TODO list</h3>
      <Form onAddItems={handleAddItems} />
      <List items={items} />
    </>
  )
}

export default App
