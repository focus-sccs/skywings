
import React from 'react';
import { Plane, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

interface FooterProps {
  companyName?: string;
  tagline?: string;
}

export function Footer({ companyName = 'SkyWings', tagline = 'Ваше небо — ваши правила' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    catalog: [
      { label: 'Поршневые самолеты', href: '#' },
      { label: 'Турбовинтовые', href: '#' },
      { label: 'Реактивные', href: '#' },
      { label: 'Вертолеты', href: '#' },
    ],
    services: [
      { label: 'Техобслуживание', href: '#' },
      { label: 'Обучение пилотов', href: '#' },
      { label: 'Лизинг', href: '#' },
      { label: 'Страхование', href: '#' },
    ],
    company: [
      { label: 'О нас', href: '#about' },
      { label: 'Команда', href: '#' },
      { label: 'Карьера', href: '#' },
      { label: 'Контакты', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">{companyName}</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">{tagline}. Продажа и обслуживание легких самолетов премиум-класса.</p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Catalog Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Каталог</h4>
            <ul className="space-y-3">
              {footerLinks.catalog.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Услуги</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} {companyName}. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
