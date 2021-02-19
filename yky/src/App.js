// import logo from './logo.svg';
import './App.css';
import BasicExample from "./route";
import { Button } from 'antd';
import PageConfig  from "../src/components/PageRoute/index.jsx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <BasicExample/> */}
        <PageConfig />
      </header>
    </div>
  );
}

export default App;
