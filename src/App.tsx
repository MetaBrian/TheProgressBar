import {Route, Routes} from 'react-router-dom'
import BarDisplay from "./containers/BarDisplay"
import CreateBar from './containers/CreateBar'

function App() {
  // const [count, setCount] = useState(10)

  return (
    <>
      <div className='header'>
      </div>
     <Routes>
        <Route path='/' element={<CreateBar></CreateBar>}/>
        <Route path='/displayBars' element = {<BarDisplay></BarDisplay>}/>
     </Routes>
      <div className='footer'>
      </div>

    </>
  )
}

export default App
