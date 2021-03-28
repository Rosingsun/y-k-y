// import logo from './logo.svg';
import './App.css';
import { PageConfig } from "@components/index.jsx";
import { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PageConfig />
        </header>
      </div>
    );
  }
}

export default App;
