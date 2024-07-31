export default function cleanSet(set, startString) {
  const strings = [];
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((str) => {
    if (typeof str === 'string' && str.startsWith(startString)) {
      strings.push(str.slice(startString.length));
    }
  });
  return strings.join('-');
}
