import React,{useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(prop) {
  const handelUpClick = () => {
    setText(text.toUpperCase(text));
    prop.showalerts("Converted to Uppercase" , "success");
  }
  
  const handelLoClick = () => {
    setText(text.toLowerCase(text));
    prop.showalerts("Converted to Lowercase" , "success");
  }
  
  const handelClearClick = () => {
    setText("");
    prop.showalerts("Cleared Text Box" , "success");
  }
  
  const handelCopyClick = () => {
    navigator.clipboard.writeText(text);
    prop.showalerts("Copied to clipboard" , "success");
  }

  const handelFormatClick = () =>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))
    prop.showalerts("Extra spacess removed" , "success");
  }
  
  const handelInvClick = () => {
    setText(text.split(' ').reverse().join(' '));
    prop.showalerts("Inverted Text" , "success");
  }
  
  const handelSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    prop.showalerts("Speaking" , "success");
  }

  const handelOnChange = (event) => {
    setText(event.target.value);
  }

  const [text,setText] = useState('')


  return (
    <>
    <div className={`container text-${prop.mode==='light'?'dark':'light'}`}>
        <h1>{prop.Heading}</h1>
        <div className="mb-3">
            <label htmlFor="MyTextBox" className="form-label">{prop.Title}</label>
            <textarea className={`form-control`} value={text} onChange={handelOnChange} style={{background: document.body.style.background , color: prop.mode==='light'?'black':'white'}} id="myBox" rows="10"></textarea>
        </div>
        <button disabled={text.length===0} className={`btn btn-${prop.mode} mx-2 my-2`} onClick={handelUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className={`btn btn-${prop.mode} mx-2 my-2`} onClick={handelLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className={`btn btn-${prop.mode} mx-2 my-2`} onClick={handelClearClick}>Clera text</button>
        <button disabled={text.length===0} className={`btn btn-${prop.mode} mx-2 my-2`} onClick={handelCopyClick}>Copy to Clipboard</button>
        <button disabled={text.length===0} className={`btn btn-${prop.mode} mx-2 my-2`} onClick={handelFormatClick}>Format text</button>
        <button disabled={text.length===0} className={`btn btn-${prop.mode} mx-2 my-2`} onClick={handelInvClick}>Invert text</button>
        <button disabled={text.length===0} className={`btn btn-${prop.mode} mx-2 my-2`} onClick={handelSpeakClick}>Speak</button>
    </div>
    <div className={`container my-3 text-${prop.mode==='light'?'dark':'light'}`}>
      <h2>Your Text Summary</h2>
      <p>{text.trim().split(/\s+/).filter(word => word).length} words , {text.length} characters</p>
      <p>You will take aprox {0.008*text.trim().split(/\s+/).filter(word => word).length} min to read this.</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to Preview"}</p>
    </div>
    </>
  )
}

TextForm.propTypes={
    Heading: PropTypes.string,
    Title: PropTypes.string,
    mode: PropTypes.string,
}

TextForm.defaultProps={
    Heading:'Enter Text area',
    Title:'Text Box',
    mode:'light',
}