import React from 'react'

function Alert(props) {
    const caps=(word)=>{
        const capword=word.toLowerCase();
        return capword.charAt(0).toUpperCase()+capword.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
      {props.alert && <div className={`alert alert-success alert-${props.alert.type} fade show`} role="alert">
        <strong>{caps(props.alert.type)}</strong>: {props.alert.message}
      </div>}
    </div>
  )
}

export default Alert
