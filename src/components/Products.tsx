
import React from 'react';
import { Star, Plus, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductsProps {
  title?: string;
  subtitle?: string;
  columns?: string;
}

const products = [
  {
    id: 1,
    name: "Помидоры Черри",
    price: 280,
    oldPrice: 350,
    image: "https://images.pexels.com/photos/53588/tomatoes-vegetables-food-red-53588.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    badge: "Хит продаж",
    badgeColor: "bg-red-500",
    organic: true
  },
  {
    id: 2,
    name: "Огурцы свежие",
    price: 180,
    oldPrice: null,
    image: "https://images.pexels.com/photos/5218011/pexels-photo-5218011.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    badge: null,
    badgeColor: "",
    organic: true
  },
  {
    id: 3,
    name: "Морковь молодая",
    price: 120,
    oldPrice: 150,
    image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    badge: "Скидка",
    badgeColor: "bg-orange-500",
    organic: false
  },
  {
    id: 4,
    name: "Картофель молодой",
    price: 90,
    oldPrice: null,
    image: "https://images.pexels.com/photos/144248/potatoes-vegetables-field-144248.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    badge: null,
    badgeColor: "",
    organic: false
  },
  {
    id: 5,
    name: "Болгарский перец",
    price: 220,
    oldPrice: 280,
    image: "https://images.pexels.com/photos/736367/pexels-photo-736367.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    badge: "Сезон",
    badgeColor: "bg-green-500",
    organic: true
  },
  {
    id: 6,
    name: "Капуста белокочанная",
    price: 85,
    oldPrice: null,
    image: "https://images.pexels.com/photos/54256/cabbage-vegetables-healthy-food-54256.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.5,
    badge: null,
    badgeColor: "",
    organic: false
  },
  {
    id: 7,
    name: "Свёкла молодая",
    price: 110,
    oldPrice: null,
    image: "https://images.pexels.com/photos/2693202/pexels-photo-2693202.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    badge: null,
    badgeColor: "",
    organic: true
  },
  {
    id: 8,
    name: "Кабачки",
    price: 150,
    oldPrice: 190,
    image: "https://images.pexels.com/photos/736390/pexels-photo-736390.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    badge: "Новинка",
    badgeColor: "bg-purple-500",
    organic: false
  }
];

export function Products({
  title = "Популярные товары",
  subtitle = "Самые свежие овощи от проверенных фермеров. Мы тщательно отбираем каждый продукт.",
  columns = "4"
}: ProductsProps) {
  const cols = parseInt(columns) || 4;

  return (
    <section id="каталог" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            Наш ассортимент
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols} gap-6`}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {product.badge}
                  </span>
                )}
                {product.organic && (
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                    <Leaf className="w-3 h-3" />
                    Эко
                  </span>
                )}
                <motion.button
                  className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus className="w-5 h-5 text-green-600" />
                </motion.button>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-green-600">{product.price}₽</span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">{product.oldPrice}₽</span>
                  )}
                  <span className="text-gray-400 text-sm">/ кг</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-green-500/30 hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Смотреть весь каталог
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
