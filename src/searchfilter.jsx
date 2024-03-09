import React from "react";
import {useState} from 'react'

function Searchfilter()
{

const users=[{id:1, name:"justin"},
             {id:2, name:"jaustina"},
             {id:3, name:"john"},
             {id:4, name:"jacob"},
             {id:5, name:"jordan"}]

const [searchkey, setSearchkey]= useState('')
const [newuser,setnewuser]=useState('');
let userlist=null;



const [Button, setButton] =useState(false)


const handleclick =()=>{
    const filteredusers= users.filter(user=> user.name.toLowerCase().includes(searchkey.toLowerCase()));
    

setnewuser(filteredusers);
setButton(true)
}


if(searchkey && Button){
     userlist=  (  <ul>
    {
    newuser.map(user=>
    (<li key={user.id}>{user.name}</li>)
    )}
    
    
        </ul>)
    
}


return(

<div>


    <input type="text" placeholder="enter searchkey" onChange={(e)=> setSearchkey(e.target.value)} />
 
<button onClick={handleclick}>search</button>

{userlist}
    </div>
)


}

export default Searchfilter;