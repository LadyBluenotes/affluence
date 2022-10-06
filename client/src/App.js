import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import LandingPage from './pages/landing-page/LandingPage'
import SignIn from './pages/sign-in/SignIn'
import SignUp from './pages/sign-up/SignUp'
import Home from './pages/home/Home'
import Transactions from './pages/transactions/Transactions'

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path ='/'
          element={<LandingPage />}
        />
        <Route 
          path ='/signin'
          element={<SignIn />}
        />
        <Route 
          path ='/signup'
          element={<SignUp />}
        />
        <Route 
          path='/home'
          element={<Home />}
        />
        <Route
          path='/transactions'
          element={<Transactions />}
        />
      </Routes>
    </Router>
  );
}

export default App;
