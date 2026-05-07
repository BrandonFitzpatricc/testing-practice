const analyzeArray = (arr) => {
  let average = 0;
  let min = arr[0];
  let max = arr[0];
  let length = arr.length;

  arr.forEach((number) => {
    average += number;
    if (min > number) min = number;
    if (max < number) max = number;
  });
  average /= length;

  return { average, min, max, length };
};

export { analyzeArray };
