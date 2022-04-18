import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// local components
import { Routes } from './Routes';

class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <Routes />

      </div>
    );
  }

}

export default connect(state => ({
  rootReducer: state.rootReducer,

}))(App)
