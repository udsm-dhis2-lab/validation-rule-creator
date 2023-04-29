import { DataProvider, DataQuery } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import React from 'react';

import styles from './app.module.css';
import { Create, List } from './modules';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const query = {
  me: {
    resource: 'me',
  },
};

const App = () => (
  <div className={styles.container}>
    <BrowserRouter>
      <DataProvider>
        <DataQuery query={query}>
          {({ error, loading, data }) => {
            const me: any = data?.me;
            if (error) return <span>ERROR</span>;
            if (loading) return <span>...</span>;
            return (
              <Routes>
                <Route exact path="/" element={<List />} />
                <Route path="/create" element={<Create />} />
              </Routes>
            );
          }}
        </DataQuery>
      </DataProvider>
    </BrowserRouter>
  </div>
);

export default App;
