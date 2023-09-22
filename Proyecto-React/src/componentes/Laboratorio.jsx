import { useCallback, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Laboratorio = () => {
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');
  const url = 'http://localhost:3000/api/laboratorio';

  const handleNombreChange = useCallback((event) => {
    setNombre(event.target.value);
  }, [setNombre]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    setError(''); // Limpiar el estado de error al enviar el formulario 
    // Validar que los campos estén completos 
    if (nombre.trim() === '') {
      setError('Por favor, complete todos los campos');
      return;
    }
    try {
      const bodyResponse = {
        nombre
      };
      console.log("🚀 ~ file: Laboratorio.jsx:27 ~ handleSubmit ~ bodyResponse:", bodyResponse)
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyResponse)
      });
      console.log("🚀 ~ file: Laboratorio.jsx:35 ~ handleSubmit ~ bodyResponse:", bodyResponse)
      const jsonResponse = await response.json();
      if (response.status === 200) {
        toast.success('¡Laboratorio creado exitosamente!');
        console.log(jsonResponse);
      }else {
        toast.error('Error al crear el laboratorio');
      }
    } catch {
      toast.error('Error al crear el laboratorio');
    }
  }, [nombre, setError]);

  return (
    <>
      <div className="container">
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
              placeholder="Nombre" />
          </div>

          <button 
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary">Guardar</button>
        </form>
        
      </div>
    </>
  );
};