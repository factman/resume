import React from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import InputPage from './pages/InputPage/InputPage';
import OutputPage from './pages/OutputPage/OutputPage';

export default () => {
  return (
    <HashRouter hashType={'slash'}>
      <Switch>
        <Route exact path={'/'}>
          <InputPage />
        </Route>
        <Route exact path={'/resume'}>
          <OutputPage />
        </Route>
        <Redirect to={'/'} />
      </Switch>
    </HashRouter>
  );
};
