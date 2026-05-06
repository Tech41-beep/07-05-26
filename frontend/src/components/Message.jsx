import React, { useEffect, useMemo, useState } from 'react'
import messagePhoto from '../img/photo1.jpg'

const contextMessages = {
  home: {
    label: 'Home',
    title: 'Welcome Home, My Love',
    intro: 'This is the sweetest place to start, because everything about you feels like home.',
    messages: [
      'Home is wherever your smile is waiting for me.',
      'You make ordinary moments feel warm and safe.',
      'Every time I see you, my heart relaxes.'
    ]
  },
  memories: {
    label: 'Memories',
    title: 'Beautiful Memories',
    intro: 'Every photo and every moment reminds me how lucky I am to love you.',
    messages: [
      'Each memory is a tiny piece of my heart saved just for you.',
      'The moments we shared are my favorite stories to remember.',
      'Your laugh turns the smallest memory into something priceless.'
    ]
  },
  message: {
    label: 'Message',
    title: 'A Message Just for You',
    intro: 'This page is for the words I want you to keep close to your heart.',
    messages: [
      'You are the reason so many of my days feel brighter.',
      'My favorite place will always be beside you.',
      'Loving you feels easy, natural, and endlessly beautiful.'
    ]
  },
  surprise: {
    label: 'Surprise',
    title: 'A Little Surprise',
    intro: 'Something special is always waiting when it comes to you.',
    messages: [
      'You deserve surprises that make your heart smile.',
      'I hope this little moment feels as special as you are.',
      'The best surprise is getting to love you every day.'
    ]
  }
}

export default function Message({ context = 'message' }) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const messageSet = useMemo(() => contextMessages[context] || contextMessages.message, [context])

  useEffect(() => {
    setCurrentMessageIndex(0)
  }, [context])

  const handleNextMessage = () => {
    setCurrentMessageIndex((prev) => (prev + 1) % messageSet.messages.length)
  }

  return (
    <section className="message">
      <div className="message-card">
        <img className="message-image" src={messagePhoto} alt="A romantic memory" />
        <div style={{ fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#b71c5a', fontWeight: 700, marginBottom: '0.5rem' }}>
          {messageSet.label}
        </div>
        <h2>{messageSet.title}</h2>
        <p className="message-text">{messageSet.intro}</p>
        <p className="message-text" key={`${context}-${currentMessageIndex}`}>
          {messageSet.messages[currentMessageIndex]}
        </p>
        <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
          {currentMessageIndex + 1} / {messageSet.messages.length}
        </div>
        <button className="message-button" onClick={handleNextMessage}>
          Next Message ➜
        </button>
      </div>
    </section>
  )
}
