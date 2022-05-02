//we should delete node modules folder before giving our website to anyone else because it can be reinstalled by using "npm install" that why it is kept under gitingnore files
//bootstrap is css framework by which we can render that ui components into our website which are bydefault responsive

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import About from "./components/About";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled", "success")
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route> */}
          {/* <Route exact path="/" element={}> */}
          <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>
          {/* </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
