import './LocNotDetected.css';
import logo from 'C:\\Users\\HP\\Desktop\\EnvSafari\\my-app\\src\\Images\\new3.jpg';

function locNotDetected(props){
    console.log("Inside locNotDetected");
    return (  <div className="locNotDetected">
        <div className="logo">
        <img src={logo}/>
        </div>
        <div className="message">
        <p>{props.message}</p>
        </div>
          
    </div>
    );
}

export default locNotDetected;