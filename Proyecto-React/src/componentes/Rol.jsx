//Elvis
import React from 'react'

export const Rol = () => {
  return (
    <>
      <h1>Rol</h1>
      <form>
        <label>Nombre</label>
        <br />
        <input type='text' />
        <br />
        <label>Fecha Desactivado</label>
        <br />
        <input type='Date' />
        <br />
      </form>
      <button>Enviar</button>

      <h1>ReporteRol</h1><table>
        <th>ID_Rol</th>
        <th>Nombre</th>
        <th>activo</th>
        <th>Fecha Desactivado</th>
        <tbody>
          <tr>
            <td>1</td>
            <td>Elvis Flores</td>
            <td>True</td>
            <td>Dato</td>
          </tr>

        </tbody>
      </table>

    </>
  )
}