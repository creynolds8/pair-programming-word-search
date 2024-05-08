const transpose = function(matrix) {
  let newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newArray[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      newArray[i][j] = matrix[j][i];
    }
  }
  return newArray;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return undefined;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const newLetters = transpose(letters);
  const verticalJoin = newLetters.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  const horizontalJoinReverse = letters.map(ls => ls.reverse().join(''));
  for (const l of horizontalJoinReverse) {
    if (l.includes(word)) return true;
  }
  const verticalJoinReverse = newLetters.map(ls => ls.reverse().join(''));
  for (const l of verticalJoinReverse) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;