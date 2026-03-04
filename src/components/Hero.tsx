
import React from 'react';
import { ArrowRight, Truck, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonColor?: string;
  backgroundImage?: string;
}

export function Hero({
  title = "Свежие овощи прямо с грядки",
  subtitle = "Доставляем экологически чистые овощи от местных фермеров. 100% натурально, без химии и пестицидов. Бесплатная доставка от 2000₽",
  buttonText = "Заказать сейчас",
  buttonColor = "bg-green-600 hover:bg-green-700",
  backgroundImage = "https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=1920"
}: HeroProps) {
  return (
    <section 
      className="relative w-full py-24 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(22, 101, 52, 0.92) 0%, rgba(21, 128, 61, 0.88) 50%, rgba(34, 197, 94, 0.85) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-green-300/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating vegetable icons */}
        <motion.div 
          className="absolute top-20 right-20 text-white/10 text-8xl"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          🥬
        </motion.div>
        <motion.div 
          className="absolute bottom-20 left-20 text-white/10 text-7xl"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          🥕
        </motion.div>
        <motion.div 
          className="absolute top-1/3 left-10 text-white/10 text-6xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          🍅
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-green-100 text-sm font-medium mb-6 border border-white/30">
              🌿 100% органические продукты
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.button 
              className={`px-8 py-4 ${buttonColor} text-white rounded-2xl font-semibold text-lg shadow-2xl shadow-green-900/30 flex items-center gap-2 transition-all duration-300 backdrop-blur-sm border border-white/20`}
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              whileTap={{ scale: 0.95 }}
            >
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Смотреть каталог
            </motion.button>
          </motion.div>
        </div>

        {/* Features badges */}
        <motion.div 
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { icon: Truck, text: "Бесплатная доставка", subtext: "от 2000₽" },
            { icon: Shield, text: "Гарантия качества", subtext: "сертификаты" },
            { icon: Clock, text: "Свежесть 24/7", subtext: "ежедневно" }
          ].map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <item.icon className="w-6 h-6 text-green-200" />
              <div className="text-left">
                <p className="text-white font-medium">{item.text}</p>
                <p className="text-green-200 text-sm">{item.subtext}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
