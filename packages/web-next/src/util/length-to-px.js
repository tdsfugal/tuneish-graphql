export default function lengthToPx(length) {
  return parseInt(length.match(/^\d*/)[0]);
}
