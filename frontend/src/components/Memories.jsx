import React, { useState, useEffect } from 'react'
import photo1 from '../img/photo1.jpg'
import photo2 from '../img/photo2.jpg'
import photo3 from '../img/photo3.jpg'
import photo4 from '../img/photo4.jpg'

function buildImageCandidates(imagePath, memoryId) {
  const baseName = imagePath?.replace(/\.(jpg|jpeg|png|webp)$/i, '') || `/memories/memory-${memoryId}`
  return [
    `${baseName}.jpg`,
    `${baseName}.jpeg`,
    `${baseName}.png`,
    `${baseName}.webp`
  ]
}

function MemoryImage({ memory }) {
  const [candidateIndex, setCandidateIndex] = useState(0)
  const candidates = buildImageCandidates(memory.image, memory.id)

  if (!candidates[candidateIndex]) {
    return <div className="memory-image-missing">Photo not found</div>
  }

  return (
    <img
      className="memory-image"
      src={candidates[candidateIndex]}
      alt={memory.title}
      loading="lazy"
      onError={() => setCandidateIndex((i) => i + 1)}
    />
  )
}

const defaultMemories = [
  {
    id: 1,
    title: 'Greating To Meet You',
    description: 'The day we met, everything changed. You brought light into my life.',
    emoji: '💑',
    image: photo1
  },
  {
    id: 2,
    title: 'Adventures Together',
    description: 'Every moment with you is an adventure filled with laughter and love.',
    emoji: '🌍',
    image: photo2
  },
  {
    id: 3,
    title: 'Quiet Moments',
    description: 'In the silence, holding your hand says everything I feel.',
    emoji: '🌙',
    image: photo3
  },
  {
    id: 4,
    title: 'Dreams & Promises',
    description: 'With you, I see a beautiful future full of endless possibilities.',
    emoji: '✨',
    image: photo4
  }
]

export default function Memories() {
  const [memories, setMemories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch memories from backend or use default data
    fetch('/api/memories')
      .then(res => res.json())
      .then(data => {
        const mergedMemories = (Array.isArray(data) ? data : []).map((memory, index) => ({
          ...defaultMemories[index],
          ...memory,
          image: defaultMemories[index]?.image || memory.image
        }))

        setMemories(mergedMemories.length > 0 ? mergedMemories : defaultMemories)
        setLoading(false)
      })
      .catch(err => {
        console.log('Using default memories')
        setMemories(defaultMemories)
        setLoading(false)
      })
  }, [])

  return (
    <section className="memories">
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#ff1493', marginBottom: '2rem' }}>
          📸 Our Beautiful Memories
        </h1>
        {loading ? (
          <p>Loading memories...</p>
        ) : (
          <div className="memories-grid">
            {memories.map((memory) => (
              <div key={memory.id} className="memory-card">
                <MemoryImage memory={memory} />
                <h3>{memory.title}</h3>
                <p>{memory.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
