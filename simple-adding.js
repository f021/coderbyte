function SimpleAdding(num) { 

  // code goes here  
  return num == 1 ? 1: num + SimpleAdding(num - 1); 
         
}