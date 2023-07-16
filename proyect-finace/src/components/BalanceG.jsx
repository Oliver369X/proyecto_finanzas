import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BalanceG.css';

const BalanceGeneral = () => {
  const [activoTotal, setActivoTotal] = useState(0);
  const [pasivoTotal, setPasivoTotal] = useState(0);
  const [patrimonioNeto, setPatrimonioNeto] = useState(0);
  const [endeudamiento, setEndeudamiento] = useState(0);
  const [endeudamientoTotal, setEndeudamientoTotal] = useState(0);

  const navigate = useNavigate();

  const calcularRatios = () => {
    const endeudamiento = pasivoTotal / patrimonioNeto;
    const endeudamientoTotal = pasivoTotal / activoTotal;

    setEndeudamiento(endeudamiento.toFixed(2));
    setEndeudamientoTotal(endeudamientoTotal.toFixed(2));

    if (endeudamiento < 0.6 && endeudamientoTotal < 0.6) {
      navigate('/taza-banco');
    }
  };

  useEffect(() => {
    calcularRatios();
  }, []);

  return (
    <div className="balance-general">
      <h2>Balance General</h2>
      <div className="input-group">
        <label htmlFor="activoTotal">Activo Total:</label>
        <input
          type="number"
          id="activoTotal"
          value={activoTotal}
          onChange={(e) => setActivoTotal(Number(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label htmlFor="pasivoTotal">Pasivo Total:</label>
        <input
          type="number"
          id="pasivoTotal"
          value={pasivoTotal}
          onChange={(e) => setPasivoTotal(Number(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label htmlFor="patrimonioNeto">Patrimonio Neto:</label>
        <input
          type="number"
          id="patrimonioNeto"
          value={patrimonioNeto}
          onChange={(e) => setPatrimonioNeto(Number(e.target.value))}
        />
      </div>
      <button onClick={calcularRatios}>Calcular Ratios</button>
      <div className="resultado">
        <p>Endeudamiento: {endeudamiento}</p>
        <p>Endeudamiento Total: {endeudamientoTotal}</p>
      </div>
    </div>
  );
};

export default BalanceGeneral;
