function ABCheck(str) { 

  // code goes here  
  return /(a.{3}b)|(b.{3}a)/g.test(str); 
         
}