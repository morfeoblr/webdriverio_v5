/* global $ */
const Page = require('./../page');

const selectors = {
  buttonLogin: './/button[span[@class="login"]]',
  cultureSelection: './/button[div[contains(@class, "CultureSelector")]]',
  cultureLabels: './/button[div[contains(@class, "CultureSelectorButton__labels")]]',
};

class HeaderNavigation extends Page {
  get selectors() { return selectors; }
  get cultureSelection() { return $(selectors.cultureSelection); }
  get cultureLabels() { return $(selectors.cultureLabels); }
  get buttonLogin() { return $(selectors.buttonLogin); }

  waitPageReady() {
    const checkObjects = {
      expectedItems: [this.cultureSelection, this.buttonLogin],
      notExpectedItems: [super.loadingSpinner],
    };
    super.waitPageReady(checkObjects);
    return true;
  }
}

module.exports = new HeaderNavigation();
