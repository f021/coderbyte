function ArithGeo(arr) { 
  // code goes here
  	var sum = arr[1]-arr[0];
	var produc = arr[1]/arr[0];
	var answer ={a:true, g:true};

  for (var i=1; i<arr.length-1; i++){
  	if (arr[i+1] - arr[i] !== sum) answer.a = false;
  	if (arr[i+1]/arr[i] !== produc) answer.g = false;
  }
  	return answer.a && "Arithmetic" || answer.g && "Geometric" || -1;
         
}