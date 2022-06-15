import { newSpecPage } from '@stencil/core/testing';
import { MyRatingComponent } from '../my-rating-component';

describe('my-rating-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyRatingComponent],
      html: `<my-rating-component></my-rating-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-rating-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-rating-component>
    `);
  });
});
