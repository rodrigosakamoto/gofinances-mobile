import React from 'react';
import { StatusBar } from 'react-native';
import AppRoutes from './src/routes/index';

const App = () => {
  return (
    <>
      <AppRoutes />
      <StatusBar barStyle="dark-content" />
    </>
  );
};

export default App;
