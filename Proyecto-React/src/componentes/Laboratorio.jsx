import { useCallback, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Laboratorio = () => {
  const [nombre, setNombre] = useState('');
  const [laboratorios, setLaboratorios] = useState([]);
  const [, setError] = useState('');
  const url = 'http://localhost:3000/api/laboratorio';

  const handleNombreChange = useCallback((event) => {
    setNombre(event.target.value);
  }, [setNombre]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    setError('');

    if (nombre.trim() === '') {
      setError('Por favor, complete todos los campos');
      return;
    }

    try {
      const bodyResponse = {
        nombre
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyResponse)
      });

      const jsonResponse = await response.json();

      if (response.status === 200) {
        toast.success('¡Laboratorio creado exitosamente!'); // Mostrar mensaje de éxito
        setNombre('');
        console.log(jsonResponse);
        fetchLaboratorios();
      } else {
        toast.error('Error al crear el laboratorio');
      }
    } catch {
      toast.error('Error al crear el laboratorio');
    }
  }, [nombre, setError]);

  const fetchLaboratorios = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLaboratorios(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLaboratorios();
  }, []);

  return (
    <>
        
        <div className="container" style={{ maxWidth: "550px", margin: "0 auto", padding: "20px" }}>
        <form>
          <h1 className="text-center">Crear Laboratorios</h1>
          <div className="form-group mb-3">
            <label className="form-label">Nombre</label>
            <input
              onChange={handleNombreChange}
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              value={nombre} 
            />
          </div>

          <button 
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary">Guardar</button>
        </form>
      </div>

      <div className="container" style={{ maxWidth: "550px", margin: "0 auto", padding: "20px" }}>
        <h2>Listado de Laboratorios</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {laboratorios.map((laboratorio) => (
              <tr key={laboratorio.id}>
                <td>{laboratorio.nombre}</td>
                <td className="text-center">
                    <button type="button" className="btn btn-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                    </button>
                    &nbsp;&nbsp;
                    <button type="button" className="btn btn-danger">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                      </svg>
                    </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
