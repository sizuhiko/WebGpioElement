# \<web-gpio\>

CustomElement for WebGPIO on CHIRIMEN 

## Requirements

This element is able to use on only web application borded on [CHIRIMEN Open Hardware](https://chirimen.org/).

## Demo and Example

Please see [demo/index.html](demo/index.html).


## Install this element for your page

```sh
$ npm i https://github.com/sizuhiko/WebGpioElement.git
```

## Using this element for your page

### Import this element from ESModule

```js
import from '@chirimen-elements/web-gpio-element';
```

### Import this element from Browser

Requirements:

- [@webcomponents/webcomponentsjs](https://www.npmjs.com/package/@webcomponents/webcomponentsjs)
- [@chirimen-raspi/polyfill](https://www.npmjs.com/package/@chirimen-raspi/polyfill)

```html
<script src="../node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
<script src="../node_modules/@chirimen-raspi/polyfill/polyfill.js"></script>
<script type="module" src = "../node_modules/@chirimen-elements/web-gpio-elements.js"></script>
```

### Attach this element 

This can read from 5 port of GPIO, will notify if value changed.
This can write value that variable named of `value` to 19 port of GPIO.

```html
<web-gpio>
  <web-gpio-peripheral port="19" mode="out"></web-gpio-peripheral>
  <web-gpio-peripheral port="5" mode="in"></web-gpio-peripheral>
  <div slot="no-web-gpio">
    The device is not CHIRIMEN.
  </div>
</web-gpio>
```


```html
<web-gpio port="192" value="{{value}}" write></web-gpio>
```
