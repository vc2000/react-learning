import React, { Component } from 'react'

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props

    const TableHeader = () => {
      return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
      )
    }

    const TableBody = props => {
      const rows = props.characterData.map((rows, index) => {
        return (
          <tr key={index}>
            <td>{rows.name}</td>
            <td>{rows.job}</td>
            <td>
            <button onClick={() => props.removeCharacter(index)}>Delete</button>
            </td>
          </tr>
        )
      })
      return <tbody>{rows}</tbody>
    }


    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }
}

export default Table