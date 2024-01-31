import React , {useState} from 'react'

export default function TextForm(props) {
    const [text,settext] = useState(" ");
 const handleonchange = (event) => {
    settext(event.target.value);
    console.log(event.target.value);
 }



 const yesclicked = () => {
    
  console.log(  text.toUpperCase());
  let newtext = text.toUpperCase();
  settext(newtext)
 
 }
 const yesclickedlower = () => {
    
  console.log(  text.toLowerCase());
  let newtext = text.toLowerCase();
  settext(newtext);
 
 }

 const yesclickedclear=()=>{

  settext("");
  
  
}

const yesclickedspeech = () =>{
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    // Speak the text
    synthesis.speak(utterance);
}
  return (

   <div>
    <div className='Container'>
        
        <h1 style={{ color: props.coolor === "white"? "black":"white"}}>{props.heading}</h1>
       
<div className="mb-3">
 
  <textarea className="form-control" placeholder = "enter your text here" value = {text} onChange={handleonchange}  id="myBox" rows="8"></textarea>
</div>

<button className="btn btn-primary  my-1" onClick={yesclicked}>Convert to Upper Case</button>
<button className="btn btn-primary mx-3 my-1" onClick={yesclickedlower}>Convert to Lower Case</button>
<button className="btn btn-primary mx-3 my-1" onClick={yesclickedclear}>Clear Text</button>
<button className="btn btn-primary mx-3 my-1" onClick={yesclickedspeech}>Text to speech</button>
      
    </div>

    <div className="container my-3">
      <h1 style={{ color: props.coolor === "white"? "black":"white"}} >Your Text Summary</h1>
      <p style={{ color: props.coolor === "white"? "black":"white"}}> {text.length}characters and {text.split(/\s+/).filter( (element) => {return element.length !== 0}).length} words</p>
      <p style={{ color: props.coolor === "white"? "black":"white"}}> { 0.008* text.split(" ").filter( (element) => {return element.length !== 0}).length } time taken to to read paragraph</p>
      <h2 style={{ color: props.coolor === "white"? "black":"white"}}>Preview</h2>
      <p style={{ color: props.coolor === "white"? "black":"white"}}>{text.length > 0 ? text : "Enter Something to preview it here"}</p>

    </div>
    </div>
  )
}
