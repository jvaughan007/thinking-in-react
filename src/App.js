import React, { Component } from 'react';
import './App.css';
import STORE from './STORE';
import Header from './Header/Header';
import Features from './FeaturesForm/Features';
import Cart from './Cart/Cart';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

class App extends Component {
  state = {
    selected: {
      Processor: STORE.FEATURES.Processor[0],
      'Operating System': STORE.FEATURES['Operating System'][0],
      'Video Card': STORE.FEATURES['Video Card'][0],
      Display: STORE.FEATURES.Display[0],
    },
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {


    

    return (
      <div className='App'>
        <Header />
        <main>
          <form className='main__form'>
            <h2>Customize your laptop</h2>
            <Features updateFeats={this.updateFeature} selectedState={this.state.selected} features={this.props.features} />
          </form>
          <Cart selectedState={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;
