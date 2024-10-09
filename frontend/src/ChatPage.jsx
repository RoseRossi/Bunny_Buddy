import { useState } from 'react'
import bunnyLogo from '/bunnycon.svg'
import './LandingPage.css'

function ChatPage() {

  return (
    <>
      <div>
        <a >
          <img src={bunnyLogo} className="logo" alt="Bunny logo" />
        </a>
      </div>
      <h1>BunnyBuddy</h1>
      <div className="card">
        <p>
          Welcome to your personal emocional assistant. Click on the button down below to start your journal.
        </p>
        <button onClick={() => handleClick()}>
          Start
        </button>
      </div>
      <p className="under-text">
        Your voice, your healing.
      </p>
    </>
  )
}

export default ChatPage
