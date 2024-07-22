export default function appendToEachArrayValue(array, appendString) {
  const arrayend = [];
  for (const idx of array) {
    arrayend.push(`${appendString}${idx}`);
  }

  return arrayend;
}
