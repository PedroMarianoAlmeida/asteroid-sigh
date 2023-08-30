const getRandomValueFromArray = (array: string[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const generateGameLetter = () => {
  const vowel = ["a", "e", "i", "o", "u"];
  const possibleLetters = [...vowel];

  return getRandomValueFromArray(possibleLetters);
};
