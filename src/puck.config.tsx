
import type { Config } from '@puckeditor/core';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AircraftCatalog } from './components/AircraftCatalog';
import { Features } from './components/Features';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const config: Config = {
  components: {
    Header: {
      fields: {
        logo: { type: 'text', label: 'Название компании / Логотип' },
        phone: { type: 'text', label: 'Телефон' },
        ctaText: { type: 'text', label: 'Текст кнопки CTA' },
      },
      render: Header,
    },
    Hero: {
      fields: {
        title: { type: 'text', label: 'Заголовок' },
        subtitle: { type: 'textarea', label: 'Подзаголовок' },
        buttonText: { type: 'text', label: 'Текст основной кнопки' },
        secondaryButtonText: { type: 'text', label: 'Текст вторичной кнопки' },
        backgroundImage: { type: 'text', label: 'URL фонового изображения' },
      },
      render: Hero,
    },
    AircraftCatalog: {
      fields: {
        title: { type: 'text', label: 'Заголовок секции' },
        subtitle: { type: 'textarea', label: 'Подзаголовок секции' },
      },
      render: AircraftCatalog,
    },
    Features: {
      fields: {
        title: { type: 'text', label: 'Заголовок секции' },
        subtitle: { type: 'textarea', label: 'Подзаголовок секции' },
      },
      render: Features,
    },
    About: {
      fields: {
        title: { type: 'text', label: 'Заголовок' },
        subtitle: { type: 'text', label: 'Подзаголовок' },
        description: { type: 'textarea', label: 'Описание компании' },
        image: { type: 'text', label: 'URL изображения' },
      },
      render: About,
    },
    Contact: {
      fields: {
        title: { type: 'text', label: 'Заголовок секции' },
        subtitle: { type: 'textarea', label: 'Подзаголовок секции' },
      },
      render: Contact,
    },
    Footer: {
      fields: {
        companyName: { type: 'text', label: 'Название компании' },
        tagline: { type: 'text', label: 'Слоган компании' },
      },
      render: Footer,
    },
  },
};
