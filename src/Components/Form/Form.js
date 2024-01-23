import './Form.css';
import React,{useState} from 'react';

const Form=(props)=>{
  

  const [form,setForm]=useState(
    {
      'current-savings':200,
      'yearly-contribution':900,
       'expected-return':500,
      'duration':2
      }
  );

  const submitHandler=(event)=>{
    event.preventDefault();
    props.onCalculate(form);
  }
  const inputChange=(Input,event)=>{
   return(
    setForm((prevInput)=>{
      return{
        ...prevInput,
        [Input]:event,
      };
    }),
    console.log(Input,event)
    );
  }
    return(
<form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input value={form['current-savings']} onChange={(event)=>inputChange("current-savings",event.target.value)} type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input value={form['yearly-contribution']} onChange={(event)=>inputChange("yearly-contribution",event.target.value)} type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input value={form['expected-return']} onChange={(event)=>inputChange("expected-return",event.target.value)} type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input value={form['duration']} onChange={(event)=>inputChange("duration",event.target.value)} type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type='reset' className="buttonAlt">
            Reset
          </button>
          <button  type="submit"  className="button">
            Calculate
          </button>
        </p>
      </form>
    );
}
export default Form;