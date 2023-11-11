// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Calculator from './component/Calculator';
import './styles/cal.css'
// import Home from './component/Home'
// import Profile from './component/Profile';
// import Header from './component/Header';  


function App() {
  return (
    <div className="App">
     <Router>
      {/* <Header/> */}
      <Routes>
        {/* <Route path="/" element ={<Home/>} />
        <Route path="/" element ={<Profile/>} /> */}
        <Route path="/" element ={<Calculator/>} />
      </Routes>
      </Router>       
    </div>
  );
}

export default App;
