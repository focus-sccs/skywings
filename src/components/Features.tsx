
import React from 'react';
import { Leaf, Award, Users, Truck, RefreshCw, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturesProps {
  title?: string;
  subtitle?: string;
}

export function Features({
  title = "Почему выбирают нас",
  subtitle = "Мы работаем напрямую с фермерами, чтобы вы получали самые свежие и качественные продукты"
}: FeaturesProps) {
  const features = [
    {
      icon: Leaf,
      title: "100% Органика",
      description: "Все овощи выращены без использования пестицидов и химических удобрений"
    },
    {
      icon: Award,
      title: "Высшее качество",
      description: "Строгий контроль качества на каждом этапе от сбора до доставки"
    },
    {
      icon: Users,
      title: "Местные фермеры",
      description: "Поддерживаем местных производителей и развиваем экосельское хозяйство"
    },
    {
      icon: Truck,
      title: "Быстрая доставка",
      description: "Доставляем заказы в день оформления в удобное для вас время"
    },
    {
      icon: RefreshCw,
      title: "Возврат товара",
      description: "Если товар не устроит — вернём деньги без лишних вопросов"
    },
    {
      icon: Heart,
      title: "Забота о вас",
      description: "Персональные рекомендации и подборки рецептов для наших клиентов"
    }
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Gradient background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" />
      
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-green-100/50 to-transparent rounded-full" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23166534' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Наши преимущества
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-green-100/50 border border-white/50 hover:shadow-xl hover:shadow-green-200/50 transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Gradient accent */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-200/50 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
