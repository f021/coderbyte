function LongestWord(sen) { 
  
  // code goes here  
  return sen.split(/[\W]/i).reduce(function(max,next){
  	return max.length >= next.length ? max: next;
  }); 
  
}