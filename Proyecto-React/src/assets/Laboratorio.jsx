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


    </>
  )
}