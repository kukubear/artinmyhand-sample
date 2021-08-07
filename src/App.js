import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AccountPage from './pages/AccountPage';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact></Route>
      <Route component={DetailPage} path="/detail"></Route>
      <Route component={AccountPage} path="/account"></Route>
      <GlobalStyles />
    </>
  );
}

export default App;
