import { useState } from 'react';
import bunnyLogo from '/bunnycon.svg';
import axios from 'axios';
import './ChatPage.css';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);

  // Function to handle speech recording and sending text to Flask
  const handleVoiceInput = async () => {
    setIsListening(true);
    try {
      // Aquí hacemos una solicitud POST al endpoint de Flask
      const response = await axios.post('http://localhost:5007/voice-to-text');
      const rasaResponses = response.data;

      const userMessage = rasaResponses[0]?.text || "No se reconoció ningún texto.";
      const assistantMessage = rasaResponses[1]?.text;

      // Actualizar el chat con mensajes del usuario y del asistente
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: userMessage },
        assistantMessage && { sender: 'assistant', text: assistantMessage },
      ].filter(Boolean));
    } catch (error) {
      console.error('Error during voice input:', error);
    } finally {
      setIsListening(false);
    }
  };

  return (
    <>
      <div>
        <a>
          <img src={bunnyLogo} className="logo" alt="Bunny logo" />
        </a>
      </div>
      <h1>BunnyBuddy</h1>
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div className="card">
          <button onClick={handleVoiceInput} disabled={isListening}>
            {isListening ? 'Listening...' : 'Talk to BunnyBuddy'}
          </button>
        </div>
      </div>
      <p className="under-text">
        Your voice, your healing.
      </p>
    </>
  );
}

export default ChatPage;
