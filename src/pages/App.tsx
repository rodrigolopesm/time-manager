import React from 'react';
import Formulario from '../components/Formulario/formulario';
import Lista from '../components/Lista/lista';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
