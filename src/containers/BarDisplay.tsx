import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";


function BarDisplay(){
  
  const [bars, setBars] = useState([])
  const [style, setStyle] = useState('red')

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
    console.log(error, 'error fetching bars')
  }
  }

  const content = [];
    for (let i=0; i<bars.length;i++){
      const component = <ProgressBar key={bars[i]._id} style={style} id={bars[i]._id} setStyle={setStyle} title={bars[i].title} 
      startValue={bars[i].startValue} endValue={bars[i].endValue}
      ></ProgressBar>
      content.push(component)
    }


  return(
      <div className="barDisplay">
        {content}
      </div>  
    )

}

export default BarDisplay;