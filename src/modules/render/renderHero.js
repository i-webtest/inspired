import { createElement } from '../createElement';

export const renderHero = (gender) => {
  const hero = document.querySelector('.hero');

  if (!gender) {
    hero.style.display = 'none';
    return;
  }

  hero.style.display = '';

  hero.className = `hero hero__${gender}`;

  const container = createElement(
    'div',
    {
      className: 'container',
    },
    {
      parent: hero,
    },
  );

  const heroContent = createElement(
    'div',
    {
      className: 'hero__content',
    },
    {
      parent: container,
    },
  );

  const heroTitle = createElement(
    'h2',
    {
      className: 'hero__title',
      textContent: 'Новая коллекция Бюстгальтер-балконет',
    },
    {
      parent: heroContent,
    },
  );

  const heroLink = createElement(
    'a',
    {
      className: 'hero__link',
      textContent: 'Перейти',
      href: '',
    },
    {
      parent: heroContent,
    },
  );
};
