import ListItem from '@mui/material/ListItem'
import ClearIcon from '@mui/icons-material/Clear'
import { Button, Checkbox, FormControlLabel } from '@mui/material'
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
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) {
    onChange({
      ...item,
      isChecked: checked,
    })
    console.log(item) // почему показывает неверное значение isChecked
  }

  return (
    <ListItem>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleToggleItem}
            inputProps={{ 'aria-label': 'controlled' }}
            checked={item.isChecked}
          />
        }
        label={item.text}
      />
      <Button className='hidden-button'>
        <ClearIcon onClick={() => onDelete(item.id)} sx={{ color: 'red' }} />
      </Button>
    </ListItem>
  )
}
