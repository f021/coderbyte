function LetterCountI(str) { 

  // code goes here  
  return str.split(' ').reduce(function(max, word){
  	var a = word.split('').reduce(function(count, char) {
      	var a = word.match(new RegExp(char,'gi')).length;
    	return a > count ? a : count;
    },0);
  return a > max[0] ? [a, word]: max; 
      },[1,-1])[1]; 
}