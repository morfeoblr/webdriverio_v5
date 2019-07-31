/* global $, browser,expect,assert */
const { Then } = require('cucumber');
const HeaderNavigation = require('../../pageObjects/modules/headerNavigation');
const getTextByline = require('../../helpers/getTextByLine');

Then(/^I expect \[Header Navigation] menu is displayed$/, () => {
  expect(HeaderNavigation.waitPageReady()).is.equal(true);
});

Then(/^I click \[Culture Selection] button$/, () => {
  HeaderNavigation.cultureSelection.click();
});

Then(/^I expect "(.*)" language, "(.*)" country and "(.*)" currency are selected at \[Header Navigation] menu$/,
  (expLanguage, expCountry, expCurrency) => {
    const cultureLabels = HeaderNavigation.cultureLabels.getText();
    const actLanguage = getTextByline(cultureLabels, 1);
    const actCountry = getTextByline(cultureLabels, 2);
    const actCurrency = getTextByline(cultureLabels, 3);
    assert.equal(actLanguage, expLanguage);
    assert.equal(actCountry, expCountry);
    assert.equal(actCurrency, expCurrency);
  });

Then(/^I expect "(.*)" \[Login] button is displayed$/, (expButtonName) => {
  const actButtonName = HeaderNavigation.buttonLogin.getText();
  assert.equal(actButtonName, expButtonName);
});
