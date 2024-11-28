import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar'
import CreatePost from './components/CreatePost'


const App = () => {
    return(
        <BrowserRouter>
        <div className='container'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/add" element={<CreatePost/>}></Route>
        </Routes>
        </div>
        </BrowserRouter>
    )
}

export default App