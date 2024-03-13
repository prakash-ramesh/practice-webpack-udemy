import multiply from './functions/mul_es6';

const {add: addNum, sub} = require('./functions');

const out1 = addNum(3,2);
const out2 = sub(8,2);

console.log(out1, out2);

const out3 = multiply(8,2);

console.log(out3);

// npx webpack --config webpack.config.js --mode development
