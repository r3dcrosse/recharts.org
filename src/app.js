import React from 'react';
import ReactDOM from 'react-dom';
import { applyRouterMiddleware, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import makeRoutes from './routes';
import Root from './containers/Root';
import configureStore from './redux/configureStore';

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, hashHistory)
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: (state) => state.router,
});

const routes = makeRoutes(store);

ReactDOM.render(
  <Root history={history} routes={routes} store={store} render={applyRouterMiddleware(useScroll())} />,
  document.getElementById('app')
);
