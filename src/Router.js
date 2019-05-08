import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import { FlexPanelGallery } from './components/exercises/05 - Flex Panel Gallery/App';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/flex-panel-gallery" component={FlexPanelGallery} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
