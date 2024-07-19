import Item from './Item'

export default function List({
  items,
}: {
  items: { text: string; isChecked: boolean; id: number }[]
}) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item item={item.text} key={item.id} />
        ))}
      </ul>
    </div>
  )
}
