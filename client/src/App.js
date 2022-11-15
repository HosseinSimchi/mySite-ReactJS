import './App.css';
import Home from './components/pages/Home.tsx'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
