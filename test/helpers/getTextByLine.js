/**
 * Return text by first enter symbol
 * @param  {String}   text Input text
 * @param  {String}   line Number of required line
  */

module.exports = (text, line) => {
  return text.split('\n')[line - 1]
    .trim();
};
