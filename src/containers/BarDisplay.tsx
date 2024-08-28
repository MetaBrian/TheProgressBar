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


  const content = [];
  for (let i=0; i<bars.length;i++){
    const title = bars[i].title;
    console.log(bars[i].endValue, 'this is content being push')
    console.log(bars[i].startValue/bars[i].endValue, 'this is division')
    const component = <ProgressBar key={bars[i]._id} title={title} startValue={bars[i].startValue} endValue={bars[i].endValue}></ProgressBar>
    content.push(component)
  }

  return (
      <div className="barDisplay">
        {content}
      </div>  
  )
}

export default BarDisplay;