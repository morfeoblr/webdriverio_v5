/* global $, browser,expect,assert */
const { Given, Then, When } = require('cucumber');
const HomePage = require('../pageObjects/homePage');
const plainText = require('../helpers/plainText');

Then(/^I expect to be on \[Home] page$/, () => {
  expect(HomePage.waitPageReady()).is.equal(true);
});

Then(/^I expect to see the following tabs displayed in strict order$/, (table) => {
  const expTabs = [].concat(...table.rows());
  const elements = HomePage.allHeaderTabs;
  const actTabs = browser.getElementsText(elements);
  assert.sameOrderedMembers(expTabs, actTabs, `Exp:\n${expTabs} Act:\n${actTabs}\n`);
});

Then(/^I expect "(.*)" tab is( not)* selected$/, (expActiveTab, falseCase) => {
  HomePage.tabByName(expActiveTab).isDisplayed();
  const actActiveTab = plainText(HomePage.activeHeaderTab.getText());
  if (!falseCase) {
    assert.equal(actActiveTab, expActiveTab, `EXP:\n Active tab is ${expActiveTab}\nACT:\n Active tab is ${actActiveTab}`);
  } else {
    assert.notEqual(actActiveTab, expActiveTab, `EXP:\n Active tab is ${expActiveTab}\nACT:\n Active tab is ${actActiveTab}`);
  }
});
