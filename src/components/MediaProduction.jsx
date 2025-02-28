import { motion } from 'framer-motion'

export default function MediaProduction() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    exit: { opacity: 0 }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
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
        duration: 0.4
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.section 
        className="story-section"
        variants={itemVariants}
      >
        <div className="story-content">
          <motion.h3
            className="font-heading text-h1 mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Story Behind
          </motion.h3>
          <motion.h4
            className="font-body text-h2 font-medium mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Media Production
          </motion.h4>
          <motion.p
            className="font-body text-lg font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Professional video production services covering all aspects...
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="showreel-section"
        variants={itemVariants}
      >
        <motion.div 
          className="video-container"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="play-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            ▶
          </motion.div>
          <h2>MEDIA REEL</h2>
          <p>2023</p>
        </motion.div>
        <div className="crazy-ideas">
          <motion.h3 variants={itemVariants}>Professional</motion.h3>
          <motion.h4 variants={itemVariants}>Video Production</motion.h4>
          <motion.p variants={itemVariants}>Creating stunning visual content</motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="expertise-section"
        variants={itemVariants}
      >
        <h3>Our Media Services</h3>
        <motion.div 
          className="expertise-grid"
          variants={containerVariants}
        >
          {/* Add grid items with animations */}
        </motion.div>
      </motion.section>
    </motion.div>
  )
}
