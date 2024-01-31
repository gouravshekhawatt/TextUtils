// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import NavBar from './components/Navbar.js';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";




function App() {
  const [mode , modechng] = useState("light");
  const [modee , modeechng] = useState("dark");
  const [coolor , chngcoolor] = useState("white");
  const [ondone , setcomplete] = useState(null);

const togglebutton = () => {

  if(mode === "light" ){
    modechng("dark")
    modeechng("light")
    chngcoolor("black")
    showalert("mode changed to dark mode", "success ")
    document.body.style.backgroundColor = "#1f376c";
    document.title = "React Dark Mode";
  }
else{
  modechng("light")
  modeechng("dark")
  chngcoolor("white")
  document.body.style.backgroundColor = "white";
  document.title = "React Light Mode";
  showalert("mode changed to light mode", "success")
}
}


const showalert = (message, statuss) => {

  setcomplete({
    msg: message,
    statuss: statuss

  })

  setTimeout(() => {
    setcomplete(null)
  }, 1500);
}

  return (

    <BrowserRouter>
 <div>
   
<NavBar title ="textutils" modee = {modee} mode= {mode} togglebutton = {togglebutton}  />
<Alert ondone = {ondone}/>



      <Routes>

        <Route path="/about" element={<About coolor={coolor} />} />
        <Route path="/" element={<div className="container my-3">
      <TextForm heading="Enter the text to analyze below" showalert={showalert} coolor={coolor} />
    </div>} />

      </Routes>
    







       
      

    </div>
    </BrowserRouter>
  );
}

export default App;
