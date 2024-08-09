import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
{/*
    //Uper Camel Case
function Cadburry(){
    return <h3>Kitkat</h3>
}
    */ }
    // Arrow Function
    const Cadburry= () =>{
        return <h3>Kitkat</h3>
    }

root.render(
    
  <>
  <h1>All Cadburry</h1>
  <Cadburry/>
    
           {/*<h1>Kitkat</h1>
<h2>Price:{5+5}</h2>
<hr/>
<p>KIT KAT® Bars have long been associated with breaktime. The "break" tagline was first introduced in 1957, then later evolving into the iconic "Gimme A Break" jingle in 1988.
</p>
<hr/>

*/}
    </>
);