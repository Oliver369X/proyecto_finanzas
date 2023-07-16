//import React from "react";
import { images } from "../constants";
import "./Banco.css";

const Banco = () => {
  const handleImageClick = (pdf) => {
    window.open(pdf, "_blank");
  };

  return (
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
  );
};

export default Banco;
