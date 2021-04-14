import React from 'react';
import './App.scss';
import { Link, Route, Switch } from 'react-router-dom';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import Page3 from './pages/Page3/Page3';

function App() {
  return (
    <div className='App'>
      <nav>
        <Link to='/page1'>Page1</Link>
        <Link to='/page2'>Page2</Link>
        <Link to='/page3'>Page3</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path='/page1'>
            <Page1 />
          </Route>
          <Route exact path='/page2'>
            <Page2 />
          </Route>
          <Route exact path='/page3'>
            <Page3 />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
