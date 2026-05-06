import React from 'react'
import birthdayPhoto from '../photo/image1.jpg'

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <div className="heart-emoji">❤️</div>
        <img className="home-image" src={birthdayPhoto} alt="Birthday memory" />
        <h1>Happy Birthday, Soumey! 🎂</h1>
        <p>
          Today is your special day, and I want to celebrate you.<br />
          You make every moment of my life more beautiful and meaningful.
          i wish you all the happiness, love, and success in the world. <br />
          Thank you for being the amazing person you are and for sharing your life with me.
        </p>
        <p style={{ fontSize: '1.2rem', marginTop: '2rem' }}>
          💕 Navigate through the sections to see my love and appreciation na Babe 💕
        </p>
        <div style={{
          marginTop: '3rem',
          fontSize: '2rem',
          animation: 'float 3s ease-in-out infinite'
        }}>
          ✨ 🎉 🎁 🌹 💖 🎉 ✨
        </div>
      </div>
    </section>
  )
}
