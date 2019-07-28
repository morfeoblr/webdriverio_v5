const { Given } = require('cucumber');
const Page = require('../pageObjects/page');

Given(/^I open the url "(.*)"$/, (url) => {
  Page.prototype.open(url);
});
