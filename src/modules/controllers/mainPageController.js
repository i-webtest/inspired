import { renderHero } from '../render/renderHero';
import { renderNavigation } from '../render/renderNavigation';
import { renderProduct } from '../render/renderProduct';

export const mainPageController = (gender = 'women') => {
  renderNavigation(gender);
  renderHero(gender);
  renderProduct('Новинки', { gender });
};
