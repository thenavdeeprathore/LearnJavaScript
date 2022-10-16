// const args = process.argv;


// console.log(process.argv.length)
// console.log(process.argv[0])
// console.log(process.argv[1])
// console.log(process.argv[2])
// console.log(process.argv[3])
// console.log(process.argv[4])
// for (let j = 0; j < process.argv.length; j++) {
//     console.log(j + ' -> ' + (process.argv[j]));
// }

// const encryptedUri = await crypto.subtle.encrypt({
//     name: 'RSA-OAEP'
//   }, key.publicKey, stringToArrayBuffer(stringToEncrypt))

//   console.log('The encrypted string is', encryptedUri);

//   const msg = await  crypto.subtle.decrypt({
//     name: 'RSA-OAEP',
//   }, key.privateKey, encryptedUri);
//   console.log(`Derypted Uri is ${arrayBufferToString(msg)}`)


function Encrypt(value) 
{
  var result="";
  for(i=0;i<value.length;i++)
  {
    if(i<value.length-1)
    {
        result+=value.charCodeAt(i)+10;
        result+="-";
    }
    else
    {
        result+=value.charCodeAt(i)+10;
    }
  }
  return result;
}

console.log(Encrypt('Sc@lyr1'))

function Decrypt(value)
{
  var result="";
  var array = value.split("-");

  for(i=0;i<array.length;i++)
  {
    result+=String.fromCharCode(array[i]-10);
  }
  return result;
}

console.log(Decrypt('93-109-74-118-131-124-59'))