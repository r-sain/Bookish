import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import MainView from './components/MainView';

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="mainView">
          <MainView />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
