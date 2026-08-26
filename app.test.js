const { add } = require('./app');

function testAdd() {
  const result = add(2, 3);
  if (result !== 5) {
    throw new Error(`Test failed: expected 5, got ${result}`);
  }
  console.log('✓ testAdd passed');
}

testAdd();
console.log('All tests passed!');

