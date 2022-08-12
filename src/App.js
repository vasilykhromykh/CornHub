import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import {Routes, Route} from 'react-router-dom'
import AddVideo from "./Components/AddVideo/AddVideo";
import Video from "./Components/Video/Video";
import React from 'react'
import NotReady from "./Components/NotReady";
function App() {

    const [item, setItem]=React.useState()
    const [value, setValue]=React.useState('')
    function onSus(item){
        setItem(item)
    }
    function sos(value){
        setValue(value)
    }


  return (
    <div className="App">
     <Header sos={sos}/>

        <Routes>
            <Route path="/" element={ <Home value={value} onSus={onSus}/>}>

            </Route>
            </Routes>
     <Routes>
         <Route path="/addvideo"
                element={ <AddVideo/>
                }>

         </Route>


     </Routes>

        <Routes>
            <Route path="/video" element={ <Video item={item}/>}>

            </Route>
        </Routes>

<Routes>
    <Route path="/notready" element={ <NotReady/>}>

    </Route>
</Routes>



    </div>
  );
}

export default App;
