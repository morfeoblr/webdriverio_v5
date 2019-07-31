/* global $$, $, browser */
const Page = require('./page');

const selectors = {
  logo: 'a[class*="Logo"]',
  homeContent: '#home-container',
  allHeaderTabs: 'li[class*="HeaderTab"]',
  activeHeaderTab: './/li[contains(@class, "HeaderTab")][./a[contains(@class, "active")]]',
  tabByName: (name) => `.//li[contains(@class, "HeaderTab")][.//span[text()="${name}"]]`,
};

class HomePage extends Page {
  get selectors() { return selectors; }
  get homeContent() { return $(selectors.homeContent); }
  get logo() { return $(selectors.logo); }
  get allHeaderTabs() { return $$(selectors.allHeaderTabs); }
  get activeHeaderTab() { return $(selectors.activeHeaderTab); }

  tabByName(name) { return $(selectors.tabByName(name)); }

  waitPageReady() {
    const checkObjects = {
      expectedItems: [this.logo, this.homeContent],
      notExpectedItems: [super.loadingSpinner],
    };
    super.waitPageReady(checkObjects);
    return true;
  }
}

module.exports = new HomePage();
