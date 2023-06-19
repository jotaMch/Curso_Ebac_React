import './App.css';
import HelloWorld from './components/HelloWorld'
import Frase from './components/Frase'
import HelloWorld2 from './components/HelloWorld2';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <p> as 17:25 de 19/06/2023</p>
      <HelloWorld name="World"/>
      <Frase name="Hello"/>
      <HelloWorld2 name="Hello" />
    </div>
  );
}

export default App;
