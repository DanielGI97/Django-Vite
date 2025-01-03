import React from 'react'

function DataTable({data}) {
    return (
        <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

window.DataTable = DataTable
export default DataTable