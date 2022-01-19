// import log from './img/log.svg';
// import {Nav} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import AccessPage from './AccessPage';
import MainPage from './MainPage';
import ManagementPage from './ManagementPage';
import { Link, Route, Switch, useHistory } from 'react-router-dom';



function App() {

  return (
    <div>
      <Switch>
        <Route path='/manage/:major'>
          <ManagementPage></ManagementPage>

        </Route>

        <Route path='/main/:major'>
          <MainPage></MainPage>
        </Route>

        <Route path='/' >
          <AccessPage> </AccessPage>
        </Route>

      </Switch>
      {/* <학생관리></학생관리> */}





    </div>
  );
}

export default App;
