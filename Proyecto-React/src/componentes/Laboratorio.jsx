//Gustavo

export const Laboratorio = () => {
  return (
    <>
      <div className="container mt-5">
    <form>
      <h1>Crear Laboratorios</h1>

      <div className="mb-3">
        <label  className="form-label">Nombre</label>
        <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Nombre"/>
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="activo" checked/>
        <label className="form-check-label" >Activo</label>
      </div>

      <div className="mb-3">
        <label className="form-label">Fecha Desactivado</label>
        <input type="date" className="form-control" id="fecha" name="fecha" disabled/>
      </div>

      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>

    <table className="table mt-4">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Activo</th>
          <th>Fecha Desactivado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nombre Ejemplo</td>
          <td>✔️</td>
          <td>2023-08-27</td>
        </tr>
      </tbody>
    </table>
  </div>

    </>
  )
}