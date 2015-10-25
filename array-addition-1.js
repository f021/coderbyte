function ArrayAdditionI(arr) { 

  // code goes here  
	var max = arr.sort(function(a,b){return a > b; }).pop();

	for (var bitMask = 1; bitMask < Math.pow(2, arr.length); bitMask++){
		if (arr.reduce(function(sum, a, index){
          return bitMask & Math.pow(2, index) ? sum + a: sum;
		},0) === max)
          return true;
    }
	return false;
}