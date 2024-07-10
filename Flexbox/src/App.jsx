import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    
    <div className="flex-container">
      <div className="component-1">
        <div className="rectangle box-1"></div>
        <div className="square box-2"></div>
        <div className="rectangle box-3"></div>
      </div>
      <div className="component-2">
        <div className="square box-4"></div>
        <div className="circle box-5"></div>
        <div className="square box-6"></div>
      </div>
      <div className="component-3">
        <div className="rectangle box-7"></div>
        <div className="square box-8"></div>
        <div className="rectangle box-9"></div>
      </div>
    </div>
  );
}

export default App;