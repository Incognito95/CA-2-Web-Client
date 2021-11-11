import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import Login from './Components/Login';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Login />
    </div>
  );
}

export default App;