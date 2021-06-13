import './App.css';
import Calculadora from './components/calculadora/index';
import React,{Component} from "react";
import Slider from './components/slider/index';



const title = "Calculator";
const slides=[
  {"title":"title1","text":"text1"},
  {"title":"title2","text":"text2"},
    {"title":"title3","text":"text3"},
]


function App() {


  return(<div>

        <Calculadora/>
    </div>);
    <div>
        <section>
          <Slider/>
        </section>
    </div>
}

export default App;
