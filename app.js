function add(a, b) {
  return a + b;
}
console.log('App running (auto-triggered by webhook). 2 + 3 =', add(2, 3));
module.exports = { add };
