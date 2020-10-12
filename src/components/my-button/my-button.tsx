import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() name: string = 'BUTTON';

  render() {
    return <button class="button button1">{this.name}</button>;
  }
}
