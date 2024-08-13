import ReactDOM from 'react-dom/client';
import Home from "./views/home/home";
import About from "./views/about/about";
import Contact from "./views/contact/contact";
import "./index.css";



const root = ReactDOM.createRoot(document.getElementById('root'));

const currentPath = window.location.pathname;

if (currentPath=="/home") {
    root.render(<Home/>)
}
else if(currentPath=="/about") {
    root.render(<About/>)
}
else if(currentPath=="/contact") {
    root.render(<Contact/>)
}
else{
    root.render(<h1>404 Not Found</h1>)
}
