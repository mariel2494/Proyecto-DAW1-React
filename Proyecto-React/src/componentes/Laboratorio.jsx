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
        toast.success('¡Laboratorio creado exitosamente!');
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
            </tr>
          </thead>
          <tbody>
            {laboratorios.map((laboratorio) => (
              <tr key={laboratorio.id}>
                <td>{laboratorio.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
