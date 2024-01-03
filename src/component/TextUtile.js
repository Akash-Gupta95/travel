import { useState } from "react"
import React  from 'react'

const style2 = {
    fontSize:"25px",
    textShadow:"2px 2px 2px black"
}




 
const TextUtile = ({heading}) => {


    const [text , setText] = useState("");
    

    

    const handleOnChange=(e)=>{
        setText(e.target.value)
        
       
    }
 
    const handleUpClick = (e)=>{
        const CatchText = text;
       
        setText(CatchText.toUpperCase());
        
    }

    const handleClear = ()=>{
        const clear="";

        setText(clear)
    }

    const handlecopy=()=>{
        const text = document.getElementById('copytext');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
 
  return (
    <>
    <div className="container bg-grey" >
        <h1 className='text-center mt-5'>{heading}</h1>
    
       <textarea name="" id="copytext" cols="92" rows="6"  onChange={handleOnChange} value={text} className='form-control bg-dark text-white'></textarea>

       <div className="container d-flex mt-2">
        <p className=''>Word<strong>{text.split(" ").length}</strong></p>
        <p className='mx-3' >Char<strong>{text.length}</strong></p>
      </div>

<div className="buttons d-flex ">
      <div className="mt-3 mx-3" onClick={handleUpClick} ><button className='btn btn-primary'>ChangeUpper</button></div>
      <div className="mt-3 mx-3" onClick={handleClear} ><button className='btn btn-danger'>Clear</button></div>
      <div className="mt-3 mx-3" onClick={handlecopy} ><button className='btn btn-success'>copy</button></div>

      </div>
      <p className="text-warning para" style={style2}>{text}</p>
      </div>
     
      </>
  )
}

export default TextUtile