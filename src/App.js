import React from 'react';
import './App.css';
import Currency from './components/Currency';
import Label from './components/Label';

export default class App extends React.Component {
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
            render={(parsedValue) => ( // Fix the syntax error here, change '=' to '=>'
              <Label title="Dólar" parsedValue={parsedValue} />
            )}
          />
        </div>
      </div>
    );
  }
}
