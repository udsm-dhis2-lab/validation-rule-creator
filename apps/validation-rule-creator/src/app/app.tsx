import { DataProvider, DataQuery } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import React from 'react';

import styles from './app.module.css';

const query = {
  me: {
    resource: 'me',
  },
};

const App = () => (
  <div className={styles.container}>
    <DataProvider>
      <DataQuery query={query}>
        {({ error, loading, data }) => {
          const me: any = data?.me;
          if (error) return <span>ERROR</span>;
          if (loading) return <span>...</span>;
          return (
            <>
              <h1>{i18n.t('Hello {{name}}', { name: me?.name })}</h1>
              <h3>{i18n.t('Welcome to DHIS2!')}</h3>
            </>
          );
        }}
      </DataQuery>
    </DataProvider>
  </div>
);

export default App;
