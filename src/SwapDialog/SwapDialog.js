import React from 'react';
import AmountInput from '../AmountInput/AmountInput';
import './SwapDialog.css';

class SwapDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedFrom: 1, selectedTo:2, isWalletConnected:false, isSwapped:false};

    this.handleFromChanged = this.handleFromChanged.bind(this)
    this.handleToChanged = this.handleToChanged.bind(this)
    this.connectWallet = this.connectWallet.bind(this)
    this.swap = this.swap.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleFromChanged(from) {
    this.setState({selectedFrom: parseInt(from) });
  }

  swap() {
    this.setState({isSwapped: true });
  }
  reset() {
    this.setState({selectedFrom: 1, selectedTo:2, isSwapped:false});
  }

  connectWallet() {
    this.setState({isWalletConnected: true });
  }

  handleToChanged(to) {
    this.setState({selectedTo: parseInt(to) });
  }

  componentDidMount() { }

  render() { 
    return (
        <div className="r-swap-dialog-grid">
          <div></div>
          <div className="r-swap-dialog-box">
            <form className="r-common-grid">
              <div className="r-balance-grid">
              <div>From:</div>
              <div className="r-balance">

                {this.state.isWalletConnected ? <span>Balance: 100</span>:<button onClick={this.connectWallet}>Connect Wallet</button> }
              </div>
                </div>
              <AmountInput selectedPair={this.state.selectedTo} selected={this.state.selectedFrom} onCurrencyChanged={this.handleFromChanged} ></AmountInput>              
              <div>To:</div>
              <AmountInput selectedPair={this.state.selectedFrom} selected={this.state.selectedTo} onCurrencyChanged={this.handleToChanged}></AmountInput>              
              {
                !this.state.isSwapped && this.state.isWalletConnected &&
                <button type="button" class="r-swap-button" onClick={this.swap}>Swap</button>
              }
              {
                this.state.isSwapped &&
                <button type="button" class="r-swap-button" onClick={this.reset}>Swap Again</button>
              }
            </form>
              {this.state.isSwapped &&
              <div>
                <span>Swapped successfully</span> 
              </div>
              }
          </div>
          <div></div>
        </div>
    );
  }
}

export default SwapDialog;
