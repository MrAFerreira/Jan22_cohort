const bcrypt = require('bcryptjs');
const saltRounds = 10;

const plainPassword1 = 'HelloWorld';
const plainPassword2 = 'helloworld';

const salt = bcrypt.genSaltSync(saltRounds);

console.log(salt);

const hash1 = bcrypt.hashSync(plainPassword1, salt);
const hash2 = bcrypt.hashSync(plainPassword2, salt);

/* console.log('password 1', hash1);
console.log('password 2', hash2); */

const verifyPass1 = bcrypt.compareSync(plainPassword1, hash1);

console.log(verifyPass1);
