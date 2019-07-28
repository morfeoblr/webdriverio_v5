/* global $, browser,expect,assert */
const { Given, Then, When } = require('cucumber');
const HomePage = require('../pageObjects/homePage');

Given(/^I expect to be on \[Home] page$/, () => {
  expect(HomePage.waitPageReady()).is.equal(true);
});

Then(/^I expect to see the following tabs displayed in strict order$/, (table) => {
  const expected = [].concat(...table.rows());
  const elements = HomePage.allHeaderTabs;
  const actual = browser.getElementsText(elements);
  assert.sameMembers(expected, actual, `Exp:\n${expected.sort()} Act:\n${actual.sort()}\n`);
});

Then(/^I expect "(.*)" tab is( not)* selected$/, (expectedActiveTab, falseCase) => {
  const actualActiveTab = HomePage.activeHeaderTab.getText();
  if (!falseCase) {
    assert.equal(actualActiveTab, expectedActiveTab, `EXP:\n Active tab is ${expectedActiveTab}\nACT:\n Active tab is ${actualActiveTab}`);
  }
  assert.notEqual(actualActiveTab, expectedActiveTab, `EXP:\n Active tab is ${expectedActiveTab}\nACT:\n Active tab is ${actualActiveTab}`);
});

When(/^I click \[Culture Selection] button$/, () => {
  HomePage.btnCultureSelector.click();
});
