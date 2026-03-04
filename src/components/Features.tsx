
import React from 'react';
import { Shield, Settings, CreditCard, HeadphonesIcon, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
}

const features: Feature[] = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Гарантия качества',
    description: 'Все самолеты проходят тщательную проверку нашими экспертами перед продажей',
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: 'Полный сервис',
    description: 'Техническое обслуживание, ремонт и модернизация в собственных ангарах',
  },
  {
    icon: <CreditCard className="w-7 h-7" />,
    title: 'Гибкое финансирование',
    description: 'Лизинговые программы и кредитование на выгодных условиях',
  },
  {
    icon: <HeadphonesIcon className="w-7 h-7" />,
    title: 'Поддержка 24/7',
    description: 'Круглосуточная техническая поддержка и консультации экспертов',
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: 'Обучение пилотов',
    description: 'Собственная летная школа с сертифицированными инструкторами',
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: 'Быстрая доставка',
    description: 'Доставка самолета в любую точку мира в кратчайшие сроки',
  },
];

export function Features({ title = 'Почему выбирают нас', subtitle = 'Мы предоставляем полный комплекс услуг для владельцев частных самолетов' }: FeaturesProps) {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-blue-100 transition-colors duration-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
