import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/Button';
import Input from './components/Input';
import Clear from './components/Clearbutton';
import * as math from 'mathjs';



const App = () => {
    const [state, setstate] = useState('');
    const handelEqual = () =>{
        setstate(math.evaluate(state));
    }

    const addToInput = (val:any) => {
       setstate(state+val)
    }
    return(
        console.log(state),
        <div className="app">
            
           <div className="calc-wrapper">
           <Input input={state}/>
               <div className="row">
                  <Button handelClick={addToInput}>7</Button>
                  <Button handelClick={addToInput}>8</Button>
                  <Button handelClick={addToInput}>9</Button>
                  <Button handelClick={addToInput}>/</Button>
               </div>
               <div className="row">
                  <Button handelClick={addToInput}>4</Button>
                  <Button handelClick={addToInput}>5</Button>
                  <Button handelClick={addToInput}>6</Button>
                  <Button handelClick={addToInput}>x</Button>
               </div>
               <div className="row">
                  <Button handelClick={addToInput}>1</Button>
                  <Button handelClick={addToInput}>2</Button>
                  <Button handelClick={addToInput}>3</Button>
                  <Button handelClick={addToInput}>+</Button>
               </div>
               <div className="row">
                  <Button handelClick={addToInput}>.</Button>
                  <Button handelClick={addToInput}>0</Button>
                  <Button handelClick={handelEqual}>=</Button>
                  <Button handelClick={addToInput}>-</Button>
               </div>
               <div className="row">
                  <Clear handleClear={()=>setstate(" ")}>Clear</Clear>
               </div>
           </div>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

