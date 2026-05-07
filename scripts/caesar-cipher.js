const caesarCipher = (string, shift) => {
  if (shift > 26) shift = reduceShiftValue(shift);

  let encryptedString = "";
  for (const char of string) {
    const charCode = char.charCodeAt(0);

    if (!isLetter(charCode)) {
      encryptedString += String.fromCharCode(charCode);
      continue;
    }

    let encryptedCharCode = charCode + shift;
    if (!isLetter(encryptedCharCode)) {
      encryptedCharCode -= 26;
    }
    encryptedString += String.fromCharCode(encryptedCharCode);
  }

  return encryptedString;
};

function isLetter(charCode) {
  return (
    (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) ||
    (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0))
  );
}

function reduceShiftValue(shift) {
    while(shift > 26) {
        shift -= 26;
    }
    return shift;
}

export { caesarCipher };
