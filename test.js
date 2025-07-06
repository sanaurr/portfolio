// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const num = [1, 27, 3, 5, 5];
let sum = [];
let sum2 = sum[0];
for (var i = 0; i < num.length-2; i++) {
  var temp = 0;
  temp = temp + (num[i] + num[i + 1] + num[i + 2]);
  sum.push(temp);
}

for (var i = 0; i < sum.length; i++) {
  // if(sum2<sum[i+1]){
  //     sum2 = sum[i+1]
  // }
  console.log(sum[i]);
}
console.log(sum2);
