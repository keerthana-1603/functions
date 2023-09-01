//1. Print odd numbers in an array
let oddnum=(arr)=>{
    for(i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
        console.log(arr[i]);
}
}
oddnum([1,2,3,4,5]);

//2. Convert all the strings to title caps in a string array
let arr=(str)=>{
                   
    for (var i = 0; i < str.length; i++) {
       caps = str[i].toUpperCase();
       console.log(caps);
   } 
       
}
arr(["keerthi", "abi" ,"viji"]);   

//3. Sum of all numbers in an array
let arr =function (str) {
    let sum=0;
    for (var i = 0; i < str.length; i++)
      sum+=str[i];
    console.log(sum);
    
  }
  arr([1,2,3,4]);

  //4. Return all the prime numbers in an array
  var arr=[2,5,4,9,7,6,13,17,18];
  var emptyarr=[];
  let result=(array)=>{
      array.forEach((value)=>{
          if((value%2 !== 0)&&(value%3!==0)||(value==3)||(value==2)) 
          emptyarr.push(value);
      });
      console.log("prime num:",emptyarr);
  };
  result(arr); 

  //5. Return all the palindromes in an array
  let num=121
  let result=(array)=>{
      let revarr=array.toString().split("").reverse().join("");
          if(revarr==num)
          console.log(`${num} is palindromes `);
          else
          console.log(`${num} is Not a palindromes `);
      };
      result(num);