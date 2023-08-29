import React from 'react'

export const Usuario = () => {
  return (
    <>
    <h1>Usuario</h1>
    <form>
        <label>Nombre</label>
        <br />
        <input type='name'/>
        <br />
        <label>Apellido</label>
        <br />
        <input type='name'/>
        <br />
        <label>Correo</label>
        <br />
        <input type='mail'/>
        <br />
        <label>Contraseña</label>
        <br />
        <input type='password'/>
        <br />
    </form>
    <button>Enviar</button>

<h1>Reporte Usuario</h1><table>
            <th>ID_Usuario</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Contraseña</th>
            <th>ID_Rol</th>
              <tbody>
      <tr>
          <td>1</td>
          <td>Erick</td>
          <td>Osorto</td>
          <td>erick.osorto@unitec.edu</td>
          <td>1234</td>
          <td>1</td>
      </tr>
      
  </tbody>
        </table>

   </>
  )
}
