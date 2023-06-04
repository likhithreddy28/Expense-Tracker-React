import React from "react"
import {Header} from "./components/Header"
import {Balance} from "./components/Balance"
import {Income} from "./components/Income"
import { Transcationlist } from "./components/Transcationlist"
import { Footer } from "./components/Footer"
import './App.css'


function App() {
  return (
    
    <div>

     <Header/> <Balance/>
     <Income/>
     <Transcationlist/>
     <Footer/>

    </div>
  );
}

export default App;
