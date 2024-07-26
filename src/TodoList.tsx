import Item from './Item'
import Button from '@mui/material/Button'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import List from '@mui/material/List'

interface Delete {
  (id: number): void
}

interface IsChecked {
  (id: number): void
}

export default function TodoList({
  items,
  onClearList,
  onDeleteItem,
  onToggleItem,
}: {
  items: { text: string; isChecked: boolean; id: number }[]
  onClearList: React.MouseEventHandler<HTMLButtonElement>
  onDeleteItem: Delete
  onToggleItem: IsChecked
}) {
  return (
    <div>
      <List>
        {items.map((item: { text: string; isChecked: boolean; id: number }) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
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
