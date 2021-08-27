const capitalLetter = (string) => {
  if (string.length < 2) return null;

  const firstLetter = string[0].toUpperCase();
  const restWord = string.split("").slice(1, string.length).join("");

  return firstLetter + restWord;
};

export default capitalLetter;
