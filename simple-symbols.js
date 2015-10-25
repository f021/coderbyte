function SimpleSymbols(str) { 

  // code goes here  
  return /\+[a-z]\+=+/gi.test(str); 
         
}