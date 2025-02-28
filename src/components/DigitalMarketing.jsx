import { motion } from 'framer-motion'

export default function DigitalMarketing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="story-section">
        <div className="story-content">
          <h3>Our Approach</h3>
          <h4>Digital Marketing</h4>
          <p>Strategic digital marketing solutions for modern campaigns...</p>
        </div>
      </section>

      <section className="showreel-section">
        <div className="video-container">
          <div className="play-button">▶</div>
          <h2>CAMPAIGN SHOWCASE</h2>
          <p>2023</p>
        </div>
        <div className="crazy-ideas">
          <h3>Strategic</h3>
          <h4>Digital Solutions</h4>
          <p>Driving online success</p>
        </div>
      </section>

      <section className="expertise-section">
        <h3>Marketing Services</h3>
        <div className="expertise-grid">
          {/* Add marketing-specific services */}
        </div>
      </section>
    </motion.div>
  )
}
