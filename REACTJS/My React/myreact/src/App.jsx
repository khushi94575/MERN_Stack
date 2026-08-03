import React, { useRef, useState } from 'react';
import GrandParent from './components/GrandParent';
import Child from './components/Child';
import Parent from './components/Parent';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import UserContext from './components/Context/UserContext';
import Footer from './components/Footer/Footer';

 function App() {
  const inputRef=useRef();
  const[value,setValue]=useState("");
const handleChange=()=>{
  console.log(inputRef.current.value);
  setValue(inputRef.current.value);
}
  return (

    <div>
    {/* <UserContext.Provider value= {{userName , array}}> */}
      {/* <GrandParent />
    <Child />
    <Parent /> */}
    {/* </UserContext.Provider> */}
    {/* <h1>Controll components</h1> */}
    {/* <input type='text' value={value} onChange={(e) =>{
      setValue(e.target.value); */}
    {/* }}/> */}
    {/* <input type='text' ref={inputRef} onChange={handleChange} />
    <h1>typing:{value}</h1> */}
      <div>
        <BrowserRouter>
          <About />
          <Routes>
            <Route path="/" element={<Contact />}/>
            <Route path="/home/about" elememt={<Footer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App