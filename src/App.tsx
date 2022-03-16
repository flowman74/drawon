import { Router, Route, Switch } from 'wouter';
import MainMenu from './pages/MainMenu';
import JoinPage from './pages/JoinPage';
import CreatePage from './pages/CreatePage';
import SettingsPage from './pages/SettingsPage';
import AboutPage from './pages/AboutPage';
import Error404 from './pages/Error404';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <MainMenu />
        </Route>
        <Route path='/join'>
          <JoinPage />
        </Route>
        <Route path='/create'>
          <CreatePage />
        </Route>
        <Route path='/settings'>
          <SettingsPage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
