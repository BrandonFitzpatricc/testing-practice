const capitalize = (string) => {
  const firstChar = string.charAt(0);
  return firstChar.match(/[a-z]/i) ? string.charAt(0).toUpperCase() + string.substr(1) : `${firstChar} cannot be capitalized`;
};

export { capitalize };
