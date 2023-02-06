import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='header-main-icon'>

        </div>
        <div className='header-wrap'>
          <div className='header-wrap-left-content'> 
            <div className='header-menu-list'>
              <ul>
                <li>Home</li>
                <li>Characters</li>
                <li>Dashboard</li>
                <li>Ranking</li>
              </ul>
            </div>
            <div className='header-menu-searchbar'>
              <input type="text" placeholder='Busque seu personagem' />
              <div className='header-menu-searchbar-icon'></div>
            </div>
          </div>

          <div className='header-wrap-right-content'>
            <div className='header-loggin-button-wrap'>
              <div className='header-loggin-button'>Logar com BattleNet</div>
            </div>
          </div>
        </div>

      </div>
      <div className='sidebar-left'>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='sidebar-right'>
      <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='content'>
        <div className='teste'></div>
      </div>
    </div>
  )
}

export default App
