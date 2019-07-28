/* global $$, $, browser */
const Page = require('./page');

const selectors = {
  btnCultureSelector: './/button[div[contains(@class, "CultureSelector")]]',
  culture: '#culture-selector-locale',
  logo: 'a[class*="Logo"]',
  buttonLogin: 'button>#authentication-link',
  homeContent: '#home-container',
  allHeaderTabs: 'li[class*="HeaderTab"]',
  activeHeaderTab: './/li[contains(@class, "HeaderTab")][./a[contains(@class, "active")]]',
  tabByName: (name) => `.//li[contains(@class, "HeaderTab")][.//span[text()="${name}"]]`,
};

class HomePage extends Page {
  get selectors() { return selectors; }
  get homeContent() { return $(selectors.homeContent); }
  get logo() { return $(selectors.logo); }
  get buttonLogin() { return $(selectors.buttonLogin); }
  get btnCultureSelector() { return $(selectors.btnCultureSelector); }
  get culture() { return $(selectors.culture); }
  get allHeaderTabs() { return $$(selectors.allHeaderTabs); }
  get activeHeaderTab() { return $(selectors.activeHeaderTab); }

  tabByName(name) { return $(selectors.tabByName(name)); }

  waitPageReady() {
    const checkObjects = {
      expectedItems: [this.logo, this.buttonLogin, this.homeContent],
      notExpectedItems: [super.loadingSpinner],
    };
    super.waitPageReady(checkObjects);
    return true;
  }
}

module.exports = new HomePage();
