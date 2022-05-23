
/*
//kilometer to miles

let x=prompt("enter the value in kilometer");
let miles;
miles=0.62*x;
console.log(miles);

//celciues to farenite tem

let celius=prompt("enter the value of cellicius tempreture");
let far;
far=(celius*9+160)/5;
console.log(far);

//given numer are checked in negative ,zero or +ve value
let num=prompt("Enter a number..");

if(num>0){
    alert("Given no is +ve value.");
      }else if(num<0){
          alert("Given no is Negative.");
      }else if(num==0){
          alert("Given no is zero");
      }
      
     //generete random number
     let randnum=Math.random();

       randnum= Math.ceil(randnum*10);

       console.log(randnum);
       
      //check number is even or odd

      let num=prompt("Enter a number..");

      if(num % 2==0){
          alert("Given no is Even Number");
      }else{
          alert("Given no is Odd Number..")
      }
      
     //largest among three number

     let n1=parseInt(prompt("enter 1st number"));
     let n2=parseInt(prompt("enter 2nd number"));
     let n3=parseInt(prompt("enter 3rd number"));
     let largnum;
     if((n1>= n2)&&(n1>= n3)){
         largnum=n1;

     }else if((n2>=n1)&&(n2>=n3)){
        largnum=n2;

    }else {
      largnum=n3;
    }
    console.log(largnum);

let x1 = parseInt(prompt("enter the first value"));
let x2 = parseInt(prompt("enter the second value"));


for (let i = x1; i <= x2; i++) {
    document.write(checkPrime(i)+"  ")
}

function checkPrime(x) {
    if (x < 2) {
        return "";
    } else if (x == 2) {
        return x;
    } else if (x > 2) {

        for (let k = 2; k < x; k++) {
            if (x % k == 0) {
                return "";
                break;
            }
        }

        return x;
    }
}
//salary and tax amount of emloyee
let sal = parseInt(prompt('Enter your salary'));
let tax = 0;

if (sal <= 250000) {
    alert("no pay tax");
} else if (sal >= 250000 && sal < 500000) {

    tax = sal * (10 / 100);
} else if (sal >= 500000 && sal < 1000000) {
    tax = sal * (15 / 100);
} else if (sal >= 1000000) {
    tax = sal * (20 / 100)
}
console.log("your salary:" + sal);

console.log("Tax amount of your salary :" + tax);

//find all odd number in array
let num=[3,4,7,8,11,2,7,8];
for(i=0;i<=num.length;i++){
    if(num[i]%2!==0){
        console.log(num[i]);
    }
}
//find all even number in array
let num=[3,4,7,8,11,2,7,8];
for(i=0;i<=num.length;i++){
    if(num[i]%2==0){
        console.log(num[i]);
    }
}

//all number print of array

let num=[3,4,7,8,11,2,7,8];
for(i=0;i<=num.length;i++){
    
        console.log(num[i]);
    
}
//suqare of all number in array
let num=[3,4,7,8,11,2,7,8];
for(i=0;i<=num.length;i++){
    
        console.log(num[i]*num[i]);
    
}

//rest parameter using in function(don't know how many argument use by user)
function sum(...args){
    let result=0;
    for(let i=0;i<args.length;i++){
        result+=args[i];
    }
    console.log(result);
    }
    sum(789,980,5678);
    sum(5,9,7);

//spread operator parameter using in aaray opening adding two aaray

    let arr1=[1,2,6,7,9];
let arr2=[5,7,9,7];
let arr3=[...arr1,...arr2];
console.log(arr3);

let arr1=[1,2,6,7,9,4,2];
let arr2=[5,7,9,7,9,6];
let arr3=[5,7,9,...arr2];
console.log(arr3);


let array1=["mohan","shyam","neelam"];
let array2=["raj","raju"];
let array3=[...array1,...array2];
console.log(array3);


let array1=["mohan","shyam","neelam"];
let array2=["raj","raju"];
let array3=["pankaj","Sony",...array2];
console.log(array3);


let array1=["mohan","shyam","neelam"];
let array2=["raj","raju"];
let array3=[...array1,"pankaj","Sony",...array2];
console.log(array3);
    
let array1=["mohan","shyam","neelam"];
let array2=["raj","raju"];
let array3=[...array1,...array2,"Azad","SUjata"];
console.log(array3);
*/
//for..of loop use in itreate each object one by   one

//let arr=[6,8,9,6,9,7,8,9];
for(let x of arr){
console.log(x);
}


let arr= "helloworld|";
for(let x of arr){
console.log(x);
}
let arr1=["ram","shyam","sita"];
let arr2=[2,89,09,78,90];
let x=7;
let y="78";
let z=x+y;
"this is new branch Xx"
