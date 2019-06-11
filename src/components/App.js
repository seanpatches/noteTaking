import React from 'react';
import CreateNote from '../container/CreateNote.js';
import NoteDetail from '../container/NoteDetail';
import AllNotes from '../container/AllNotes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={AllNotes}/>;
        <Route path='/:title' component={NoteDetail} />;
      </Switch>
    </Router>
  );
}
