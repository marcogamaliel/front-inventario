export function EventWidget(props) {
  const { events } = props
  return (
    <div>
      <ul>
        {events?.map(event => (
          <li>{event.date} - {event.description} - {event.productId}</li>
        ))}
      </ul>
    </div>
  )
}