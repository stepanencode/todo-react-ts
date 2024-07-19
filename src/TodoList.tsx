import Item from './Item'
import Button from '@mui/material/Button'

interface Delete {
  (id: number): void
}

interface IsChecked {
  (id: number): void
}

export default function List({
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
      <ul>
        {items.map((item: { text: string; isChecked: boolean; id: number }) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <Button onClick={onClearList} variant='contained'>
        Clear list
      </Button>
    </div>
  )
}
