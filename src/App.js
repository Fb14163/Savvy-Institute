
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="App">
      <Home></Home>

    </div>
  );
}

export default App;
