import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { Fragment } from 'react';
import Body from './components/Body';

function App() {
    // const notify = () => toast("Wow so easy!");
    return (
      <Fragment>
        <Header />
        {/* <Button color='primary' outline onClick={notify}>Notify!</Button>
        <ToastContainer />*/}
        <Body />
        <div ></div>
        <Footer/>
      </Fragment>
    );
}

export default App;
