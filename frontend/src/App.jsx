import { useState, useEffect } from 'react'
import Home from './components/Home'
import Memories from './components/Memories'
import Message from './components/Message'
import Surprise from './components/Surprise'
import FloatingHearts from './components/FloatingHearts'
import './index.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [messageContext, setMessageContext] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Play background music from YouTube song
    const audio = new Audio('/soumey-song.mp3')
    audio.loop = true
    audio.volume = 0.4

    if (audioEnabled) {
      audio.play().catch(err => console.log('Music loading...', err))
    }

    return () => {
      audio.pause()
    }
  }, [audioEnabled])

  const sections = {
    home: <Home />,
    memories: <Memories />,
    message: <Message context={messageContext} />,
    surprise: <Surprise />
  }

  const handleSectionChange = (section) => {
    setActiveSection(section)
    setMessageContext(section)
    setMenuOpen(false)
  }

  return (
    <div className="app-shell">
      {/* Navigation */}
      <nav className="site-nav">
        <div className="nav-bar">
          <button
            className="nav-menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            type="button"
          >
            ☰
          </button>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <button
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => handleSectionChange('home')}
            >
               Home
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'memories' ? 'active' : ''}
              onClick={() => handleSectionChange('memories')}
            >
               Memories
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'message' ? 'active' : ''}
              onClick={() => handleSectionChange('message')}
            >
               Message
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'surprise' ? 'active' : ''}
              onClick={() => handleSectionChange('surprise')}
            >
               Surprise
            </button>
          </li>
          <li>
            <button
              onClick={() => setAudioEnabled(!audioEnabled)}
              title={audioEnabled ? 'Mute music' : 'Play music'}
            >
              {audioEnabled ? '🔊' : '🔇'} Music
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container">
        {sections[activeSection]}
      </main>

      {/* Floating Hearts */}
      <FloatingHearts />
    </div>
  )
}

export default App
