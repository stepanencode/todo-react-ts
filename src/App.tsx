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

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleClearList() {
    setItems([])
  }
  return (
    <>
      <h3>TODO list</h3>
      <Form onAddItems={handleAddItems} />
      <List
        items={items}
        onClearList={handleClearList}
        onDeleteItem={handleDeleteItem}
      />
    </>
  )
}

export default App
