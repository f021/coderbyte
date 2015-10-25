function LetterCapitalize(str) { 

  // code goes here  
  return str.split(" ").map(function(a){
    return a[0].toUpperCase() + a.slice(1) }).join(" "); 
         
}