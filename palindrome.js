function Palindrome(str) { 

  // code goes here  
  str = str.replace(/\s/g,"");

      return str.split("").reverse().join("") === str; 
         
}