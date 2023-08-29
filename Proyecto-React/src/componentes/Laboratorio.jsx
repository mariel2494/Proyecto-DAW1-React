//Gustavo

export const Laboratorio = () => {
  return (
    <>
      <form >
        <h1>Crear Laboratorios</h1>

        <label>Nombre</label><br />
        <input type="text" name="nombre" placeholder="Nombre" /><br />
        <label >Activo</label><br />
        <input type="checkbox" checked /><br />
        <label >Fecha Desactivado</label><br />
        <input type="date" name="fecha" disabled /><br />

        <button type="submit">Guardar</button>
      </form>

      <table border="1">
        <tr>
          <th>Nombre</th>
          <th>Activo</th>
          <th>Fecha Desactivado</th>
        </tr>
        <tr>
          <td>Nombre Ejemplo</td>
          <td>✔️</td>
          <td>2023-08-27</td>
        </tr>
      </table>

    </>
  )
}