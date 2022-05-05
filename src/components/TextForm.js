import React, { useState } from "react";


export default function TextForm(props) {
    const handleUpClick=()=>{
       console.log("uppercase was clicked");
       let newText=text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to Uppercase","success")

    }

    const handleOnChange=(event)=>{
      //  console.log('on change');
       
       setText(event.target.value);

    }

    const handleLoClick=()=>{
       console.log("clicked on lowercase");
       let newText=text.toLocaleLowerCase();
       setText(newText);
       props.showAlert("Converted to Lowercase","success")
    }

    const handleCopyClick=()=>{
       console.log("I am copy");
       let text=document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copied the contents","success");

    }

    const handleRemoveExtraSpaceClick=()=>{
       let newText=text.split(/[ ]+/);
       setText(newText.join(" "));
       props.showAlert("Removed the space","success")
    }

    const handleClearClick=()=>{
       setText('');
       props.showAlert("data is cleared","success")
         
    }
   //In this function our 'text' is initialise with {useState('Enter text here')} and we can update it with only 'setText'.
   //const [text, setText] = useState('Enter text here');
   const [text, setText] = useState('');
   //text="new text"; //wrong way to change the state
   //setText("new text") ;//correct way to chnage state
   return (
      <>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
         <h1>{props.heading}</h1>
         <div className="mb-3">
            {/* <label for="myBox" className="form-label"> */}

            {/* </label> */}
            <textarea
               style={{backgroundColor:props.mode==='dark'?'grey':'white',
               color:props.mode==='light'?'black':'white'}}
               className="form-control"
               value={text}
               onChange={handleOnChange}
               id="myBox"
               rows="8"
            ></textarea>
         </div>
         <button type="button" onClick={handleUpClick} className="btn btn-primary">Convert to uppercase</button>
         <button type="button" onClick={handleLoClick} className="btn btn-primary mx-2">Convert to lowercase</button>
         <button type="button" onClick={handleCopyClick} className="btn btn-primary mx-2">Copy Text</button>
         <button type="button" onClick={handleRemoveExtraSpaceClick} className="btn btn-primary mx-2">Remove Extra Space</button>
         <button type="button" onClick={handleClearClick} className="btn btn-primary mx-2">Clear Text</button>
      </div>
      <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
         <h2>Summery of text</h2>
         <p>Characters :{text.length} </p>
         <p>Words :{(text.split(" ").length)-1}</p>
         <p>Time taken to read {(0.008)*(text.split(" ").length)} min.</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:'Enter text for preview'}</p>
         
      </div>
      </>
   );
}
