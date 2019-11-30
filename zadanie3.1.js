function evenAndSum(min, max) {
let minNum = Math.min(min, max);
let maxNum = Math.max(min, max);
    
if(minNum%2 === 0) {
  for (let i = minNum; i <= maxNum; i+=2)
    {
      console.log(i);
    }
  }
else if (Math.abs(minNum%2) === 1) {
  for (let i = minNum + 1; i <= maxNum; i+=2)
    {  
      console.log(i);
    }
    }
  else {
      console.log("Podaj liczby całkowite.");
    }
    
let arr = [];
for (let i = minNum; i <= maxNum; i+=1)
{
  arr.push(i);
}

const sum = (beforeAdding, afterAdding) => beforeAdding + afterAdding;
return "Suma liczb: " + arr.reduce(sum);
};
//przykładowe sprawdzenie
console.log(evenAndSum(7,-3));
