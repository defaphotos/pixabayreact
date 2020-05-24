import React, { useState } from "react";
import Error from './Error';
const Formulario = ({guardarBusqueda}) => {
    const [termino,guardarTermino] = useState("");
    const [error, guardarError] = useState(false);
    const buscarImagenes =(e)=>{
        e.preventDefault();

        if(termino.trim()=== ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarBusqueda(termino);
    }
  return (
    <form onSubmit={buscarImagenes}>
      <div className="row">
        <div className="form-group col-md-8">
          <input value={termino} onChange={e => guardarTermino(e.target.value)} type="text" placeholder="Busca una imagen, ejemplo: futbol o café" className="form-control form-control-lg" />
        </div>
        <div className="form-group col-md-4">
          <input type="submit" value="Buscar" className="btn btn-lg btn-danger btn-block" />
        </div>
      </div>
      {error ? <Error mensaje="Agrega un termino de busqueda" />:null}
    </form>
  );
};

export default Formulario;
