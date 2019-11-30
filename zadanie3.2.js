function onlyOdd(str = "koparka"){
let arrOdd = [];
for (let i = 1; i <= str.length; i += 2) {
  arrOdd.push(str[i]);
}
  return arrOdd.join("")
}
//sprawdzenie
console.log(onlyOdd("wisłostrada"));