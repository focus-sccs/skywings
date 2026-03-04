
import React from 'react';
import { ArrowRight, Fuel, Users, Gauge, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface PlaneCardProps {
  image: string;
  name: string;
  category: string;
  price: string;
  speed: string;
  range: string;
  capacity: number;
  delay: number;
}

function PlaneCard({ image, name, category, price, speed, range, capacity, delay }: PlaneCardProps) {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-sky-400/50 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-sky-500/80 backdrop-blur-sm text-xs font-medium text-white">
            {category}
          </span>
        </div>

        {/* Favorite Button */}
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-yellow-400 hover:bg-white/20 transition-all">
          <Star className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
          {name}
        </h3>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="flex items-center gap-2 text-sky-100/60 text-sm">
            <Gauge className="w-4 h-4 text-sky-400" />
            <span>{speed}</span>
          </div>
          <div className="flex items-center gap-2 text-sky-100/60 text-sm">
            <Fuel className="w-4 h-4 text-sky-400" />
            <span>{range}</span>
          </div>
          <div className="flex items-center gap-2 text-sky-100/60 text-sm">
            <Users className="w-4 h-4 text-sky-400" />
            <span>{capacity} чел.</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div>
            <span className="text-xs text-sky-100/50">Цена от</span>
            <p className="text-xl font-bold text-white">${price}</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-medium hover:from-sky-400 hover:to-cyan-400 transition-all group/btn">
            Подробнее
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

interface CatalogProps {
  title?: string;
  subtitle?: string;
}

export function Catalog({
  title = 'Наши самолеты',
  subtitle = 'Выберите идеальный самолет из нашей коллекции премиальных летательных аппаратов'
}: CatalogProps) {
  const planes = [
    {
      image: 'https://images.pexels.com/photos/1552212/pexels-photo-1552212.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      name: 'Cirrus SR22 G6',
      category: 'Поршневой',
      price: '650 000',
      speed: '340 км/ч',
      range: '2 100 км',
      capacity: 4
    },
    {
      image: 'https://images.pexels.com/photos/1554690/pexels-photo-1554690.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      name: 'Cessna 172 Skyhawk',
      category: 'Поршневой',
      price: '380 000',
      speed: '280 км/ч',
      range: '1 280 км',
      capacity: 4
    },
    {
      image: 'https://images.pexels.com/photos/162297/pexels-photo-162297.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      name: 'Piper M350',
      category: 'Турбовинтовой',
      price: '1 200 000',
      speed: '430 км/ч',
      range: '2 500 км',
      capacity: 6
    },
    {
      image: 'https://images.pexels.com/photos/1552212/pexels-photo-1552212.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      name: 'Diamond DA40 NG',
      category: 'Поршневой',
      price: '450 000',
      speed: '290 км/ч',
      range: '1 450 км',
      capacity: 4
    },
    {
      image: 'https://images.pexels.com/photos/1554690/pexels-photo-1554690.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      name: 'Cessna TTx',
      category: 'Поршневой',
      price: '720 000',
      speed: '380 км/ч',
      range: '2 000 км',
      capacity: 4
    },
    {
      image: 'https://images.pexels.com/photos/162297/pexels-photo-162297.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      name: 'Pilatus PC-12 NG',
      category: 'Турбовинтовой',
      price: '4 500 000',
      speed: '520 км/ч',
      range: '4 200 км',
      capacity: 9
    }
  ];

  return (
    <section id="catalog" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />

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

        {/* Planes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planes.map((plane, index) => (
            <PlaneCard
              key={index}
              image={plane.image}
              name={plane.name}
              category={plane.category}
              price={plane.price}
              speed={plane.speed}
              range={plane.range}
              capacity={plane.capacity}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-sky-400/50 transition-all">
            Смотреть все модели
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
