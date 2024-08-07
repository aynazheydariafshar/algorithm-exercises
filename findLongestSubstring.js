/** 
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring(*') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6]
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8|
findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)
**/

function findLongestSubstring(str) {
  let start = 0;
  let obj = {};
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char]) start = Math.max(obj[char], start);
    count = Math.max(count, i - start + 1);
    obj[char] = i + 1;
  }
  return count;
}

console.log(findLongestSubstring("thecatinthehat"));
