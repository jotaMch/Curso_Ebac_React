import './App.css';
import HelloWorld from './components/HelloWorld'
import Frase from './components/Frase'

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <HelloWorld name="World"/>
      <Frase name="Hello"/>
    </div>
  );
}

export default App;
