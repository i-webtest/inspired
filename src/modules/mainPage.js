import { renderHero } from './render/renderHero';
import { renderNavigation } from './render/renderNavigation';
import { renderProduct } from './render/renderProduct';

export const mainPage = (gender = 'women') => {
  renderNavigation(gender);
  renderHero(gender);
  renderProduct('Новинки', { gender });
};
