/**
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)

Sample Input:
sameFrequency (182, 281) // true 
sameFrequency (34,14) // false 
sameFrequency (3589578, 5879385) // true 
sameFrequency (22,222) // false
**/

function sameFrequency(num1, num2) {
  let arrNum1 = `${num1}`;
  let arrNum2 = `${num2}`;
  let objNum1 = {};
  let objNum2 = {};
  let count = 0;

  if (arrNum1.length !== arrNum2.length) return false;

  for (let digit of arrNum1) {
    if (objNum1[digit]) objNum1[digit] += 1;
    else objNum1[digit] = 1;
  }
  for (let digit of arrNum2) {
    if (objNum2[digit]) objNum2[digit] += 1;
    else objNum2[digit] = 1;
  }
  for (let i = 0; i < arrNum1.length; i++) {
    if (objNum1[arrNum1[i]] === objNum2[arrNum1[i]]) count++;
  }
  return count === arrNum1.length;
}

console.log(sameFrequency(3589578, 5879385));
