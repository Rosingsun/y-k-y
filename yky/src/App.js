// import logo from './logo.svg';
import './App.css';
import { Button, Input } from 'antd';
// import BasicExample from "./route";
import { PageConfig } from "@components/index.jsx";
import { Component } from 'react';

class App extends Component {
  clickBtn = (e) => {
    console.log("clickBtn", e)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Button type='primary' onClick={(e) => { this.clickBtn(e) }}>123</Button>
            <PageConfig />
        </header>
      </div>
    );
  }
}

export default App;
