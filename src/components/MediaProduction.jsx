import { motion } from 'framer-motion'

export default function MediaProduction() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="story-section">
        <div className="story-content">
          <h3>The Story Behind</h3>
          <h4>Media Production</h4>
          <p>Professional video production services covering all aspects...</p>
        </div>
      </section>

      <section className="showreel-section">
        <div className="video-container">
          <div className="play-button">▶</div>
          <h2>MEDIA REEL</h2>
          <p>2023</p>
        </div>
        <div className="crazy-ideas">
          <h3>Professional</h3>
          <h4>Video Production</h4>
          <p>Creating stunning visual content</p>
        </div>
      </section>

      <section className="expertise-section">
        <h3>Our Media Services</h3>
        <div className="expertise-grid">
          {/* Add media-specific services */}
        </div>
      </section>
    </motion.div>
  )
}
