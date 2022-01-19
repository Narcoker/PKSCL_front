// import log from './img/log.svg';
// import {Nav} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import AccessPage from './AccessPage';
import 학생관리 from './학생관리';
import { Link, Route, Switch, useHistory } from 'react-router-dom';


function App() {

  return (
    <div>
      <Switch>
        <Route path='/' >
          <AccessPage> </AccessPage>
        </Route>
        <Route path='/main/major'>
          로그인 됨
        </Route>
      </Switch>
      {/* <학생관리></학생관리> */}





    </div>
  );
}

export default App;
