import { DataProvider, DataQuery } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import React from 'react';

import styles from './app.module.css';
import { List } from './modules';

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
          return <List />;
        }}
      </DataQuery>
    </DataProvider>
  </div>
);

export default App;
