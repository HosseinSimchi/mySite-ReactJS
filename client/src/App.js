import './App.css';
import Header from './components/Header'
import Home from './components/pages/Home'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
