import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import { Nav } from './components/Nav';
import { ClockContainer } from './components/exercises/02 - JS and CSS Clock/App';
import { FlexPanelGallery } from './components/exercises/05 - Flex Panel Gallery/App';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/clock" component={ClockContainer} />
        <Route path="/flex-panel-gallery" component={FlexPanelGallery} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
