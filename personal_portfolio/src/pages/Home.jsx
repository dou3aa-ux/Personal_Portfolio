import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LottieCharacter from '../components/LottieCharacter';
import LinkWindow from '../components/LinkWindow';
import PinkButton from '../components/PinkButton';
import PlayerStats from '../components/PlayerStats';
import SkillCard from '../components/SkillCard';
import CuteTerminal from '../components/CuteTerminal';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-[8%] py-16 md:py-0">

        {/* Text Section */}
        <div className="flex flex-col gap-4 max-w-lg text-center md:text-left">
          <motion.p 
            className="text-pink-400 font-medium text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Hi there, I'm
          </motion.p>

          <motion.h1 
            className="text-7xl md:text-8xl font-['Sacramento'] text-gray-900 drop-shadow-sm pb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            Assila Douaa
          </motion.h1>

          <motion.p className="text-gray-400 text-lg">
            Frontend developer · Creative · Based in Tunisia 🌍
          </motion.p>

          {/* NEW STYLED BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-fit mx-auto md:mx-0"
          >
            <PinkButton 
              text="See my work" 
              onClick={() => navigate('/projects')} 
            />
          </motion.div>
        </div>

        {/* Character Section */}
        <motion.div
          className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] bg-pink-50 rounded-full flex items-center justify-center overflow-hidden shadow-inner"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <div className="w-[85%] h-[85%]">
            <LottieCharacter />
          </div>
        </motion.div>
      </section>

      {/* Connections / Window Section */}
      <section className="py-20 px-[5%] bg-pink-50 flex flex-col items-center justify-center">
        <motion.div 
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <LinkWindow />
        </motion.div>
      </section>
      {/*  NEW: SKILLS / GAME SECTION */}
      <section className="py-20 px-[8%] bg-white border-t-4 border-black">
        <h2 className="text-4xl font-['Playfair_Display'] text-center mb-16 underline decoration-pink-300">
          Player Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Column 1: Left Skills */}
          <div className="flex flex-col gap-6">
            <SkillCard name="Chess" level={80} color="bg-cyan-400" />
            <SkillCard name="Drawing" level={75} color="bg-yellow-400" />
          </div>

          {/* Column 2: PIXEL CHARACTER */}
          <PlayerStats />

          {/* Column 3: Right Skills */}
          <div className="flex flex-col gap-6">
            <SkillCard name="Coding" level={90} color="bg-pink-400" />
            <SkillCard name="Sports" level={70} color="bg-purple-400" />
          </div>

        </div>
      </section>
      <section className="py-20 px-[8%] bg-pink-50 flex flex-col items-center">
        <div className="text-center mb-10">
          <p className="text-gray-500">Click the commands to talk to the system</p>
        </div>
  
        <CuteTerminal />
      </section>
    </>
  );
}

export default Home;