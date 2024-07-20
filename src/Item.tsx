import ListItem from '@mui/material/ListItem'
import ClearIcon from '@mui/icons-material/Clear'
import { Checkbox, Typography } from '@mui/material'

interface Delete {
  (id: number): void
}

interface IsChecked {
  (id: number): void
}

function stringToBoolean(convertItem: boolean): string {
  return convertItem.toString()
}

export default function Item({
  item,
  onDeleteItem,
  onToggleItem,
}: {
  item: { text: string; isChecked: boolean; id: number }
  onDeleteItem: Delete
  onToggleItem: IsChecked
}) {
  let convertItem = stringToBoolean(item.isChecked)

  return (
    <ListItem>
      <Checkbox
        onChange={() => onToggleItem(item.id)}
        inputProps={{ 'aria-label': 'controlled' }}
        value={convertItem}
      />
      {/* input checkbox doesn't connect with state with mui  */}
      {/* <input
        type='checkbox'
        value={convertItem}
        onChange={() => onToggleItem(item.id)}
      /> */}
      <Typography
        component='p'
        sx={{ color: '#1976d2', maxWidth: '300px', wordBreak: 'break-all' }}
      >
        {item.text}
      </Typography>
      <ClearIcon onClick={() => onDeleteItem(item.id)} sx={{ color: 'red' }} />
    </ListItem>
  )
}
