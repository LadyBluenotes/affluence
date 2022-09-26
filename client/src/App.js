import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import LandingPage from './pages/landing-page/LandingPage'
import SignIn from './pages/sign-in/SignIn'
import SignUp from './pages/sign-up/SignUp'

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
      </Routes>
    </Router>
  );
}

export default App;
