interface Delete {
  (id: number): void
}

export default function Item({
  item,
  onDeleteItem,
}: {
  item: { text: string; isChecked: boolean; id: number }
  onDeleteItem: Delete
}) {
  return (
    <li>
      {item.text}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}
