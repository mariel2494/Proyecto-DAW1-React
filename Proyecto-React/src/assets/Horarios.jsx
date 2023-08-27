import React from 'react'

export const Horarios = () => {
  return (
    <>
    <h1>Horarios</h1>
    <form>
        <label>Hora inicio</label>
        <br />
        <input type='time'/>
        <br />
        <label>Hora final</label>
        <br />
        <input type='time'/>
        <br />
    </form>
    <button>Enviar</button>


   </>
  )
}
