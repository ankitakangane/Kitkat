import "./App.css";


const Cadburry= (props) =>{
    console.log(props);
    return <h3 >{props.name}-{props.price}</h3>
}

function CadburryKitkat(){
    return <h3>Kitkat</h3>
    {/* 
    style={

        {
            backgroundColor:"rgb(255, 204, 204)",
            color:"blue",
            border:"1px double green",
            padding:"10px",
            margin:"5px 10px",
            textAlign:"center"
            
        }
    } */}
        
   
}

export {
    Cadburry,
    CadburryKitkat

} 