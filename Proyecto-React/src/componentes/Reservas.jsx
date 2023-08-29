//Steven

export const Reservas = () => {
    return (
        <>
            <h1>Reservas</h1>
            <form>
                <label>Laboratorio</label>
                <br />
                <select>
                    <option value="1">Lab 1</option>
                    <option value="2">Lab 2</option>
                  
                </select>
                <br />
                <label>Horario</label>
                <br />
                <select>
                    <option value="1">9:00 AM - 11:00 AM</option>
                    <option value="2">11:00 AM - 1:00 PM</option>
                 
                </select>
                <br />
                <label>Usuario</label>
                <br />
                <select>
                    <option value="1">User 1</option>
                    <option value="2">User 2</option>
                
                </select>
                <br />
                <label>Fecha Ingreso</label>
                <br />
                <input type='Date' />
            </form>
            <br />
            <button>Enviar</button>


            <h1>ReporteReservas</h1>
            <table border={1}>
                <th>IdReserva</th>
                <th>IdLab</th>
                <th>IdHorario</th>
                <th>IdUsuario</th>
                <th>Fecha Ingreso</th>
                <th>Activo</th>
                <th>Fecha Desactivado</th>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>Dato1</td>
                        <td>True</td>
                        <td>Dato2</td>


                    </tr>
                </tbody>

            </table>
        </>
    );
};


