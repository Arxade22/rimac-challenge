import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

//import scripts 
import store from './store';

// local components
import { Routes } from './Routes';

class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Routes />
        </Provider>

      </div>
    );
  }

}

export default App;
