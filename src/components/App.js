import React from 'react';
import NoteDetail from '../container/NoteDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import Callback from '../container/auth/callback';
import { withSession } from '../container/auth/withSession';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={withSession(Home)}/>;
        <Route exact path='/callback' component={Callback} />;
        <Route path='/:id' component={withSession(NoteDetail)} />;
      </Switch>
    </Router>
  );
}
