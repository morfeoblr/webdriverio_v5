/* global $ */
const plainText = require('../../helpers/plainText');

const selectors = {
  modalWindow: 'section[id*="modal"]',
  header: 'header[class*="modal__header"]',
  buttonSave: './/button[contains(@id, "save")]',
};

class ModalWindow {
  get selectors() { return selectors; }
  get modalWindow() { return $(selectors.modalWindow); }
  get header() { return $(selectors.header); }
  get buttonSave() { return $(selectors.buttonSave); }

  getModalWindowName() {
    return plainText(this.header.getText());
  }
}

module.exports = new ModalWindow();
