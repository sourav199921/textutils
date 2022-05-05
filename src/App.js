// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';



// import {Link,Route, Router, Routes} from 'react-router-dom'
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
  
} from "react-router-dom";



function App() {
  const [mode,setMode]=useState('light');  //Dark mode is enable or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
  setAlert({
    message:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
    
  }, 1200);
  }

  const toggleMode=()=>{
   if(mode==='light')
   {
     setMode('dark');
     document.body.style.backgroundColor='#042743';
     showAlert('Dark mode has been enabled','success');
     document.title='Textutils-Dark Mode';
   }
   else{
     setMode('light');
     document.body.style.backgroundColor='white';
     showAlert('Light mode has been enabled','success');
     document.title='Textutils-Light Mode';
   }
  }

  return (
   <>
<Router>
   {/* navbar */}
   <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
   {/* alert */}
   <Alert alert={alert}/>

   {/* about */}
   {/* <About/> */}
   
   {/* TextForm */}
   {/* <TextForm  eading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>
    */}
   
   <div className="container">
          <Routes>
            {/* "exact path" using insted of "path "is always a good idea. Because React always do a partial matching. */}
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
        </Router>
     </>
  );
}


export default App;
