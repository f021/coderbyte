function ExOh(str) { 

  // code goes here  
var x = str.match(/x/g);
var o = str.match(/o/g);

  return Boolean(x && o) && x.length === o.length; 
         
}