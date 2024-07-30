import ListItem from '@mui/material/ListItem'
import ClearIcon from '@mui/icons-material/Clear'
import { Checkbox, Typography } from '@mui/material'
import { TodoItem } from './types'

export default function Item({
  item,
  onChange,
  onDelete,
}: {
  item: TodoItem
  onDelete: (id: number) => void
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
      <ClearIcon onClick={() => onDelete(item.id)} sx={{ color: 'red' }} />
    </ListItem>
  )
}
