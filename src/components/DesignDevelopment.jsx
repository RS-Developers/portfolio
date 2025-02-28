import { motion } from 'framer-motion'

export default function DesignDevelopment() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="story-section">
        <div className="story-content">
          <h3>Our Process</h3>
          <h4>Design & Development</h4>
          <p>Creative design and development solutions for modern web...</p>
        </div>
      </section>

      <section className="showreel-section">
        <div className="video-container">
          <div className="play-button">▶</div>
          <h2>PROJECT SHOWCASE</h2>
          <p>2023</p>
        </div>
        <div className="crazy-ideas">
          <h3>Creative</h3>
          <h4>Web Solutions</h4>
          <p>Building digital experiences</p>
        </div>
      </section>

      <section className="expertise-section">
        <h3>Development Services</h3>
        <div className="expertise-grid">
          {/* Add development-specific services */}
        </div>
      </section>
    </motion.div>
  )
}
