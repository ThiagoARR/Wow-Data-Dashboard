import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div id="left-menu">
        <ul>
          <li className='option-menu'></li>
          <li className='option-menu'></li>
          <li className='option-menu'></li>
          <li className='option-menu'></li>
          <li className='option-menu'></li>
        </ul>
      </div>
      <div id='main-content'>
        <div className='main-content-wrap'>
          <div className='left-content-wrap'>
            <div className='left-content-1'></div>
            <div className='left-content-2'></div>
          </div>
          <div className='right-content-wrap'>
            <div className='right-content-1'></div>
            <div className='right-content-2'></div>
            <div className='right-content-3'></div>
          </div>
        </div>
      </div>
      <div id="right-menu">
        <ul>
          <li className='option-menu'></li>
          <li className='option-menu'></li>
          <li className='option-menu'></li>
          <li className='option-menu'></li>
          <li className='option-menu'></li>
        </ul>
      </div>
    </div>
  )
}

export default App
