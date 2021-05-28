import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Note from './pages/Note';
import Auth from './pages/Auth';

function App() {
  return (
    <Container>
      <Router>
        <Route path='/' exact component={Auth} />
        <Route path='/note' exact component={Note} />
      </Router>
    </Container>
  );
}

export default App;
