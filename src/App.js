import { Provider } from "react-redux";
import {Routes} from './Routes';

import './assets/style/index.scss';

//local components 
import store from "./store";

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Routes />
    </Provider>
    </div>
  );
}

export default App;
