import ListItem from '@mui/material/ListItem'
import ClearIcon from '@mui/icons-material/Clear'
import { Checkbox, Typography } from '@mui/material'
import { TodoItem } from './types'

interface Delete {
  (id: number): void
}

// interface IsChecked {
//   (id: number): void
// }

export default function Item({
  item,
  onChange,
  onDeleteItem,
}: {
  item: TodoItem
  onDeleteItem: Delete
  onChange: (newItem: TodoItem) => void
}) {
  function handleToggleItem(
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) {
    e.preventDefault()
    onChange({
      ...item,
      isChecked: checked,
    })
  }
  return (
    <ListItem>
      <Checkbox
        onChange={handleToggleItem}
        inputProps={{ 'aria-label': 'controlled' }}
        checked={item.isChecked}
      />
      <Typography
        component='p'
        sx={{ maxWidth: '300px', wordBreak: 'break-all' }}
      >
        {item.text}
      </Typography>
      <ClearIcon onClick={() => onDeleteItem(item.id)} sx={{ color: 'red' }} />
    </ListItem>
  )
}
