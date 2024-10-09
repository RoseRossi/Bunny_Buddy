import { useState } from 'react'
import bunnyLogo from '/bunnycon.svg'
import './LandingPage.css'

function LandingPage() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={bunnyLogo} className="logo" alt="Bunny logo" />
        </a>
      </div>
      <h1>BunnyBuddy</h1>
      <div className="card">
        <p>
          Te damos la bienvenida a tu asistente emocional personal. Haz click en el botón
          abajo para iniciar el acompañamiento.
        </p>
        <button onClick={() => handleClick()}>
          Empezar
        </button>
      </div>
      <p className="under-text">
        Dale voz a tus emociones, estamos aquí para escuchar.
      </p>
    </>
  )
}

export default LandingPage
