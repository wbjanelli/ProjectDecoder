const substitutionModule = (function () {
  const lookUp = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    let result = "";

    if (
      !alphabet ||
      typeof alphabet !== "string" ||
      alphabet.length !== 26 ||
      new Set(alphabet).size !== alphabet.length
    ) {
      return false;
    }

    input = input.toLowerCase();

    if (encode) {
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === " ") {
          result += " ";
        } else {
          const index = lookUp.indexOf(char);
          result += alphabet[index];
        }
      }
    } else {
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === " ") {
          result += " ";
        } else {
          const index = alphabet.indexOf(char);
          result += lookUp[index];
        }
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
