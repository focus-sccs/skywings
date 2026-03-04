
import React from 'react';
import { CheckCircle, Users, Truck, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
}

export function About({
  title = "О нашем магазине",
  description = "ОвощнойРай — это семейный бизнес, который начался в 2015 году с маленькой лавки на рынке. Сегодня мы сотрудничаем с 50+ фермерскими хозяйствами и доставляем свежие овощи тысячам клиентов ежедневно. Наша миссия — сделать качественные продукты доступными для каждой семьи.",
  backgroundImage = "https://images.pexels.com/photos/1300979/pexels-photo-1300979.jpeg?auto=compress&cs=tinysrgb&w=800"
}: AboutProps) {
  const stats = [
    { icon: Users, value: "15 000+", label: "Довольных клиентов" },
    { icon: Truck, value: "50+", label: "Фермерских хозяйств" },
    { icon: Award, value: "8 лет", label: "На рынке" }
  ];

  const benefits = [
    "Только свежие овощи каждый день",
    "Прямые поставки от фермеров",
    "Лабораторный контроль качества",
    "Экологичные упаковки",
    "Гибкая система скидок",
    "Персональный менеджер для оптовиков"
  ];

  return (
    <section id="о-нас" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              О компании
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{description}</p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="inline-flex p-3 rounded-xl bg-green-100 mb-2">
                    <stat.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={backgroundImage}
                alt="Свежие овощи"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500 p-3 rounded-xl">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Сертифицированный партнёр</h4>
                      <p className="text-sm text-gray-600">Лучшая фермерская продукция региона</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm opacity-90">Натурально</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
