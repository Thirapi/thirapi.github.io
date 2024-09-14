import { useState } from 'react'
import './App.css'
function App() {
  const openInNewTab = () => {
    window.open('https://thirapi.vercel.app/', '_blank', 'noopener,noreferrer');
  };

  const commingSoon = () => {
    alert("under construction")
  }
  return (
    <>
      <main>
      <span className='logo'>Thirapi</span>
      <ul className='menu'>
      <li className='menu--items' onClick={openInNewTab}>blog</li>
      <li className='menu--items' onClick={commingSoon}>archive</li>
      </ul>
      </main>
    </>
  )
}

export default App
