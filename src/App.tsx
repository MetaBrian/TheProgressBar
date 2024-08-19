import {Route, Routes} from 'react-router-dom'
import BarDisplay from "./containers/BarDisplay"
import CreateBar from './containers/CreateBar'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(10)

  return (
    <>
      <NavBar/>
        <Routes>
          <Route path='/' element={<CreateBar></CreateBar>}/>
          <Route path='/displayBars' element = {<BarDisplay></BarDisplay>}/>
        </Routes>
        <Footer/>

    </>
  )
}

export default App
