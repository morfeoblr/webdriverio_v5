/* global $, browser */
const { config } = require('../../wdio.conf');

class Page {
  constructor() {
    this.title = 'My Page';
  }

  get loadingSpinner() { return $('[class*="loading"]').value; }

  open(path) {
    browser.url(`${path}`);
  }

  getElementsArray(elements) {
    let elementsArray = [];
    elements.forEach((e) => {
      if (Array.isArray(e)) {
        elementsArray = elementsArray.concat(e);
      } else {
        elementsArray.push(e);
      }
    });
    return elementsArray;
  }

  waitPageReady(checkObjects) {
    function checkIsDisplayed(element) {
      element.waitForDisplayed();
    }

    function checkIsNotDisplayed(element) {
      element.waitForDisplayed(config.waitforTimeout, true);
    }

    if (checkObjects.expectedItems[0]) {
      const expectedElements = this.getElementsArray(checkObjects.expectedItems);
      expectedElements.forEach(checkIsDisplayed);
    }

    if (checkObjects.notExpectedItems[0]) {
      const notExpectedElements = this.getElementsArray(checkObjects.notExpectedItems);
      notExpectedElements.forEach(checkIsNotDisplayed);
    }
  }
}
module.exports = Page;
