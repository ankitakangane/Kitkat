import { createRoot } from "react-dom/client";
import {Cadburry,CadburryKitkat} from "./App.js";

const root = createRoot(document.getElementById("root"));
{/*
    //Uper Camel Case
function Cadburry(){
    return <h3>Kitkat</h3>
}
    */ }
    // Arrow Function
    {/* 
    const Cadburry= (props) =>{
        console.log(props);
        return <h3>{props.name}-{props.price}</h3>
    }
        */}

root.render(
    
  <>
  <h1>All Cadburry</h1>
  <Cadburry name="kitkat" price="20"/>
  <CadburryKitkat/>
    
           {/*<h1>Kitkat</h1>
<h2>Price:{5+5}</h2>
<hr/>
<p>KIT KAT® Bars have long been associated with breaktime. The "break" tagline was first introduced in 1957, then later evolving into the iconic "Gimme A Break" jingle in 1988.
</p>
<hr/>

*/}
    </>
);
