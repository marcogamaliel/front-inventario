import "./detail-data.component.css"

export default function DetailData(props) {
  const { data } = props

  return (
    <div>
      <table className="detail-data-component">
        <tbody>
          {data?.length && data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'odd' : ''}>
              {row.map((item, j) => (
                <td key={j}>{item}</td>
              ))}
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}