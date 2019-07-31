/* global browser, $ */
const selectors = {
  languageDropDown: './/select[@name = "locale"]',
  currencyDropDown: './/select[@name = "currency"]',
  optionByValue: (value) => `.//option[@value = "${value}"]`,
};

class DropDown {
  get selectors() { return selectors; }
  get languageDropDown() { return $(selectors.languageDropDown); }
  get currencyDropDown() { return $(selectors.currencyDropDown); }
  optionByValue(value) { return $(selectors.optionByValue(value)); }

  selectValueFromDropdown(dropdown, value) {
    dropdown.waitForDisplayed();
    dropdown.click();
    this.optionByValue(value).waitForDisplayed();
    this.optionByValue(value).click();
  }
}

module.exports = new DropDown();
