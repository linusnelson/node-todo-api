const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id:10111
};

var token= jwt.sign(data,'123abc');

console.log(token);

var decoded = jwt.verify(token,'123abc');
console.log(decoded);

// var message = "My name is Linus Nelson";

// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash:${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)+ 'some salt').toString()
// }

// token.data.id=5;
// token.hash=SHA256(JSON.stringify(data)).toString()

// var resultHash = SHA256(JSON.stringify(token.data) + 'some salt').toString()

// if(resultHash===token.hash){
//     console.log('data not changed');
// }else{
//     console.log('Data changed');
// }

