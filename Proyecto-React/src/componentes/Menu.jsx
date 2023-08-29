import { Link } from "react-router-dom";


export const Menu = () => {
  return (
    <>
    <Link to='/'>Inicio</Link>
    <Link to='/horarios'>Horario</Link>
    <Link to='/laboratorio'>Laboratorios</Link>
    <Link to='/reservas'>Reservas</Link>
    <Link to='/rol'>Rol</Link>
    <Link to='/usuario'>Usuario</Link>
    </>
  )
}
