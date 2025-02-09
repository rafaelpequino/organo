import { useState } from 'react';
import Banner from './components/Banner/';
import Formulario from './components/Formulario/';
import Time from './components/Time/';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#d9f7e9',
      corSecundaria: '#57c278'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#e8f8ff',
      corSecundaria: '#82cffa'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#f0f8e2',
      corSecundaria: '#a6d157'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#fde4e5',
      corSecundaria: '#e06b69'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#eae9f5',
      corSecundaria: '#db6ebf'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#fff5d9',
      corSecundaria: '#ffba05'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ffeeff',
      corSecundaria: '#ffba29'
    },
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Time nome="Programação" />
      <Time nome="Frontend" />
      <Time nome="Data Science" />
    </div>
  );
}

export default App;
