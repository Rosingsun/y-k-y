// import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import BasicExample from "./route";
import PageConfig  from "../src/components/PageRoute/index.jsx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicExample/>
        {/* <PageConfig /> */}
      </header>
    </div>
  );
}

export default App;
