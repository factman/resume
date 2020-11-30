import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import store, {Provider} from 'store';
import App from 'App';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('wrapper'),
);
