import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Components/Login.jsx';
import NotFound from './Components/NotFound.jsx';
import Home from './Components/Home.jsx';

const App = () => (
  <BrowserRouter>
    <h1>Realtime Chat App</h1>
    <p>Hexlet Frontend Project</p>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
