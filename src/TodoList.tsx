import Item from './Item'
import Button from '@mui/material/Button'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import List from '@mui/material/List'
import { TodoItem } from './types'

interface Delete {
  (id: number): void
}

interface Props {
  items: TodoItem[]
  onClearList: React.MouseEventHandler<HTMLButtonElement>
  onDeleteItem: Delete
  onChange: (newItem: TodoItem) => void
}

export default function TodoList({
  items,
  onClearList,
  onDeleteItem,
  onChange,
}: Props) {
  return (
    <div>
      <List>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onChange={onChange}
          />
        ))}
      </List>
      <Button
        onClick={onClearList}
        variant='contained'
        sx={{
          marginLeft: '25px',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        Clear list
        <DeleteOutlineIcon />
      </Button>
    </div>
  )
}
