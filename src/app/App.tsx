import { motion } from 'motion/react';
import { Particles } from './components/Particles';
import { FloatingHearts } from './components/FloatingHearts';
import { Sparkles } from './components/Sparkles';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://avatars.mds.yandex.net/i?id=cad8abcebca527b36c7c0734d0b3eaa7_l-9456457-images-thumbs&n=13)',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Effects */}
      <Particles />
      <FloatingHearts />
      <Sparkles />

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:px-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 border-4 border-pink-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Title with pulsing animation */}
          <motion.h1
            className="text-center mb-8 md:mb-12 text-pink-600"
            style={{
              fontFamily: 'Lobster, cursive',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: '1.2',
            }}
            animate={{
              textShadow: [
                '0 0 10px rgba(236, 72, 153, 0.5)',
                '0 0 20px rgba(236, 72, 153, 0.8)',
                '0 0 10px rgba(236, 72, 153, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            С 8 Марта! 🌸
          </motion.h1>

          {/* Greeting Text */}
          <motion.div
            className="space-y-6 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.p
              className="text-center"
              style={{
                fontFamily: 'Lobster, cursive',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                lineHeight: '1.4',
              }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Дорогая Анжела!
            </motion.p>

            <motion.p
              className="text-center leading-relaxed"
              style={{
                fontSize: 'clamp(1.1rem, 3vw, 1.8rem)',
                lineHeight: '1.6',
              }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Поздравляю тебя с 8 марта! Желаю тебе море счастья, тепла, любви и вдохновения в каждом дне. Пусть всё у тебя с Серёжей будет хорошо — вместе вы преодолеете любые бури и насладитесь яркими моментами. Будь счастливой и любимой!
            </motion.p>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="flex justify-center items-center gap-4 mt-8 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {['🌷', '🌹', '💐', '🌺', '🌸'].map((emoji, index) => (
              <motion.span
                key={index}
                className="text-4xl md:text-6xl"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
