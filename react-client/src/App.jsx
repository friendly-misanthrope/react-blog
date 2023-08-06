// import CSS and components here
import './App.css'
import About from './components/About'
import Home from './components/layouts/Home'
import Missing from './components/Missing'

import NewPost from './components/NewPost'
import PostPage from './components/PostPage'
import { useState, useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='post' element={<NewPost />} />
          <Route path='post/:id' element={<PostPage />} />
          <Route path='about' element={<About />} />
        </Route>

        <Route path='*' element={<Missing />} />
      </Routes>

    </div>
  );
} 

export default App;