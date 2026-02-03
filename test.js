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
return sum;
}

function sumCalculattion(){
const inputFArray = document.getElementById("fArrayInput").value;
const inputMArray = document.getElementById("mArrayInput").value;
const arrayF = inputFArray.split(',').map(item => parseInt(item.trim(),10)).filter(Number.isFinite);
const arrayM = inputMArray.split(',').map(item => parseInt(item.trim(),10)).filter(Number.isFinite);

const result = func(arrayF,arrayM);
document.getElementById("sum").textContent = "The sum is: "+ result;
}
