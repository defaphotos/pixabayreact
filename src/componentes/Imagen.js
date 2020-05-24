import React from "react";

const Imagen = ({ imagen }) => {
  const { largeImageURL, likes, previewURL, tags, views } = imagen;
  return (
    <div className="mb-4 ol-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">{likes} Me Gusta</p>
          <p className="card-text">{views}Vistas</p>
        </div>
        <div className="card-footer">
            <a target="_blank" className="btn btn-primary btn-block" rel="noopener noreferrer" href={largeImageURL}>Ver Imagen</a>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
