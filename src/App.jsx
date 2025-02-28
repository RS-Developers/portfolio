import { useState } from 'react'
import './App.css'
import { motion, AnimatePresence } from 'framer-motion'
import MediaProduction from './components/MediaProduction'
import DigitalMarketing from './components/DigitalMarketing'
import DesignDevelopment from './components/DesignDevelopment'

function App() {
  const [currentImage, setCurrentImage] = useState('/profile.jpg')
  const [isRotating, setIsRotating] = useState(false)
  const [currentText, setCurrentText] = useState({
    title: 'TOG',
    lines: ['reflected', 'visual story', 'telling']
  })
  const [currentSection, setCurrentSection] = useState('media') // 'media', 'digital', 'design'

  const imageConfig = {
    'modern equipment': '/modern-equipment.jpg',
    'expert team': '/expert-team.jpg',
    'sharp editing': '/sharp-editing.jpg',
    'cinematic experience': '/cinematic-experience.jpg'
  }

  const handleTextClick = (text) => {
    setIsRotating(true)
    setTimeout(() => {
      setCurrentImage(imageConfig[text])
      setIsRotating(false)
    }, 300)
  }

  const expertise = [
    {
      title: "Media Production",
      description: "Professional video production services covering all aspects of production.",
      image: "/profile.jpg"
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions for modern campaigns.",
      image: "/profile.jpg"
    },
    {
      title: "Design & Development",
      description: "Creative design and development solutions for modern web.",
      image: "/profile.jpg"
    }
  ]

  const renderCurrentSection = () => {
    switch(currentSection) {
      case 'media':
        return <MediaProduction />
      case 'digital':
        return <DigitalMarketing />
      case 'design':
        return <DesignDevelopment />
      default:
        return <MediaProduction />
    }
  }

  return (
    <div className="main-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>TOG</h1>
          <h2>reflected</h2>
          <h2>visual story</h2>
          <h2>telling</h2>
        </div>
        
        <div className="circular-container">
          <div className="circle-wrapper">
            <div className="text-circle">
              <div className="inner-circle">
                <div className="image-container">
                  <motion.div 
                    className="image-wrapper"
                    animate={{ 
                      rotateY: isRotating ? 360 : 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "linear"
                    }}
                    style={{ 
                      perspective: 1000,
                      transformStyle: "preserve-3d",
                      position: "relative",
                      width: "100%",
                      height: "100%"
                    }}
                  >
                    <motion.img 
                      src={currentImage}
                      alt="Showcase"
                      className="main-image"
                      style={{ 
                        backfaceVisibility: "hidden",
                      }}
                    />
                  </motion.div>
                </div>
              </div>
              
              <span 
                onClick={() => handleTextClick('modern equipment')}
                className="circle-text"
                style={{ top: '-20px', left: '50%', transform: 'translateX(-50%)' }}
              >
                modern equipment
              </span>
              <span 
                onClick={() => handleTextClick('expert team')}
                className="circle-text"
                style={{ top: '50%', right: '-100px', transform: 'translateY(-50%)' }}
              >
                expert team
              </span>
              <span 
                onClick={() => handleTextClick('sharp editing')}
                className="circle-text"
                style={{ bottom: '-20px', left: '50%', transform: 'translateX(-50%)' }}
              >
                sharp editing
              </span>
              <span 
                onClick={() => handleTextClick('cinematic experience')}
                className="circle-text"
                style={{ top: '50%', left: '-100px', transform: 'translateY(-50%)' }}
              >
                cinematic experience
              </span>
            </div>
          </div>
        </div>
      </section>

      {renderCurrentSection()}

      <div className="expertise-nav">
        <button 
          className={`nav-item ${currentSection === 'media' ? 'active' : ''}`}
          onClick={() => setCurrentSection('media')}
        >
          Media Production
        </button>
        <button 
          className={`nav-item ${currentSection === 'digital' ? 'active' : ''}`}
          onClick={() => setCurrentSection('digital')}
        >
          Digital Marketing
        </button>
        <button 
          className={`nav-item ${currentSection === 'design' ? 'active' : ''}`}
          onClick={() => setCurrentSection('design')}
        >
          Design & Development
        </button>
      </div>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-content">
          <h3>The Story Behind</h3>
          <h4>TOG Pictures</h4>
          <p>We're a creative photography + filming studio based in...</p>
        </div>
      </section>

      {/* Show Reel Section */}
      <section className="showreel-section">
        <div className="video-container">
          <div className="play-button">▶</div>
          <h2>SHOW REEL</h2>
          <p>2023</p>
        </div>
        <div className="crazy-ideas">
          <h3>Any crazy ideas</h3>
          <h4>you can imagine</h4>
          <p>We bring them to life</p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <h3>Our Expertise</h3>
        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <div key={index} className="expertise-card">
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
