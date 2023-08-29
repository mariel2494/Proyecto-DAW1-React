//Mariel

export const Horarios = () => {
  return (
    <>
      <h1>Horarios</h1>
      <form>
        <label>Hora inicio</label>
        <br />
        <input type='time' />
        <br />
        <label>Hora final</label>
        <br />
        <input type='time' />
        <br />
      </form>
      <button>Enviar</button>

      <h1>ReporteHorarios</h1>
      <table>
        <th>IdHorario</th>
        <th>Hora Inicio</th>
        <th>Hora Finalizacion</th>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dato1</td>
            <td>Dato2</td>
          </tr>
        </tbody>
      </table>


    </>
  )
}
