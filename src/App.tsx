import Form from './Form'
import { useState } from 'react'
import TodoList from './TodoList'

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
    <>
      <div>TODO list</div>
      <Form onAddItems={handleAddItems} />
      <TodoList
        items={items}
        onClearList={handleClearList}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
    </>
  )
}

export default App
