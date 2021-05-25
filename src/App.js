import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './ActionReducers/index';

import Router from './Router';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

const App: () => React$Node = () => {  
  return (
    
    <Provider store={store}>
      <Router/>
    </Provider>
  );
};

export default App;