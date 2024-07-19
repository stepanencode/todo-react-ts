import Item from './Item'

interface Delete {
  (id: number): void
}

export default function List({
  items,
  onClearList,
  onDeleteItem,
}: {
  items: { text: string; isChecked: boolean; id: number }[]
  onClearList: React.MouseEventHandler<HTMLButtonElement>
  onDeleteItem: Delete
}) {
  return (
    <div>
      <ul>
        {items.map((item: { text: string; isChecked: boolean; id: number }) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
      <button onClick={onClearList}>Clear list</button>
    </div>
  )
}
