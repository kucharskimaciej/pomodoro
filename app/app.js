import store from './store';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Root } from './components/root';
import React from 'react';

render(
  <Provider store={store}>
    <Root />
  </Provider>, document.getElementById('root')
);
