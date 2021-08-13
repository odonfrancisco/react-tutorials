import './css/App.css';
import Home from './components/Home';
import About from './components/About';
import { Projects } from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar/>

      <Switch>
        <Route exact path ='/'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route exact path='/projects'>
          <Projects/>
        </Route>
        <Route 
          path='/projects/:id'
        >
          <ProjectDetails/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
