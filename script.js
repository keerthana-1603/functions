//1. Print odd numbers in an array 
//Anonymous:
let oddnum=function(arr){
    for(i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
        console.log(arr[i]);
}
}
oddnum([1,2,3,4,5]);

//IIFE :      
 (function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([1,2,3,4,5])

//2. Convert all the strings to title caps in a string array
//Anonymous:
let arr=function (str) {
                   
     for (var i = 0; i < str.length; i++) {
        caps = str[i].toUpperCase();
        console.log(caps);
    } 
        
}
arr(["keerthana", "abi" ,"viji",]);    

//IIFE;
(function (str) {
                   
    for (var i = 0; i < str.length; i++) {
        caps = str[i].toUpperCase();
        console.log(caps);
    } 
        
    })(["keerthana", "abi" ,"viji"]);


//3. Sum of all numbers in an array
//Anonymous:
let arr =function (str) {
    let sum=0;
    for (var i = 0; i < str.length; i++)
      sum+=str[i];
    console.log(sum);
    
  }
  arr([1,2,3,4]);

  //IIFE;
  (function (str) {
    let sum=0;
    for (var i = 0; i < str.length; i++)
      sum+=str[i];
    console.log(sum);
    
  })([1,2,3]);

//4. Return all the prime numbers in an array
//Anonymous:
var arr=[2,5,4,9,7,6,13,17,18];
var emptyarr=[];
let result=function (array){
    array.forEach((value)=>{
        if((value%2 !== 0)&&(value%3!==0)||(value==3)||(value==2)) 
        emptyarr.push(value);
    });
    console.log("prime num:",emptyarr);
};
result(arr); 

//IIFE
var arr=[2,5,4,9,7,6,13,17,18];
var emptyarr=[];
(function (array){
    array.forEach((value)=>{
        if((value%2 !== 0)&&(value%3!==0)||(value==3)||(value==2)) 
        emptyarr.push(value);
    });
    console.log("prime num:",emptyarr);
})
(arr); 

//5. Return all the palindromes in an array
//Anonymous:
let num=121
let result=function (array){
    let revarr=array.toString().split("").reverse().join("");
        if(revarr==num)
        console.log(`${num} is palindromes `);
        else
        console.log(`${num} is Not a palindromes `);
    };
    result(num);

    //IIFE:
    let num=121;
(function(array){
    let revarr=array.toString().split("").reverse().join("");
        if(revarr==num)
        console.log(`${num} is  a palindrome `);
        else
        console.log(`${num} is Not a palindrome `);
    })(num);

//6. Return median of two sorted arrays of the same size.
//Anonymous:
var array1=[1,4,5,7];
var array2=[5,8,9,13];
var median = function(arr1,arr2){
    var arr3=arr1.concat(arr2);
    arr3=arr3.sort((a,b) => a-b);
    var length=arr3.length;
    if(length%2===0){
        console.log("medain =",0.5*(arr3[length/2]+arr3[(length/2)-1]));
    }else{
        console.log("medain =",arr3[(length-1)/2]);
    }
};
median(array1,array2);

//IIFE:
var array1=[1,4,5,7];
var array2=[5,8,9,13];
(function(arr1,arr2){
    var arr3=arr1.concat(arr2);
    arr3=arr3.sort((a,b) => a-b);
    var length=arr3.length;
    if(length%2===0){
        console.log("medain =",0.5*(arr3[length/2]+arr3[(length/2)-1]));
    }else{
        console.log("medain =",arr3[(length-1)/2]);
    }
})
(array1,array2);

//7. Remove duplicates from an array
//Anonymous:
let array = [1,2,2,3,4,5,1,6];
let empty=[];
let result=function(arr){
    arr.forEach(val=>{
        if(!empty.includes(val))
        empty.push(val);
    });
    return empty;
}
result(array);
console.log(empty);

//IIFE:
let array = [1,2,2,3,4,5,1,6];
let empty=[];
(function(arr){
    arr.forEach(val=>{
        if(!empty.includes(val))
        empty.push(val);
    });
    return empty;
})(array);
console.log(empty);

//8. Rotate an array by k times
//Anonymous:
let roate=function(arr,num){
    let temp=0;
    let len=arr.length;
    num=num%len;
    for(i=0;i<num;i++){
        temp=arr.pop();
        arr.unshift(temp);
    }
    return(arr);
};
console.log(roate([1,2,3,4,5],4));

//IIFE:
(function(arr,num){
    let temp=0;
    let len=arr.length;
    num=num%len;
    for(i=0;i<num;i++){
        temp=arr.pop();
        arr.unshift(temp);
    }
    console.log(arr);
})([1,2,3,4,5],4);
   





    