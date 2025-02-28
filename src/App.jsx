import { useState } from 'react'
import './App.css'
import { motion, AnimatePresence } from 'framer-motion'
import MediaProduction from './components/MediaProduction'
import DigitalMarketing from './components/DigitalMarketing'
import DesignDevelopment from './components/DesignDevelopment'

function App() {
  const [currentImage, setCurrentImage] = useState('/profile.jpg')
  const [isRotating, setIsRotating] = useState(false)
  const [currentSection, setCurrentSection] = useState('media')
  const [currentText, setCurrentText] = useState({
    title: 'TOG',
    lines: ['reflected', 'visual story', 'telling']
  })

  const sectionTextConfig = {
    media: {
      title: 'MEDIA',
      lines: ['production', 'visual story', 'creation']
    },
    digital: {
      title: 'DIGITAL',
      lines: ['marketing', 'strategic', 'solutions']
    },
    design: {
      title: 'DESIGN',
      lines: ['development', 'creative', 'solutions']
    }
  }

  const handleSectionChange = (section) => {
    setCurrentSection(section)
    setIsRotating(true)
    setCurrentText(sectionTextConfig[section])
    setTimeout(() => {
      setIsRotating(false)
    }, 300)
  }

  const imageConfig = {
    'modern equipment': '/modern-equipment.jpg',
    'expert team': '/expert-team.jpg',
    'sharp editing': '/sharp-editing.jpg',
    'cinematic experience': '/cinematic-experience.jpg'
  }

  const textConfig = {
    'modern equipment': {
      title: 'MODERN',
      lines: ['equipment', 'for best', 'results']
    },
    'expert team': {
      title: 'EXPERT',
      lines: ['professional', 'creative', 'team']
    },
    'sharp editing': {
      title: 'SHARP',
      lines: ['precise', 'editing', 'skills']
    },
    'cinematic experience': {
      title: 'CINEMATIC',
      lines: ['visual', 'story', 'experience']
    }
  }

  const handleTextClick = (text) => {
    setIsRotating(true)
    setCurrentText(textConfig[text])
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

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <motion.div 
      className="main-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.h1
            className="font-heading text-display mb-4"
            key={currentText.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentText.title}
          </motion.h1>
          {currentText.lines.map((line, index) => (
            <motion.h2
              key={line}
              className="font-body text-h2 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {line}
            </motion.h2>
          ))}
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSection}
            className="circular-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
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
          </motion.div>
        </AnimatePresence>
      </section>

      <AnimatePresence mode="wait">
        {renderCurrentSection()}
      </AnimatePresence>

      <motion.div 
        className="expertise-nav"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <button 
          className={`nav-item ${currentSection === 'media' ? 'active' : ''}`}
          onClick={() => handleSectionChange('media')}
        >
          Media Production
        </button>
        <button 
          className={`nav-item ${currentSection === 'digital' ? 'active' : ''}`}
          onClick={() => handleSectionChange('digital')}
        >
          Digital Marketing
        </button>
        <button 
          className={`nav-item ${currentSection === 'design' ? 'active' : ''}`}
          onClick={() => handleSectionChange('design')}
        >
          Design & Development
        </button>
      </motion.div>

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
    </motion.div>
  )
}

export default App
