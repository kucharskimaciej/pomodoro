import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

const configureStore = () => {
  const middlewares = [thunkMiddleware];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }

  return createStore(
    reducers,
    applyMiddleware(...middlewares)
  );
};

export default configureStore();
