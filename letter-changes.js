function LetterChanges(str) { 
  return str.replace(/[a-z]/gi, function(a){
    var b = String.fromCharCode(a.charCodeAt(0) + 1);
    if (/[aeiou]/.test(b))
      b = b.toUpperCase();
    return /[z]/i.test(a) ? 'A' : b;
  });
}