import Item from './Item'
import Button from '@mui/material/Button'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import List from '@mui/material/List'
import { TodoItem } from './types'

interface Props {
  items: TodoItem[]
  onClearList: React.MouseEventHandler<HTMLButtonElement>
  onDelete: (id: number) => void
  onChange: (newItem: TodoItem) => void
}

export default function TodoList({
  items,
  onClearList,
  onDelete,
  onChange,
}: Props) {
  return (
    <div>
      <List>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelete={onDelete}
            onChange={onChange}
          />
        ))}
      </List>
      <Button
        onClick={onClearList}
        variant='contained'
        sx={{
          marginLeft: '25px',
        }}
      >
        Clear list
        <DeleteOutlineIcon />
      </Button>
    </div>
  )
}
