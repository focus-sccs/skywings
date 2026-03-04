
import React from 'react';
import { Shield, Gauge, HeadphonesIcon, Award, Plane, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-sky-400/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mb-5 shadow-lg shadow-sky-500/30">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-sky-100/70 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
}

export function Features({
  title = 'Почему выбирают нас',
  subtitle = 'Мы предлагаем полный спектр услуг для владельцев легких самолетов — от подбора до технического обслуживания'
}: FeaturesProps) {
  const features = [
    {
      icon: <Shield className="w-7 h-7 text-white" />,
      title: 'Гарантия качества',
      description: 'Все самолеты проходят тщательную проверку и имеют сертификаты соответствия международным стандартам.'
    },
    {
      icon: <Gauge className="w-7 h-7 text-white" />,
      title: 'Высокая производительность',
      description: 'Современные модели с отличными летными характеристиками и экономичным расходом топлива.'
    },
    {
      icon: <HeadphonesIcon className="w-7 h-7 text-white" />,
      title: 'Поддержка 24/7',
      description: 'Наша команда экспертов всегда готова помочь с любыми вопросами по эксплуатации.'
    },
    {
      icon: <Award className="w-7 h-7 text-white" />,
      title: '15 лет опыта',
      description: 'За годы работы мы помогли сотням клиентов найти идеальный самолет для их потребностей.'
    },
    {
      icon: <Plane className="w-7 h-7 text-white" />,
      title: 'Широкий выбор',
      description: 'Более 50 моделей от ведущих мировых производителей: Cessna, Piper, Cirrus и других.'
    },
    {
      icon: <Clock className="w-7 h-7 text-white" />,
      title: 'Быстрая доставка',
      description: 'Организуем доставку самолета в любую точку мира в кратчайшие сроки.'
    }
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
      
      {/* Animated Background Orbs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-sky-100/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
