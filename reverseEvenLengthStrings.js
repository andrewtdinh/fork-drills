function reverseEvenLengthStrings(str) {
  return str.split(',').map(function(n){
    return n.length % 2 ? n : n.split('').reverse().join('');
  });
}

//Tests:
var s ='cat,mule,horse,jquery';
var o = reverseEvenLengthStrings(s);
console.log(o);
