import React from 'react'
import { useState } from 'react';
import './Temp.css'


function Tempapp(){
const [Temperature, setTemperature]=useState(25);

const incrementTemperature = ()=>
{
    setTemperature(Temperature + 1);
};

    const decrementTemperature =()=>
    {
        setTemperature(Temperature - 1)
    }
 


    const getBGcolor=() =>
    {
const hue=(Temperature-0)/(100-0)*240;
return `hsl(${hue},100%,50%)`;
    };

    return(

    <div className='App' style={{backgroundColor: getBGcolor(Temperature)}} >
 <button onClick={incrementTemperature}>increment</button>
 <button onClick={decrementTemperature}>decrement</button>
 <p>current Temperature {Temperature}</p>


    </div>
    );
}
export default Tempapp;