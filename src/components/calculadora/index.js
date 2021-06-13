import React,{useState} from "react";
import './index.css';





function Calculadora(){

  const[count,setCount]=useState(0);
  const[resultado,setResultado]=useState(0);
  const[num1,setNum1]=useState('');
  const[num2,setNum2]=useState('');
  const [operacion, setOperacion] = useState("+");
  const[mostrar,setMostrar]=useState(0);


 const action=(operation)=>{
     setOperacion(operation);
     switch (operation){
       case "+":
             setResultado(num1+num2);
             setCount(count+1);
             setMostrar(1);
             break;
      case "-":
             setResultado(num1-num2);
             setCount(count+1);
              setMostrar(1);
             break;
      case "*":
            setResultado(num1*num2);
             setCount(count+1);
             setMostrar(1);
            break;
      case "/":
           setResultado(num1/num2);
            setCount(count+1);
            setMostrar(1);
           break;
     }

 }

  const reset = () => {
    setOperacion("+");
    setNum1('');
    setNum2('');
    setResultado(0);
     setMostrar(0);
  };

    return(

      <div className="card">
       <section className="card-text">
           <div data-testid="total-operations">Total operations performed: {count}</div>
         <div className="layout-row justify-content-around align-items-center mt-40">

                <input
                        data-testid='app-input1'
                        id="num1"
                        type="number"
                        value={num1}
                        onChange={(e)=>setNum1(e.target.value)}
                        placeholder="EG:1"
                />

                      <label data-testid='sected-operator' for="operacion">{operacion}</label>

                   <input
                   data-testid='app-input2'
                   id="num2"
                   type="number"
                  onChange={(e)=>setNum2(e.target.value)}
                  value={num2}
                  placeholder="EG:2"
                  />
                  <br/>

                     <div className="layout-row justify-content-around mt-30">
                      <button data-testid='subtractButton' className="operationFont" id="resta" type="submit"   data-testid="subtractButton" onClick={()=>action('-')} >-</button>
                      <button data-testid='addButton' id="suma" type="submit" onClick={()=>action('+')} >+</button>

                      <button data-testid='multiplyButton' id="multiplicasion" type="submit" onClick={()=>action('*')} >*</button>
                      <button data-testid='divideButton' id="deivision" type="submit" onClick={()=>action('/')} >/</button><br/>
                      </div>
                        <button data-testid='reset' id="reset" type="submit" onClick={reset} >RESET</button><br/>
                        <div className="layout-row justify-content-center align-items-center result-container">
                        {(mostrar==1)&&   <div data-testid="result">Result: {resultado}</div>}
                       </div>



           </div>
          </section>
      </div>

    );


}

export default Calculadora;
