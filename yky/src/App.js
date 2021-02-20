// import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import BasicExample from "./route";
import {PageConfig} from "./components/index.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {/* <BasicExample /> */}
          <PageConfig />
        </Router>
      </header>
    </div>
  );
}

export default App;
