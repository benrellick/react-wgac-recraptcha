# react-wgac-recraptcha

> Just butts™

The future of butt-based challenge-response tests is here! It's sure to reduce spam (mmmmm... spam), secure your website or app, and make you look 10 years younger all at the same time!

CRAPtcha stands for *Completely Real and Awesome Public Turing test to tell Computers and Humans Apart*. ReCRAPtcha stands for the same thing except twice, we think.

ReCRAPtcha is in beta testing and probably will stay that way forever, but it's available for any early adopters who want to use it in their projects, or just want to mess with their robot friends.

It's super easy to set up, which will leave you plenty of time to get your TP shopping done over at [whogivesacrap.org](https://whogivesacrap.org). Cheers!

[![NPM](https://img.shields.io/npm/v/react-wgac-recraptcha.svg)](https://www.npmjs.com/package/react-wgac-recraptcha) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-wgac-recraptcha
```

## Usage

```jsx
import React, { Component } from 'react'

import ReCRAPTCHA from 'react-wgac-recraptcha'
import 'react-wgac-recraptcha/dist/index.css'

class Example extends Component {
  render() {
    return <ReCRAPTCHA thiccness="medium" />
  }
}
```

## Component Props

Properties used to customise the rendering:


| Name  | Type | Description
| ------------- |:-------------:| ------- |
| thiccness      | string     | The size of the CRAPtcha. Accepts CSS [`font-size` values](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#values).

## Example

This is how the CRAPtcha looks when rendered in your app. The beta version of this is not terribly interactive so umm.. you're gonna have to just trust the user and/or robot on this one.


```
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  |                                |
  |  To prove you're not a robot,  |
  |  select all images of a BUM    |
  |                                |
  |      | -\            /  /      |
  |      (_  |     |    |- ,       |
  |          |     |    |          |
  |          /          |          |
  |         /      ,     \         |
  |        |       )      )        |
  |        |      _/_   _ /        |
  |         \      |      |        |
  |          |     |      ,        |
  |                                |
  |                                |
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

## License

MIT
