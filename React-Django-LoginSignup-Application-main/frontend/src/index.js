import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './Context/AuthContext';
import "./index.css"
import store  from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthProvider >
    <App />
    </AuthProvider>
    </Provider>
  </React.StrictMode>
);
