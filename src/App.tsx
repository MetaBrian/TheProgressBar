import {Route, Routes} from 'react-router-dom'
import BarDisplay from "./containers/BarDisplay"
import CreateBar from './containers/CreateBar'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ErrorPage from './containers/ErrorPage'
import HomePage from './containers/HomePage'
import EditBar from './containers/EditBar'

function App() {

  return (
    <>

      <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}/>
          <Route path='/editBars' element={<EditBar></EditBar>}/>
          <Route path='/createBars' element={<CreateBar></CreateBar>}/>
          <Route path='/displayBars' element = {<BarDisplay></BarDisplay>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        <Footer/>

    </>
  )
}

export default App
