import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert';

const App=()=>{
  const [mode,setmode] = useState('light');
  const [alert,setalert] = useState(null)
  
  const showalerts = (message,type) =>{
    setalert({
      message:message,
      type:type,
    })
    setTimeout(() => {
      setalert(null)
    }, 500);
  }
  
  const primaryMode = (cls) => {
    setmode(cls);
    if(cls==='primary'){
      document.body.style.background = '#0a3f8e'
      showalerts("Blue mode has been enabled" , "success");
    }
    else if(cls==='success'){
      document.body.style.background = '#0b472b'
      showalerts("Green mode has been enabled" , "success");
    }
    else if(cls==='danger'){
      document.body.style.background = '#661920'
      showalerts("Red mode has been enabled" , "success");
    }
    else if(cls==='warning'){
      document.body.style.background = '#836306'
      showalerts("Yellow mode has been enabled" , "success");
    }
    else if(cls==='light'){
      document.body.style.background = '#ababab'
      showalerts("Light mode has been enabled" , "success");
    }
    else if(cls==='dark'){
      document.body.style.background = '#042743'
      showalerts("Dark mode has been enabled" , "success");
    }
    else{
    showalerts("Something went wrong" , "danger");
    }
  }

  return (
    <>
    <Router>
    <Navbar
      title='TextUtils'
      mode={mode}
      primarymode={primaryMode}
    />
    <Alert alert={alert} />
    <div className="container my-5">
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
        <Route exact path="/" element={<TextForm showalerts={showalerts} Heading='Enter text to analyze' Title='Text Area' mode={mode}/>}/>
        {/* <TextForm showalerts={showalerts} Heading='Enter text to analyze' Title='Text Area' mode={mode}/> */}
      </Routes>
    </div>
  </Router>
    </>
  );
}

export default App;
