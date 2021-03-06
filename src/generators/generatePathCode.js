const { generatePlaceholderCode } = require("./generatePlaceholderCode");

/**
 * generates code for path element
 * @param {*} path an instance of Path
 * @returns string ui code
 */
function generatePathCode(path) {
  return `\n{/* <Path /> {Path is not supported. It can be exported as Svg} */}\n${generatePlaceholderCode(
    path
  )}`;
}

module.exports = {
  generatePathCode
};
