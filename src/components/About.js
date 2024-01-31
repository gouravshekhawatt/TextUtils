
import React  from 'react'

export default function About(props) {

    // const [appereance , settextt] = useState({
    //     color: "White",
    //     backgroundColor: "Black"

    // }) 

    const appereance = {

        color: props.coolor==="black"?  "black":"white",
        backgroundColor: props.coolor==="black"?  "white":"#5f73c6",
        width: 1000
    }
    
    // const [textt , buttontext] = useState("Enable Dark Mode")


   

    // const darkmode = () =>{

    //     if(appereance.color === "White"){
    //         settextt({
    //             color: "Black",
    //             backgroundColor: "White"

    //         })

    //         buttontext("Enable Light mode")

    //     }

    //     else{
    //         settextt({
    //             color: "White",
    //             backgroundColor: "Black"

    //         })

    //         buttontext("Enable Dark Mode")

    //     }

    // }
    

    
    return (
    <div style={appereance} className='wiiidth'   >

     



        <h1 className='my-2'> About Us</h1>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item " style={appereance} >
                <h2 className="accordion-header">
                <button className="accordion-button" style={appereance} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze your Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={appereance}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={appereance} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   Free to Use 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={appereance}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={appereance}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion- body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
            {/* <button type="button" onClick={darkmode} className="btn btn-primary">{textt}</button> */}
    </div>
  )
}
