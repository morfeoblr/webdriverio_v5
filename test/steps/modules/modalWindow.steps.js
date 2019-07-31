/* global $, browser,expect,assert */
const { When, Then } = require('cucumber');
const ModalWindow = require('../../pageObjects/modules/modalWindow');
const { config } = require('../../../wdio.conf');

Then(/^I expect "(.*)" modal is( not)* displayed$/, (expModalWindowName, falseCase) => {
  if (!falseCase) {
    ModalWindow.modalWindow.waitForDisplayed();
    const actModalWindowName = ModalWindow.getModalWindowName();
    assert.equal(actModalWindowName, expModalWindowName);
  } else {
    const modalWindowIsNotDisplayed = $(ModalWindow.selectors.modalWindow).waitForDisplayed(config.waitforTimeout, true);
    assert.equal(modalWindowIsNotDisplayed, true, `Modal window is not closed in ${config.waitforTimeout}`);
  }
});

When(/^I click \[Save] button$/, () => {
  ModalWindow.buttonSave.click();
});
