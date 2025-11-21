import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../../public/vite.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router'

import Home from '../content/Home'
import Nutrition from '../content/Nutrition'
import Exercise from '../content/Exercise'
import Sleep from '../content/Sleep'
import NoMatch from '../content/NoMatch'
import Layout from './Layout'

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nutrition" element={<Nutrition/>}></Route>
        <Route path="/exercise" element={<Exercise/>}></Route>
        <Route path="/sleep" element={<Sleep/>}></Route>
        <Route path="*" element={<NoMatch/>}></Route>
      </Route>
    </Routes>
  </HashRouter>
}

export default App;
