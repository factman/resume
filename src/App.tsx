import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import InputPage from './pages/InputPage/InputPage';
import OutputPage from './pages/OutputPage/OutputPage';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <InputPage />
        </Route>
        <Route exact path={'/resume'}>
          <OutputPage />
        </Route>
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  );
};
