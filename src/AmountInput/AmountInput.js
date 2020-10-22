import React from 'react';
import './AmountInput.css';

class AmountInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.props.onCurrencyChanged(e.target.value);
    }

  componentDidMount() { }
  render() {

    const currencies = [{
      id: 1,
      name: "BTC"
    },{
      id: 2,
      name: "ETH"
    },{
      id: 3,
      name: "XRP"
    },{
      id: 4,
      name: "USD"
    },{
      id: 5,
      name: "AED"
    }];
  
    const optItems = currencies.filter(c => c.id !== this.props.selectedPair).map((currency) =>
    <option key={currency.id}  value={currency.id}>{currency.name}</option>
    );

    return (
      <div>
        <input className="r-amount-input" type="text"></input>
        <select value={this.props.selected} className="r-amount-input" onChange={this.handleChange}>
          {optItems}
        </select>
      </div>
    );
  }
}

export default AmountInput;
