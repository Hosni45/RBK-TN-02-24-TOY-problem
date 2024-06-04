/**
 *  Given an arbitrary input string, return the first nonrepeated character in
 *  the string. For example:
 *  firstNonRepeatedCharacter('ABA'); // => 'B'
 *  firstNonRepeatedCharacter('AACBDB'); // => 'C'
 *  Should return null or empty string of there is no repeated characters
 * 
 * @function firstNonRepeatedCharacter
 * @param {String} string 
 * @returns {String}
 */
  const firstNonRepeatedCharacter = function (string) {
    let counter = {}
    for (let i of string) {
      counter[i] = counter[i] || 0;
      counter[i]++;
      }
      for (let i of string) {
        if (counter[i] === 1) {
          return i;
          }}
          return '';
  }

