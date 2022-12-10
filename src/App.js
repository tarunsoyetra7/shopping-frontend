import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
    // const notify = () => toast("Wow so easy!");
    return (
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer/>
        {/* <Button color='primary' outline onClick={notify}>Notify!</Button>
        <ToastContainer />*/}
        </Router>
      </div>
    );
}

export default App;
