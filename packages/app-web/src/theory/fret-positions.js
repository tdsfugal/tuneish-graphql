const MAX_FRETS = 30;

const FRET_POSITIONS = ((nFrets) => {
  const twelfthRootOfTwo = Math.pow(2, 1 / 12);
  const positions = [0];
  for (let fret = 1; fret < nFrets + 1; fret++) {
    positions.push(1 - 1 / Math.pow(twelfthRootOfTwo, fret));
  }
  return positions;
})(MAX_FRETS);

export default FRET_POSITIONS;
