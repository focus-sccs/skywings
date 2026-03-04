
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
  buttonColor = "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700",
  backgroundImage = "https://images.pexels.com/photos/1300979/pexels-photo-1300979.jpeg?auto=compress&cs=tinysrgb&w=1920"
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-green-500/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Доставка сегодня
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              className={`flex items-center gap-2 ${buttonColor} text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-green-500/30 transition-all`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Смотреть каталог
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { icon: Truck, title: "Быстрая доставка", desc: "За 2 часа по городу" },
            { icon: Shield, title: "Гарантия качества", desc: "100% свежесть" },
            { icon: Clock, title: "Ежедневно", desc: "С 8:00 до 22:00" }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
            >
              <div className="bg-green-500/20 p-3 rounded-xl">
                <item.icon className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
