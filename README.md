# \<web-gpio\>

CustomElement for WebGPIO on CHIRIMEN 

## Requirements

This element is able to use on only web application borded on [CHIRIMEN Open Hardware](https://chirimen.org/).

## Demo and Example

[Polymer CHIRIMEN](https://github.com/sizuhiko/polymerchirimen) is example application for using this element.

## Install this element for your page

```sh
$ bower install https://github.com/sizuhiko/WebGpioElement.git
```

## Using this element for your page

### Import this element

```html
<link rel="import" href="/bower_components/web-gpio/web-gpio.html">
```

### Attach this element 

It can read from 198 port of GPIO, stored to variable named of `value`.
It will notify if value changed.

```html
<web-gpio port="198" value="{{value}}" read></web-gpio>
```

It can write value that variable named of `value` to 192 port of GPIO.

```html
<web-gpio port="192" value="{{value}}" write></web-gpio>
```
