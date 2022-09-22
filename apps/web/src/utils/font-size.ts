
export const leastSquaresFit = (sizeMap: {[key: string | number]: number}) => {
  let resolutionTotal = 0;
  let valueTotal = 0;
  for (const key in sizeMap) {
    resolutionTotal += +key;
    valueTotal += +sizeMap[key];
  }
  const resolutionMean = resolutionTotal / sizeMap.length;
  const valueMean = valueTotal / sizeMap.length;

  let multipliedDiff = 0;
  let squaredDiff = 0;
  for (const key in sizeMap) {
    const resolutionDiff = +key - resolutionMean;
    const valueDiff = +sizeMap[key] - valueMean;
    multipliedDiff += (resolutionDiff * valueDiff);
    squaredDiff += (resolutionDiff * resolutionDiff);
  }

  const m = multipliedDiff / squaredDiff;
  const b = valueMean - (m * resolutionMean);
  return `${m * 100}vw + ${b}px`;
}
