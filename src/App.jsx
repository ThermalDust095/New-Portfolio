import { useState, useEffect } from 'react'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About';
import Loading from './components/Loading';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if(isLoading){
    return (<Loading/>)
  }


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
