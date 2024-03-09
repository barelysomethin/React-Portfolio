import React from "react";
import { useState } from "react";
import './termin.css'

import AboutCommand from './About';
import ContactCommand from './contact';
import PortfolioCommand from './portfolio';
import Help from "./help";


const commandHandlers = {
    about: AboutCommand,
    contact: ContactCommand,
    portfolio: PortfolioCommand,
    help: Help,
 
  };

function Terminal() {

    const [input, setinput] = useState('');
    const [output, setOutput] = useState('');

    const [prompt, setPrompt] = useState('[hexagon@rootkit~]');
    const [cursorVisible, setCursorVisible] = useState(true);

    const toggleCursor = () => {
      setCursorVisible(!cursorVisible);
    };
    setInterval(toggleCursor, 1000);

    const handleinputchange = (e) => {
        setinput(e.target.value);
    };
    const handleenterpress = (e) => {
        if (e.key === 'Enter') {
            handlecommand(input);
       
            setinput('');
            setPrompt('[hexagon@rootkit~]')
        }
    };


    const handlecommand = (cmd) => {
 const command= cmd.toLowerCase();
 if(command==='clear'){
    setOutput('');
 }
   
 else if (commandHandlers.hasOwnProperty(command)){
    const CommandComponent = commandHandlers[command];
    const commandOutput = <CommandComponent />;
    setOutput(commandOutput);
 }

 else{
    setOutput(`Unknown command: ${command}`);
 }

        
    };

    return (

        <div className="app">

            <div className="top" >


                <div className="t">hexagon@rootkit</div>
            </div>

            <div className="terminal" >
       
    
                <div className="paren">
                
                <div className="prompt">{prompt}
        <span className={`cursor ${cursorVisible ? 'blink' : ''}`}>&nbsp;</span>
                 </div>
                    <input type="text" value={input}
                        onChange={handleinputchange} onKeyDown={handleenterpress} className="txt" />
                </div> 
                <div className="out">{output}</div>

            

            </div>
        </div>



    )


}
export default Terminal;