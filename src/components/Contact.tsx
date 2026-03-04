
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactProps {
  title?: string;
  subtitle?: string;
}

export function Contact({
  title = "Свяжитесь с нами",
  subtitle = "Остались вопросы? Мы всегда рады помочь!"
}: ContactProps) {
  const contacts = [
    {
      icon: Phone,
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      subtext: "Ежедневно с 9:00 до 21:00"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@freshveggies.ru",
      subtext: "Ответим в течение часа"
    },
    {
      icon: MapPin,
      title: "Адрес",
      value: "ул. Садовая, 15",
      subtext: "Москва, Россия"
    },
    {
      icon: Clock,
      title: "Режим работы",
      value: "9:00 - 21:00",
      subtext: "Без выходных"
    }
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/50" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-green-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-green-100/20 to-transparent rounded-full" />
        
        {/* Animated circles */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border-2 border-green-200/30 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 border-2 border-emerald-200/30 rounded-full"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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
            Контакты
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-100/50 border border-white/50 hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-green-200/50 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{contact.title}</h3>
                  <p className="text-green-600 font-medium mb-1">{contact.value}</p>
                  <p className="text-sm text-gray-500">{contact.subtext}</p>
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div 
              className="mt-8 rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-full h-64 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-green-400 mx-auto mb-2" />
                  <p className="text-green-600 font-medium">Карта загружается...</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Напишите нам</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-300 bg-white/50"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-300 bg-white/50"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-300 bg-white/50"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-300 resize-none bg-white/50"
                    placeholder="Ваше сообщение..."
                  />
                </div>
                
                <motion.button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold text-lg shadow-xl shadow-green-200/50 hover:shadow-2xl hover:shadow-green-300/50 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Отправить сообщение
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
