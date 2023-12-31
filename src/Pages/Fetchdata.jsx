import React, { useState } from 'react';

const Fetchdata = () => {

    const[data,setData]=useState([]);
    const[fruit,setFruit]=useState('')
    
const getFruits = async () =>{

    try{
        const response = await Axios.get(`/api/${fruit}/:nutrition?min=0&max=1000`);
        console.log(response.data);
        
    }
    catch(err){
        console.log("enter a valid input");
    }
  }

  return (
    <div>
        <div className="form">
        <input type='text' onChange={(e)=>setFruit(e.target.value)}></input>
        <button onClick={getFruits}>Get Fruit Fat</button>
        <h6>Fat : {data.nutritions.fat}</h6>
        </div>
    </div>
  );
}

export default Fetchdata;
