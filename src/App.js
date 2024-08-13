import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  const name = 'Nathan'

  function soma(a,b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

const nome = 'Bia'
  return (
    <div className="App">
      <h2>Alterando JSX</h2>
      <p>Olá {name}</p>
      <p>Soma: {soma(1,2)}</p>
      <img src={url} alt='Imagem'/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Bia" idade="19" profissão="dev" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
