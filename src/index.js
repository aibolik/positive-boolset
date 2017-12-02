module.exports = function getPositiveKeysOfBoolset(boolset) {
  var result = boolset.filter(function(item, index) {
    if (index % 2 === 1) return false
    return boolset[index + 1] === true
  });
  return result;
}
