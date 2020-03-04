module.exports = function reverse (n) {
    let a = n * (-1);
    let result = n.toString().split('').reverse().join('');
    if(n<0) {
        return a.toString().split('').reverse().join('');
    }
  return result;
}
