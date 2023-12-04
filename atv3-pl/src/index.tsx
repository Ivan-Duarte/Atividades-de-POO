import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Roteador from './components/roteador';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Roteador />
  </React.StrictMode>
);

// Se você deseja começar a medir o desempenho em sua aplicação, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um ponto de análise. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals();
