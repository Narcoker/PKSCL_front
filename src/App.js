// import log from './img/log.svg';
// import {Nav} from 'react-bootstrap';
import './css/App.css';
import { useEffect, useState } from 'react';
import AccessPage from './AccessPage';
import MainPage from './MainPage';
import ManagementPage from './ManagementPage';
import AlertBox from './AlertBox';
import { Link, Route, Switch, useHistory } from 'react-router-dom';

function loadmonth() {
  let now = new Date();
  let month = now.getMonth();
  return month;
}
function selectseason() {
  switch (loadmonth()) {
    case 0: case 1: case 2:
      return "quarter1"
    case 3: case 4: case 5:
      return "quarter2"
    case 6: case 7: case 8:
      return "quarter3"
    case 9: case 10: case 11:
      return "quarter4"
    default:
      return "";
  }
}
function setColorProperty(colorQuarter, colorQuarterCircle, colorLeftPanel, colorCard) {
  document.documentElement.style.setProperty("--color-quarter", colorQuarter);
  document.documentElement.style.setProperty("--color-quarterCircle", colorQuarterCircle);
  document.documentElement.style.setProperty("--color-leftPanel", colorLeftPanel);
  document.documentElement.style.setProperty("--color-card", colorCard);
}
function defineColor(quarter) {

  if (quarter === "quarter1") {
    setColorProperty("#c89034", "linear-gradient(0deg, rgba(200, 144, 52, 1) 0%, rgba(213, 178, 121, 1) 67%", "#f2e3d7", "#fff5ed");
  } else if (quarter === "quarter2") {
    setColorProperty("#578e5a", "linear-gradient(0deg, rgba(87,142,90,1) 0%, rgba(126,199,130,1) 67%)", "#cedbcf", "#dee7df");
  } else if (quarter === "quarter3") {
    setColorProperty("#9b4346", "linear-gradient(0deg, rgba(155,67,70,1) 0%, rgba(231,140,145,1) 67%)", "#e6bdbd", "#f3dddd");
  } else if (quarter === "quarter4") {
    setColorProperty("#597082", "linear-gradient(0deg, rgba(89,112,130,1) 0%, rgba(145,186,217,1) 67%)", "#d0dbe5", "#e6f1fb");
  }
}



function App() {

  const [loginPosition, setLoginPosition] = useState("student");
  const [SCLData, setSCLData] = useState({});

  useEffect(() => {
    let quarter = selectseason();
    defineColor(quarter);
  }, [])


  return (
    <div>
      <Switch>
        <Route path='/manage'>
          <ManagementPage loginPosition={loginPosition}></ManagementPage>
        </Route>

        <Route path='/main'>
          <MainPage></MainPage>
        </Route>

        <Route path='/error'>
          <AlertBox></AlertBox>
        </Route>

        <Route path='/' >
          <AccessPage setLoginPosition={setLoginPosition} setSCLData={setSCLData}> </AccessPage>
        </Route>

      </Switch>


    </div>
  );
}

export default App;