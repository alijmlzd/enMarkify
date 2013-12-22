enMarkify
=========

Detect english words in paragraphs and push them to a `<span>`.

See the demo: http://codepen.io/aliha/pen/aBLlh

## Usage
include `enmarkify.js` with zeptoJS or jQuery lib.
call enMarkify with `$.enMarkify();`.

## Options
* `wrapperHtmlClass`: html class that you used in your page to wrap your paragraphs. Default is `.paragraph`.
* `spanHtmlClass`: set html class that you want to give to english words. Default is `en`.
* `elementTag`: set html element tag that you want. Default is `span`.

`$.enMarkify({wrapperHtmlClass: '.paragraph', spanHtmlClass: 'en', elementTag: 'span'})`

