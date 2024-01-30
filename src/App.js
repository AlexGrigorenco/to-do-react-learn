

import './App.css';
import { Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import About from './pages/about/About';
import Home from './pages/home/Home';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';

function App() {
  return (
    <FirebaseState>
      <AlertState>

        <Header />

        <div className='container'>
          <Routes>
            <Route path='/to-do-react-learn' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>

      </AlertState>
    </FirebaseState>
  );
}

export default App;
