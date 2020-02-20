
exports.min = function min (array) {

  return (array === undefined || array.length == 0) ? 0 :
  array.sort((a, b) => a - b )[0];

}

exports.max = function max (array) {

  return (array === undefined || array.length == 0) ? 0 : 
  array.sort((a, b) => a - b ).reverse()[0];

}

exports.avg = function avg (array) {

  return (array === undefined || array.length == 0) ? 0 : 
  array.reduce((sum, current) => sum + current) / array.length

}
