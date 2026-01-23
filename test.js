function func(f,m){
let sum = 0;
 for(let i=0; i<m.length; i++){
  for(let j = 0; j <f.length; j++){
   if(m[i] % f[j] === 0){
    sum += m[i];
    break;
   }
  }
 }
alert("The sum is " + sum);
return sum;
}

let f = [3,5];
let m = [2,3,4,5,6,7,8,9];
console.log(func(f,m));
