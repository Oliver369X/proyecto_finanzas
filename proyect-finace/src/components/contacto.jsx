import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contacto.css";

const Contacto = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("TU_SERVICE_ID", "TU_TEMPLATE_ID", {
        from_name: form.name,
        name: form.name,
        from_email: form.email,
        email: form.email,
        message: form.message,
      })
      .then(
        () => {
          setLoading(false);
          alert("Gracias. Me pondré en contacto contigo lo antes posible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ups, algo salió mal. Por favor, inténtalo nuevamente.");
        }
      );
  };

  return (
    <div className="contacto-container">
      <div className="contacto-content">
        <p className="contacto-subtext">Contáctame</p>
        <h3 className="contacto-headtext">Contacto</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="contacto-form">
          <label className="contacto-label">
            <span className="contacto-label-text">Tu nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cuál es tu nombre?"
              className="contacto-input"
            />
          </label>
          <label className="contacto-label">
            <span className="contacto-label-text">Tu correo electrónico</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cuál es tu correo electrónico?"
              className="contacto-input"
            />
          </label>
          <label className="contacto-label">
            <span className="contacto-label-text">Tu mensaje</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="¿Qué quieres decirme?"
              className="contacto-input"
            />
          </label>

          <button
            type="submit"
            className="contacto-button"
            style={{ backgroundColor: 'rgb(0, 0, 0)', color: 'white' }}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
