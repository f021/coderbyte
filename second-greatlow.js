function SecondGreatLow(arr) { 

  // code goes here  
  arr = arr.sort(function(a,b){
    return a > b;
  });
  return [arr[1],arr[arr.length-2]].join(" "); 
         
}