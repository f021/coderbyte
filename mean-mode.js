function MeanMode(arr) { 
  // code goes here  
  return (function (answer){
  	return answer.shift()/arr.length==answer.pop() ? 1: 0;
  })(arr.reduce(function (a,char) {
  	var count = arr.join('').match(new RegExp(char, 'gi')).length;
  	var tail = count > a[0] ? [count, char] : a.slice(1);
	return [a[0]+char].concat(tail) ;
  },[0,0,0]));     
}