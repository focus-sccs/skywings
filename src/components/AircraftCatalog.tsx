
import React from 'react';
import { Heart, Fuel, Users, Gauge, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Aircraft {
  id: string;
  name: string;
  manufacturer: string;
  price: string;
  image: string;
  speed: string;
  range: string;
  capacity: number;
  fuel: string;
  category: string;
}

interface AircraftCatalogProps {
  title?: string;
  subtitle?: string;
}

const aircraftData: Aircraft[] = [
  {
    id: '1',
    name: 'Cirrus SR22 G6',
    manufacturer: 'Cirrus Aircraft',
    price: '$649,000',
    image: 'https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=800',
    speed: '185 kts',
    range: '1,200 nm',
    capacity: 4,
    fuel: '15.5 gal/hr',
    category: 'Поршневые',
  },
  {
    id: '2',
    name: 'Cessna 172 Skyhawk',
    manufacturer: 'Cessna',
    price: '$432,000',
    image: 'https://images.pexels.com/photos/2127036/pexels-photo-2127036.jpeg?auto=compress&cs=tinysrgb&w=800',
    speed: '122 kts',
    range: '640 nm',
    capacity: 4,
    fuel: '8.5 gal/hr',
    category: 'Поршневые',
  },
  {
    id: '3',
    name: 'Pilatus PC-12 NG',
    manufacturer: 'Pilatus Aircraft',
    price: '$4,850,000',
    image: 'https://images.pexels.com/photos/1554732/pexels-photo-1554732.jpeg?auto=compress&cs=tinysrgb&w=800',
    speed: '286 kts',
    range: '1,803 nm',
    capacity: 9,
    fuel: '55 gal/hr',
    category: 'Турбовинтовые',
  },
  {
    id: '4',
    name: 'Diamond DA40 NG',
    manufacturer: 'Diamond Aircraft',
    price: '$528,000',
    image: 'https://images.pexels.com/photos/1554568/pexels-photo-1554568.jpeg?auto=compress&cs=tinysrgb&w=800',
    speed: '147 kts',
    range: '720 nm',
    capacity: 4,
    fuel: '6.1 gal/hr',
    category: 'Поршневые',
  },
  {
    id: '5',
    name: 'Cessna Citation M2',
    manufacturer: 'Cessna',
    price: '$5,250,000',
    image: 'https://images.pexels.com/photo-1554765-b25d-b25d-4c7d-9e4a-8b0b0b0b0b0b?auto=compress&cs=tinysrgb&w=800',
    speed: '404 kts',
    range: '1,550 nm',
    capacity: 7,
    fuel: '120 gal/hr',
    category: 'Реактивные',
  },
  {
    id: '6',
    name: 'Piper M350',
    manufacturer: 'Piper Aircraft',
    price: '$1,395,000',
    image: 'https://images.pexels.com/photos/1554604/pexels-photo-1554604.jpeg?auto=compress&cs=tinysrgb&w=800',
    speed: '213 kts',
    range: '1,370 nm',
    capacity: 6,
    fuel: '24 gal/hr',
    category: 'Поршневые',
  },
];

export function AircraftCatalog({ title = 'Каталог самолетов', subtitle = 'Выберите идеальный самолет из нашей коллекции премиальных летательных аппаратов' }: AircraftCatalogProps) {
  const [activeCategory, setActiveCategory] = React.useState('Все');
  const [favorites, setFavorites] = React.useState<string[]>([]);

  const categories = ['Все', 'Поршневые', 'Турбовинтовые', 'Реактивные'];

  const filteredAircraft = activeCategory === 'Все'
    ? aircraftData
    : aircraftData.filter((a) => a.category === activeCategory);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section id="catalog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Aircraft Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAircraft.map((aircraft, index) => (
            <motion.div
              key={aircraft.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={aircraft.image}
                  alt={aircraft.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                  {aircraft.category}
                </span>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(aircraft.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      favorites.includes(aircraft.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-2xl font-bold text-white">{aircraft.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-sm text-blue-600 font-medium">{aircraft.manufacturer}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">{aircraft.name}</h3>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Gauge className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">{aircraft.speed}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">{aircraft.range}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">{aircraft.capacity} мест</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Fuel className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">{aircraft.fuel}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full py-3 bg-gray-100 text-gray-900 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  Подробнее
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-colors duration-300">
            Показать все самолеты
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
