function VowelCount(str) { 

  // code goes here  
  var vowel = /[aeiou]/g;
  return vowel.test(str) && str.match(vowel).length || 0; 
         
}