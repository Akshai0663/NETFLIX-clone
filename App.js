import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RawPost from './Components/RawPost/RawPost'
import {action,orginals} from './Urls'
import './App.css'
function App() {
  return (
    <div>
     <NavBar/>
     <Banner/>
     <RawPost url={orginals} title='Netflix orginals'/> 
     <RawPost url={action} title='Action Movies' isSmall/> 
    </div>
  )
}

export default App
