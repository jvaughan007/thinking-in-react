import React, { Component } from 'react';
import './App.css';
import STORE from './STORE';
import Header from './Header/Header';
import Cart from './Cart/Cart';
import Form from './FeaturesForm/Form';



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
          <Form updateFeats={this.updateFeature} selectedState={this.state.selected} features={this.props.features} />
          <Cart selectedState={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;
