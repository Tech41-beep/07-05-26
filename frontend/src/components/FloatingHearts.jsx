import React, { useEffect, useState } from 'react'

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const createHeart = () => {
      const heart = {
        id: Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2
      }
      setHearts(prev => [...prev, heart])

      // Remove heart after animation completes
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== heart.id))
      }, 6000)
    }

    // Create a heart every 2 seconds
    const interval = setInterval(createHeart, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart floating"
          style={{
            left: `${heart.left}%`,
            bottom: '0',
            animationDelay: `${heart.delay}s`
          }}
        >
          ❤️
        </div>
      ))}
    </>
  )
}
