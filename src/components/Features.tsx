
import React from 'react';
import { Truck, Shield, Award, Heart, Leaf, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  columns?: string;
}

const features = [
  {
    icon: Truck,
    title: "Быстрая доставка",
    description: "Доставим заказ за 2 часа по городу. Бесплатно от 2000₽",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Гарантия свежести",
    description: "100% свежие овощи или вернём деньги. Без вопросов",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Award,
    title: "Проверенные фермеры",
    description: "Работаем только с сертифицированными местными хозяйствами",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Heart,
    title: "Забота о здоровье",
    description: "Все продукты проходят лабораторную проверку качества",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Leaf,
    title: "Эко продукты",
    description: "Более 60% ассортимента — органические овощи без химии",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Clock,
    title: "Удобное время",
    description: "Доставляем ежедневно с 8:00 до 22:00. Выбирайте слот",
    color: "from-amber-500 to-yellow-500"
  }
];

export function Features({
  title = "Почему выбирают нас",
  subtitle = "Мы делаем всё, чтобы вы получали самые свежие и полезные овощи",
  columns = "3"
}: FeaturesProps) {
  const cols = parseInt(columns) || 3;

  return (
    <section className="py-20 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 bg-white/10 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            <Leaf className="w-4 h-4" />
            Наши преимущества
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols} gap-8`}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
