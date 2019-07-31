/* global $, browser,expect,assert */
const { Then } = require('cucumber');
const DropDown = require('../../pageObjects/controls/dropdown');

Then(/^I select "(.*)" value from \[Language] dropdown$/, (value) => {
  DropDown.selectValueFromDropdown(DropDown.languageDropDown, value);
});

Then(/^I select "(.*)" value from \[Currency] dropdown$/, (value) => {
  DropDown.selectValueFromDropdown(DropDown.currencyDropDown, value);
});
