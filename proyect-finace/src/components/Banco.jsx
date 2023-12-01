//import React from "react";
import { images } from "../constants";
import "./Banco.css";

const Banco = () => {
  const handleImageClick = (pdf) => {
    window.open(pdf, "_blank");
  };

  return (
    <div>
      <div className="container-v2">
        <h1 className="h1 center">
        !En hora buena! Tu empresa cuenta con un saludable índice de endeudamiento. Ahora es el momento propició para explorar
        posiblemente de financiamiento, potenciando así el crecimiento y ampliando tus operaciones
        </h1>
      </div>
      <div className="image-gallery">
        {images.map((image) => (
          <div
            key={image.id}
            className="image-item"
            onClick={() => handleImageClick(image.pdf)}
          >
            <img src={image.src} alt={`Image ${image.id}`} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banco;
