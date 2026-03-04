
import React from 'react';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductsProps {
  title?: string;
  subtitle?: string;
}

export function Products({
  title = "Наши продукты",
  subtitle = "Свежие овощи от проверенных фермеров"
}: ProductsProps) {
  const products = [
    {
      name: "Помидоры Черри",
      price: 280,
      oldPrice: 350,
      image: "https://images.pexels.com/photos/53588/tomatoes-vegetables-food-fruits-53588.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      reviews: 124,
      badge: "Хит продаж",
      badgeColor: "bg-red-500"
    },
    {
      name: "Огурцы свежие",
      price: 180,
      oldPrice: null,
      image: "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      reviews: 89,
      badge: "Новинка",
      badgeColor: "bg-green-500"
    },
    {
      name: "Морковь молодая",
      price: 120,
      oldPrice: 150,
      image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
      reviews: 67,
      badge: null,
      badgeColor: ""
    },
    {
      name: "Капуста белокочанная",
      price: 90,
      oldPrice: null,
      image: "https://images.pexels.com/photos/533336/pexels-photo-533336.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.6,
      reviews: 45,
      badge: null,
      badgeColor: ""
    },
    {
      name: "Болгарский перец",
      price: 220,
      oldPrice: 280,
      image: "https://images.pexels.com/photos/736367/pexels-photo-736367.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      reviews: 156,
      badge: "Скидка 20%",
      badgeColor: "bg-orange-500"
    },
    {
      name: "Кабачки молодые",
      price: 150,
      oldPrice: null,
      image: "https://images.pexels.com/photos/736367/pexels-photo-736367.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.5,
      reviews: 34,
      badge: null,
      badgeColor: ""
    }
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/50 to-white" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-green-100/30 to-transparent rounded-full" />
        
        {/* Floating vegetables */}
        <motion.div 
          className="absolute top-10 right-20 text-6xl opacity-10"
          animate={{ rotate: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          🥒
        </motion.div>
        <motion.div 
          className="absolute bottom-10 left-20 text-5xl opacity-10"
          animate={{ rotate: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          🥕
        </motion.div>
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
            Каталог продукции
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badge */}
                {product.badge && (
                  <span className={`absolute top-4 left-4 z-20 px-3 py-1 ${product.badgeColor} text-white text-sm font-medium rounded-full shadow-lg`}>
                    {product.badge}
                  </span>
                )}
                
                {/* Quick actions */}
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <motion.button 
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye className="w-5 h-5 text-gray-600" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-400">({product.reviews} отзывов)</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-green-600">{product.price}₽</span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">{product.oldPrice}₽</span>
                    )}
                  </div>
                  <motion.button 
                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-200/50 hover:shadow-xl hover:shadow-green-300/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-green-200/50 hover:shadow-2xl hover:shadow-green-300/50 transition-all duration-300"
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
