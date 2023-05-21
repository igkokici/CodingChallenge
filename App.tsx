import React from 'react';
import { Provider } from "react-redux"
import { store } from "./src/store/store"
import { MainScreenNavigator } from './src/MainScreenNavigator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainScreenNavigator />
    </Provider>
  );
};

export default App;