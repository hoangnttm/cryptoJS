var CryptoJS = require("crypto-js");
const secretKey='asdasdasdassdasdsa'
//Mã hóa
// var ciphertext = CryptoJS.AES.encrypt('my message', secretKey);
// console.log(ciphertext.toString());
//
// //giải mã
// var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), secretKey);
// var plaintext = bytes.toString(CryptoJS.enc.Utf8);
// console.log('Giai ma xong: '+ plaintext);

function EncryptAES(text) {
  var ciphertext = CryptoJS.AES.encrypt(text,secretKey);
  return ciphertext.toString();
}
function DecryptAES(ciphertext) {
  var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
let en= EncryptAES('123421');
console.log(en);
console.log('Giai ma: '+ DecryptAES(en));
