import { motion } from 'framer-motion'

function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {

  const directions = {
    up:    { y: 40 },
    down:  { y: -40 },
    left:  { x: 40 },
    right: { x: -40 },
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn