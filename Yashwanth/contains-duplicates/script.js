//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.//

// example 01
// we use in brute force
function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
}
console.log(containsDuplicate([1, 2, 3, 2])); // true
console.log(containsDuplicate([5, 6, 7])); // false

// example 2
// use for Time complexcity :(o)n and space complexcity :(o)n

var containduplicate = function (nums) {
  const a = new Set(nums);
  return a.size !== nums.length;
};
console.log(containduplicate([1, 2, 3, 4, 4, 3])); // true
console.log(containduplicate([3, 6, 7])); // false
