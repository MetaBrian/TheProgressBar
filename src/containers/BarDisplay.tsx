import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";


function BarDisplay(){

  const [bars, setBars] = useState([])

  useEffect(()=> {
    fetchBars();
  },[]);

  const fetchBars = async() => {
    try { 
      const response = await fetch("http://localhost:8080/getBars");
      const result = await response.json();
      setBars(result);
} 
  catch(error){
    console.log(error, 'error fetching data')
  }
  }

  console.log(...bars,'this is effect bars')

  const content = [];
  for (let i=0; i<bars.length;i++){
    const component = <ProgressBar key={bars[i]._id}>{'13'}</ProgressBar>
    content.push(component)
  }

  return (
      <div className="barDisplay">
        {content}
      </div>  
  )
}

export default BarDisplay;