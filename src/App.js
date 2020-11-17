import './App.css';
import Header from'./Header.js';
import Home from './Home.js'
function App() {
  return (
    //BEM 컨벤션
    <div className="app">
      <Header/>
      <Home/>
      
    </div>
  );
}

export default App;
