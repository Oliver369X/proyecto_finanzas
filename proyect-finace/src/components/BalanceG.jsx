import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BalanceG.css';

const BalanceG = () => {
  const [activoTotal, setActivoTotal] = useState(0);
  const [pasivoTotal, setPasivoTotal] = useState(0);
  const [patrimonioNeto, setPatrimonioNeto] = useState(0);
  const [endeudamiento, setEndeudamiento] = useState(0);
  const [endeudamientoTotal, setEndeudamientoTotal] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const navigate = useNavigate();

  const calcularRatios = () => {
    const endeudamiento = pasivoTotal / patrimonioNeto;
    const endeudamientoTotal = pasivoTotal / activoTotal;

    setEndeudamiento(endeudamiento.toFixed(2));
    setEndeudamientoTotal(endeudamientoTotal.toFixed(2));

    if (endeudamiento > 0.6 || endeudamientoTotal > 0.6) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
      if (endeudamiento < 0.6 || endeudamientoTotal < 0.6){
        navigate('/taza-banco');
      }
    }
  };

  useEffect(() => {
    calcularRatios();
  }, []);

  return (
    <div className="container-v2-2">
      <h1 className="h1 center">
        Préstamos para pequeñas y medianas empresas: compare las mejores opciones
      </h1>
      <h2 style={{ backgroundColor: 'rgb(0, 0, 0)', color: 'white' }}>
        Encuentre la financiación adecuada para su negocio.
      </h2>
      <h1></h1>
      <h1></h1>
      <h2 style={{ backgroundColor: 'rgb(0, 0, 0)', color: 'white' }}>
        Proporcione la siguiente información para realizar un análisis de apalancamiento
      </h2>
      <div className="balance-general">
        <h2>Balance General</h2>
        <div className="input-group">
          <label htmlFor="activoTotal">Activo Total:</label>
          <input
            type="number"
            id="activoTotal"
            value={activoTotal}
            onChange={(e) => setActivoTotal((e.target.value))}
          />
        </div>
        <div className="input-group">
          <label htmlFor="pasivoTotal">Pasivo Total:</label>
          <input
            type="number"
            id="pasivoTotal"
            value={pasivoTotal}
            onChange={(e) => setPasivoTotal((e.target.value))}
          />
        </div>
        <div className="input-group">
          <label htmlFor="patrimonioNeto">Patrimonio Neto:</label>
          <input
            type="number"
            id="patrimonioNeto"
            value={patrimonioNeto}
            onChange={(e) => setPatrimonioNeto((e.target.value))}
          />
        </div>
        <button
          style={{ backgroundColor: 'rgb(0, 0, 0)', color: 'white' }}
          onClick={calcularRatios}
        >
          Calcular Ratios
        </button>
        <div className="resultado">
          <p>Apalancamiento: {endeudamiento}</p>
          <p>Apalancamiento Total: {endeudamientoTotal}</p>
          {showMessage && (
            <p style={{ color: 'red' }}>El nivel de apalancamiento es alto. Por favor, revise su situación financiera.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BalanceG;
