import React, { useState, useEffect } from 'react'

export default function Surprise() {
  const [surprise, setSurprise] = useState(null)
  const [showSurprise, setShowSurprise] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch surprise from backend or use default data
    fetch('/api/surprise')
      .then(res => res.json())
      .then(data => {
        setSurprise(data)
        setLoading(false)
      })
      .catch(err => {
        console.log('Using default surprise')
        setSurprise({
          message: "🎉 Happy Birthday to the Love of My Life! 🎉",
          hearts: "❤️ 💕 💖 💗 💝 💓",
          special: "You are the most beautiful part of my life, and every moment with you feels like something I never want to end. Your smile lights up my darkest days, and your presence makes everything feel right. I’m so grateful to have you by my side, to laugh with you, grow with you, and create memories together. On your special day, I just want you to know how deeply I love you and how much you mean to me—today and always."
        })
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section className="surprise">
        <div className="surprise-content">
          <p>Loading surprise...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="surprise">
      <div className="surprise-content">
        {!showSurprise ? (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>🎁 Special Surprise</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              Click the button below to reveal your special surprise!
            </p>
            <button
              className="message-button"
              onClick={() => setShowSurprise(true)}
              style={{
                fontSize: '1.2rem',
                padding: '1.5rem 3rem',
                animation: 'bounce 2s ease-in-out infinite'
              }}
            >
              🎉 Reveal Surprise 🎉
            </button>
          </div>
        ) : (
          <div className="surprise-box">
            <h1>{surprise.message}</h1>
            <div className="surprise-hearts">{surprise.hearts}</div>
            <p>{surprise.special}</p>
            <div style={{
              marginTop: '2rem',
              fontSize: '1rem',
              opacity: 0.9,
              fontStyle: 'italic'
            }}>
              You are loved more than you know. 💕
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
