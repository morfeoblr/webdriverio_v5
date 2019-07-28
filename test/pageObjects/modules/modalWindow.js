/* global $ */
const plainText = require('../../helpers/plainText');

const selectors = {
  modalWindow: 'section[id*="modal"]',
  header: 'header[class*="modal__header"]',
};

class ModalWindow {
  get selectors() { return selectors; }
  get header() { return $(selectors.header); }

  getModalWindowName() {
    return plainText(this.header.getText());
  }
}

module.exports = new ModalWindow();
