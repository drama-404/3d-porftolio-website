import React from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';
import App from './App';
import './i18n';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error(i18next.t('errors.rootMissing'));
}

const root = ReactDOM.createRoot(rootElement);
const loadingFallback = (
  <div className="min-h-screen bg-base-darker" aria-busy="true" />
);
root.render(
  <React.StrictMode>
    <React.Suspense fallback={loadingFallback}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
