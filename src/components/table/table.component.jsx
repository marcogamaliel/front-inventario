import React from 'react'

export default function Table(props) {
  const { headers, data } = props

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers?.length && headers.map((item, i) => (
              <th key={i}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.length && data.map((row, i) => (
            <tr key={i}>
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