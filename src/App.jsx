import logo from './logo.svg';
import './App.css';
import {ParentComponent} from './components/Parent';
import Parent2 from './components/Parent2';
import StateComp from './components/StateComp';

function App() {
  return (
    <div className="App">
      {/*  */}
      <ParentComponent />
      <Parent2 />
      <StateComp />

    </div>
  );
}

export default App;
