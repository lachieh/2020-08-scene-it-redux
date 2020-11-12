import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </Container>
  );
}

export default App;
