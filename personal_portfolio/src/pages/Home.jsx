import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ChibiCharacter from '../ChibiCharacter.jsx';

function Home() {
    return (
    <section className="
        min-h-[90vh] flex flex-col-reverse md:flex-row
        items-center justify-between
        gap-10 px-[8%] py-16 md:py-0
        ">

      {/*Text Section */}
        <div className="flex flex-col gap-4 max-w-lg text-center md:text-left">

        <motion.p
            className="text-pink-400 font-medium text-lg" // Changed violet to pink
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            Hi there, I'm
        </motion.p>

        <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight text-gray-800"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
        >
            Assila Douaa
        </motion.h1>

        <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            Frontend developer · Creative · Based in Tunisia 🌍
        </motion.p>

        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
        >
            <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-fit mx-auto md:mx-0"
            >
            <Link
                to="/projects"
                className="
                inline-block px-8 py-3 bg-pink-400 text-white
                rounded-full font-semibold
                shadow-lg shadow-pink-200/50 
                hover:bg-pink-500 transition-colors
                " // Changed violet to pink and updated shadow
            >
                See my work
            </Link>
            </motion.div>
        </motion.div>

        </div>

      {/*Character Section */}
        <motion.div
          className="
            w-[280px] h-[280px] md:w-[400px] md:h-[400px] 
            bg-pink-50 rounded-full 
            flex items-center justify-center
            overflow-visible
            shadow-inner shadow-pink-100/50
          "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <ChibiCharacter />
        </motion.div>

    </section>
    )
}

export default Home;