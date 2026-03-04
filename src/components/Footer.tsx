
import React from 'react';
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName?: string;
  tagline?: string;
  address?: string;
  phone?: string;
  email?: string;
}

export function Footer({
  companyName = "ОвощнойРай",
  tagline = "Свежие овощи с доставкой на дом",
  address = "г. Москва, ул. Садовая, д. 15",
  phone = "+7 (495) 123-45-67",
  email = "info@ovoshnoyrai.ru"
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-xl">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">{companyName}</span>
            </div>
            <p className="text-gray-400 mb-6">{tagline}</p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="bg-gray-800 hover:bg-green-600 p-3 rounded-xl transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-4">Каталог</h4>
            <ul className="space-y-3">
              {['Свежие овощи', 'Фрукты', 'Зелень', 'Ягоды', 'Корнеплоды', 'Сезонные'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-4">Информация</h4>
            <ul className="space-y-3">
              {['О компании', 'Доставка и оплата', 'Возврат товара', 'Акции и скидки', 'Блог', 'Контакты'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href={`tel:${phone}`} className="text-gray-400 hover:text-green-400 transition-colors">
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href={`mailto:${email}`} className="text-gray-400 hover:text-green-400 transition-colors">
                  {email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {companyName}. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-green-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-green-400 transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
