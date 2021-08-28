import React from "react"

export function EventWidget(props) {
  const { events } = props
  return (
    <div>
      <h1>Bitácora</h1>
      <ul>
        {events?.map(event => (
          <li>{event.date} - {event.description} - {event.productId}</li>
        ))}
      </ul>
    </div>
  )
}