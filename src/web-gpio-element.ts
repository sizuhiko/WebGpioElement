import { LitElement, customElement, html, property } from 'lit-element';

@customElement('web-gpio')
export class WebGpioElement extends LitElement {
  @property({ type: Boolean, reflect: true }) disable;
  @property({ type: Object }) gpioAccess;

  connectedCallback() {
    super.connectedCallback();

    navigator.requestGPIOAccess().then((gpioAccess) => {
      this.gpioAccess = gpioAccess;
    }).catch((err) => {
      console.log('This will not CHIRIMEN.', err);
      this.disable = true;
    });
  }

  render() {
    return html `
      <style>
        :host {
          display: block;
        }
        .message {
          display: none;
        }
        :host([disable]) .message {
          display: block;
          font-size: 8px;
          margin: 2em 4em;
          color: orange;
        }
      </style>
      <div class="message">
        <slot name="no-web-gpio"></slot>
      </div>
      <slot id="sensors"></slot>
    `;
  }
}
