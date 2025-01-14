import logo from './logo.svg';
import './App.css';
import {ParentComponent} from './components/Parent';
import Parent2 from './components/Parent2';
import StateComp from './components/StateComp';
import CakeIceEx from './components/CakeIceEx';
import InputForm from './components/InputForm';

function App() {
  return (
    <div className="App">
      {/*  */}
      {/* <ParentComponent />
      <Parent2 />
      <StateComp />
      <CakeIceEx /> */}
      <InputForm />
    </div>
  );
}

export default App;
