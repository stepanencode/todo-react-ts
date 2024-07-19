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
    <li>
      <input
        type='checkbox'
        value={convertItem}
        onChange={() => onToggleItem(item.id)}
      />
      {item.text}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}
