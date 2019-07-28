/* global $, browser,expect,assert */
const { Then } = require('cucumber');
const ModalWindow = require('../../pageObjects/modules/modalWindow');
const { config } = require('../../../wdio.conf');

Then(/^I expect "(.*)" modal is( not)* displayed$/, (expectedModalWindowName, falseCase) => {
  if (!falseCase) {
    $(ModalWindow.selectors.modalWindow).waitForDisplayed();
    const actualModalWindowName = ModalWindow.getModalWindowName();
    assert.equal(actualModalWindowName, expectedModalWindowName);
  } else {
    const modalWindowIsNotDisplayed = $(ModalWindow.selectors.modalWindow).waitForDisplayed(config.waitforTimeout, true);
    assert.equal(modalWindowIsNotDisplayed, true, `Modal window is not closed in ${config.waitforTimeout}`);
  }
});
