import { LitElement, html, property, customElement } from 'lit-element';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

let WebGpioElement = class WebGpioElement extends LitElement {
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
};
__decorate([
    property({ type: Boolean, reflect: true })
], WebGpioElement.prototype, "disable", void 0);
__decorate([
    property({ type: Object })
], WebGpioElement.prototype, "gpioAccess", void 0);
WebGpioElement = __decorate([
    customElement('web-gpio')
], WebGpioElement);

let WebGpioPeripheral = class WebGpioPeripheral extends LitElement {
    constructor() {
        super(...arguments);
        this.interval = 100;
    }
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
        if (!this.port)
            return;
        navigator.requestGPIOAccess().then(async (gpioAccess) => {
            this.gpioAccess = gpioAccess;
            this._io = gpioAccess.ports.get(this.port);
            io.export(this.mode);
            if (this.mode === 'in') {
                this._setValue(await this._io.read());
                this._io.onchange = (val) => {
                    this._setValue(val);
                    this.dispatchEvent(new CustomEvent('value-changed', { detail: { value: val } }));
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
};
__decorate([
    property({ type: Object })
], WebGpioPeripheral.prototype, "gpioAccess", void 0);
__decorate([
    property({ type: Number })
], WebGpioPeripheral.prototype, "port", void 0);
__decorate([
    property({ type: String })
], WebGpioPeripheral.prototype, "mode", void 0);
__decorate([
    property({ type: Number })
], WebGpioPeripheral.prototype, "interval", void 0);
__decorate([
    property({ type: Boolean, hasChanged: (value) => console.log(undefined.value) })
], WebGpioPeripheral.prototype, "value", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], WebGpioPeripheral.prototype, "disable", void 0);
WebGpioPeripheral = __decorate([
    customElement('web-gpio-peripheral')
], WebGpioPeripheral);

export { WebGpioElement, WebGpioPeripheral };
//# sourceMappingURL=web-gpio-elements.js.map
