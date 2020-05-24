import React, { useState, useEffect } from "react";
import Formulario from "./componentes/Formulario";
import ListadoImagenes from "./componentes/ListadoImagenes";
function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarAPI = async () => {
      if (busqueda.trim() === "") return;

      const imagenesPorPagina = 30;
      const key = "13349723-f72a67f95547a144b24182b77";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado.hits);

      const calcularTotalPaginas = Math.ceil(
        resultado.totalHits / imagenesPorPagina
      );
      guardarTotalPaginas(calcularTotalPaginas);
        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.scrollIntoView({behavior:'smooth'});
    };
    consultarAPI();
  }, [busqueda,paginaActual]);

  const paginaAnterior = () => {
    let nuevaPaginaAnterior = paginaActual - 1;
    if (nuevaPaginaAnterior === 0) return;
    guardarPaginaActual(nuevaPaginaAnterior);
  };

  const paginaSiguiente = () => {
    let nuevaPaginaSiguiente = paginaActual + 1;
    if (nuevaPaginaSiguiente > totalPaginas) return;
    guardarPaginaActual(nuevaPaginaSiguiente);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />
        {paginaActual === 1 ? null : (
          <button
            onClick={paginaAnterior}
            type="button"
            className="btn btn-info mr-1"
          >
            &laquo;Anterior
          </button>
        )}
        {paginaActual === totalPaginas ? null : (
          <button
            onClick={paginaSiguiente}
            type="button"
            className="btn btn-info"
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
