import { LitElement, customElement, property } from 'lit-element';

@customElement('web-gpio-peripheral')
export class WebGpioPeripheral extends LitElement {
  @property({ type: Object }) gpioAccess;
  @property({ type: Number }) port;
  @property({ type: String }) mode;
  @property({ type: Number }) interval = 100;
  @property({ type: Boolean, hasChanged: (value: Boolean) => console.log(this.value) }) value;
  @property({ type: Boolean, reflect: true }) disable;

  connectedCallback() {
    super.connectedCallback();
    this._init();
  }

  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has('port')) {
      this._init();
    }
  }

  _init() {
    if (!this.port) return;

    navigator.requestGPIOAccess().then(async (gpioAccess) => {
      this.gpioAccess = gpioAccess;
      this._io = gpioAccess.ports.get(this.port);
      io.export(this.mode);
      if (this.mode === 'in') {
        this._setValue(await this._io.read());
        this._io.onchange = (val) => {
          this._setValue(val);
          this.dispatchEvent(new CustomEvent('value-changed', {detail: { value: val }}));
        };
      }
    }).catch((err) => {
      this.disable = true;
      console.warn('INIT ERROR', err);
    });
  }

  _setValue(value) {
    this.value = value === 1;
  }
}
