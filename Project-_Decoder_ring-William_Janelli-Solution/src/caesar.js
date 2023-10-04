const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();
    let result = "";

    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    if (encode === false) {
      shift *= -1;
    }

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (alphabet.includes(char)) {
        const indexOfLetter = alphabet.indexOf(char);
        let finalIndex = indexOfLetter + shift;

        if (finalIndex < 0) {
          finalIndex += 26;
        } else if (finalIndex > 25) {
          finalIndex -= 26;
        }

        result += alphabet[finalIndex];
      } else {
        result += char;
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
