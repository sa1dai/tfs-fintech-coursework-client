import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import DummyService from './services/dummy-service';
import { ServiceProvider } from './components/service-context';

import store from './store';

const boardStoreService = new DummyService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ServiceProvider value={boardStoreService}>
        <Router>
          <App />
        </Router>
      </ServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);