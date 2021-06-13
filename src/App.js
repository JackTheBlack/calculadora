import './App.css';
import Calculadora from './components/calculadora/index';
import React,{useState, Component} from "react";
import Slider from './components/slider/index';



const title = "Calculator";


const slides=[
  {"title":"title1","text":"text1"},
  {"title":"title2","text":"text2"},
    {"title":"title3","text":"text3"},
]

const names=["Ajay","Bobby","Chitra"];




function App() {


  
  return(<div>
          
        <Calculadora/>
       
    </div>);
    
}

export default App;
