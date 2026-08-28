const { add } = require('./app');

function testAdd() {
  const result = add(2, 3);
  if (result !== 6) {
    throw new Error(`Test failed: expected 6, got ${result}`);
  }
  console.log('✓ testAdd passed');
}

testAdd();
console.log('All tests passed!');

