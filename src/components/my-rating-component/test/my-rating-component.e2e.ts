import { newE2EPage } from '@stencil/core/testing';

describe('my-rating-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-rating-component></my-rating-component>');

    const element = await page.find('my-rating-component');
    expect(element).toHaveClass('hydrated');
  });
});
