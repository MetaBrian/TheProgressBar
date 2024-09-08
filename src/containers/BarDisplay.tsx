import { useEffect, useState } from "react";
import ProgressBar from "../components/progressBar";


function BarDisplay(){
  
  const [bars, setBars] = useState([])
  const [style, setStyle] = useState('red')
  const defaultText = 'You have no progress bars!'

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
      // console.log(bars, 'this is category')
      const component = <ProgressBar key={bars[i]._id} style={style} id={bars[i]._id} setStyle={setStyle} title={bars[i].title} 
      startValue={bars[i].startValue} endValue={bars[i].endValue} category={bars[i].category}
 
      ></ProgressBar>
      content.push(component)
    }


  return(

      <div className="barDisplay">
        { (content[0]) ? content : <h1>{defaultText}</h1>}
      </div>  
    )

}

export default BarDisplay;