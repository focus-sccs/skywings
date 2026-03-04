
import React from 'react';
import { CheckCircle, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
}

const achievements = [
  'Более 500 проданных самолетов',
  '15 лет на рынке авиации',
  'Сертифицированный дилер ведущих производителей',
  'Собственный сервисный центр',
  'Летная школа с 50+ инструкторами',
];

export function About({
  title = 'О компании SkyWings',
  subtitle = 'Ваш надежный партнер в мире авиации',
  description = 'SkyWings — ведущий дилер легких самолетов в России и СНГ. Мы предлагаем полный спектр услуг: от консультаций по выбору самолета до технического обслуживания и обучения пилотов. Наша команда экспертов имеет более 15 лет опыта в авиационной индустрии.',
  image = 'https://images.pexels.com/photos/1554732/pexels-photo-1554732.jpeg?auto=compress&cs=tinysrgb&w=800',
}: AboutProps) {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="О компании SkyWings"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              
              {/* Play Button */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-blue-600 ml-1" />
                </div>
              </button>
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-600">15+</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Лет опыта</div>
                  <div className="text-gray-500">на рынке</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              О компании
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-xl text-blue-600 font-medium mb-6">{subtitle}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{description}</p>

            {/* Achievements */}
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              Связаться с нами
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
