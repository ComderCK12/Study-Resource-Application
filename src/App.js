import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config/firebase';
import { Welcome } from './pages/welcome/welcome';

function App() {

  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes>

          {!user ? <Route path='/' element={<Welcome />} /> : <Route path='/' element={<Home />} />}
          <Route path='login' element={<Login />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
