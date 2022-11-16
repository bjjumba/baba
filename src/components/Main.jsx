import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import Settings from './Settings'
import Sub from './Sub'
import Upload from './Upload'
import User from './User'
const Main = () => {
  return (
    <div className="main">
      <Routes>
           <Route path="/" exact element={<LandingPage/>}/>
           <Route path="/user" element={<User/>}/>
           <Route path="/sub" element={<Sub/>}/>
           <Route path="/upload" element={<Upload/>}/>
           <Route path="/setings" element={<Settings/>}/>
      </Routes>   
    </div>
  )
}

export default Main