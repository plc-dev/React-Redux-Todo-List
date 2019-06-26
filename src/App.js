import React from 'react';
import './App.css';
import { NotizList} from "./NotizList";
import {Route, Switch} from "react-router-dom";
import About from "./About";
import Impressum from "./Impressum";
import Menu from "./Menu"
import {NotizListRedux} from "./NotizListWithRedux";


const NoMatch = () => {
    return <div><h1>404</h1></div>
}

function App() {
  return (
    <div className="App">

        <Menu />

        <Switch>

            <Route path="/about" component={About}/>

            <Route path="/impressum" component={Impressum}/>

            <Route path="/redux" component={NotizListRedux}/>

            <Route path="/" exact={true} component={NotizList}/>

            <Route component={NoMatch}/>
        </Switch>

    </div>
  );
}

export default App;
