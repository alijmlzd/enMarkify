enMarkify
=========

Detect english words in paragraphs and push them to a `<span>`.

## Usage
includ `enmarkify.js` with zeptoJS or jQuery lib.
call enMarkify with `$.enMarkify();`.

## Options
* `wrapperHtmlClass`: html class that you used in your page to wrap your paragraphs. Default is `.paragraph`.
* `spanHtmlClass`: set html class that you want to giv to english words. Default is `en`.

`$.enMarkify({wrapperHtmlClass: '.paragraph', spanHtmlClass: 'en'})`

