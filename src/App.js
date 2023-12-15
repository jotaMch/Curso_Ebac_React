import React from 'react';
import './App.css';
import Currency from './components/Currency';
import Label from './components/Label';
import RealLabel from './components/RealLabel';

class App extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      value: 0
    };
  }

  render() {
    return (
      <div className='label'>
        <h1>Hello Render props</h1>
        <input
          value={this.state.value}
          type='number'
          onChange={(event) => {
            this.setState({ value: Number(event.target.value) });
          }}
        />
        <div>
          <Currency
            value={this.state.value}
            parseTo="USD"
            render={(parsedValue) => (
              <Label title="Dólar" parsedValue={parsedValue} />
            )}
          />
          <RealLabel 
            title="Real" 
            value={this.state.value} 
            parseTo="BRL"
          />
        </div>
      </div>
    );
  }
}

export default App;
