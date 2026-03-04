
import type { Config } from '@puckeditor/core';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Features } from './components/Features';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const config: Config = {
  components: {
    Header: {
      fields: {
        logo: { type: 'text', label: 'Название бренда' },
        navItems: { type: 'text', label: 'Пункты меню (через запятую)' },
        ctaText: { type: 'text', label: 'Текст кнопки CTA' },
        bgColor: {
          type: 'select',
          label: 'Фон шапки',
          options: [
            { label: 'Белый', value: 'bg-white' },
            { label: 'Тёмный', value: 'bg-gray-900' },
            { label: 'Зелёный', value: 'bg-green-600' },
          ],
        },
      },
      render: Header,
    },
    Hero: {
      fields: {
        title: { type: 'text', label: 'Заголовок' },
        subtitle: { type: 'textarea', label: 'Подзаголовок' },
        buttonText: { type: 'text', label: 'Текст кнопки' },
        buttonColor: {
          type: 'select',
          label: 'Цвет кнопки',
          options: [
            { label: 'Зелёный', value: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' },
            { label: 'Синий', value: 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700' },
            { label: 'Оранжевый', value: 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700' },
          ],
        },
        backgroundImage: { type: 'text', label: 'URL фонового изображения' },
      },
      render: Hero,
    },
    Products: {
      fields: {
        title: { type: 'text', label: 'Заголовок секции' },
        subtitle: { type: 'textarea', label: 'Описание секции' },
        columns: {
          type: 'select',
          label: 'Колонки',
          options: [
            { label: '2 колонки', value: '2' },
            { label: '3 колонки', value: '3' },
            { label: '4 колонки', value: '4' },
          ],
        },
      },
      render: Products,
    },
    Features: {
      fields: {
        title: { type: 'text', label: 'Заголовок секции' },
        subtitle: { type: 'textarea', label: 'Описание секции' },
        columns: {
          type: 'select',
          label: 'Колонки',
          options: [
            { label: '2 колонки', value: '2' },
            { label: '3 колонки', value: '3' },
          ],
        },
      },
      render: Features,
    },
    About: {
      fields: {
        title: { type: 'text', label: 'Заголовок' },
        description: { type: 'textarea', label: 'Описание компании' },
        backgroundImage: { type: 'text', label: 'URL изображения' },
      },
      render: About,
    },
    Contact: {
      fields: {
        title: { type: 'text', label: 'Заголовок' },
        subtitle: { type: 'textarea', label: 'Подзаголовок' },
        address: { type: 'text', label: 'Адрес' },
        phone: { type: 'text', label: 'Телефон' },
        email: { type: 'text', label: 'Email' },
      },
      render: Contact,
    },
    Footer: {
      fields: {
        companyName: { type: 'text', label: 'Название компании' },
        tagline: { type: 'text', label: 'Слоган' },
        address: { type: 'text', label: 'Адрес' },
        phone: { type: 'text', label: 'Телефон' },
        email: { type: 'text', label: 'Email' },
      },
      render: Footer,
    },
  },
};
