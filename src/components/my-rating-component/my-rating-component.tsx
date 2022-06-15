import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-rating-component',
  styleUrl: 'my-rating-component.css',
  shadow: true,
})
export class MyRatingComponent {
  @Prop() maxstars: number;
  @Prop() rating: number;
  @Prop() color: string;

  getRatings = () => {
    const stars = [];

    for (let i = 0; i < this.rating; i++) {
      stars.push(<span style={{ color: this.color }}>&#9055;</span>);
    }

    for (let i = this.rating; i < this.maxstars; i++) {
      stars.push(<span>&#9055;</span>);
    }

    return stars;
  }

  render() {
    return (
      <div>
        {this.getRatings()}
      </div>
    );
  }

}
