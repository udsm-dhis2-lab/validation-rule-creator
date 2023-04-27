import React from 'react';
import ReactDOM from 'react-dom';
import AppAdapter from '@dhis2/app-adapter';
import {
  Layer,
  layers,
  CenteredContent,
  CircularLoader,
  CssReset,
} from '@dhis2/ui';

import App from './app/app';

const appConfig = {
  url: process.env.NX_DHIS2_BASE_URL || window.localStorage.DHIS2_BASE_URL,
  appName: process.env.REACT_APP_DHIS2_APP_NAME || '',
  appVersion: process.env.REACT_APP_DHIS2_APP_VERSION || '',
  apiVersion: parseInt(process.env.REACT_APP_DHIS2_API_VERSION),
  pwaEnabled: process.env.REACT_APP_DHIS2_APP_PWA_ENABLED === 'true',
};

ReactDOM.render(
  <React.StrictMode>
    <AppAdapter {...appConfig}>
      <React.Suspense
        fallback={
          <Layer translucent level={layers.alert}>
            <CenteredContent>
              <CircularLoader />
            </CenteredContent>
          </Layer>
        }
      >
        <CssReset />
        <App />
      </React.Suspense>
    </AppAdapter>
  </React.StrictMode>,
  document.getElementById('root')
);
