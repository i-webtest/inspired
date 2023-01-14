import { renderHero } from '../render/renderHero';
import { renderNavigation } from '../render/renderNavigation';
import { renderProduct } from '../render/renderProduct';

export const mainPage = (gender = 'women') => {
  console.log('gender: ', gender);
  renderNavigation(gender);
  renderHero(gender);
  renderProduct();
};
