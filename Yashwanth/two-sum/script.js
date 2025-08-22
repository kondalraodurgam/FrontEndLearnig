/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */
// solutions //

//example 1
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; (j = nums.length); j++) {
      if (nums[i] + nums[j] === target) {
        return i, j;
      }
    }
  }
}

// example 2 //

function twoSum(nums, target) {
  const numberToIndex = {};
  for (let i = 0; i < nums.length; i++) {
    numberToIndex[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const numberNeeded = target - nums[i];
    if ((numberToIndex[numberNeeded] !== i) | undefined) {
      return [i, numberToIndex[numberNeeded]];
    }
  }
}
// The array should not contain any duplicate elements.

// example 3

function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const component = target - nums[i];
    if (component in map) {
      return [map[component], i];
    }
    map[nums[i]] = i;
  }
}
// If nums[i] + x = target, then x is the component //

//example 04

function twoSum(nums, target) {
  const numMap = {};
  nums.forEach((num, index) => (numMap[num] = index));
  for (let i = 0; i < nums.length; i++) {
    const component = target - nums[i];
    if (numMap.hasOwnProperty(component) && numMap[component] !== i) {
      return [i, numMap[component]];
    }
  }
  return null;
}

// example 5 in reverse method

function twosum(nums, target) {
  for (let i = nums.length; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] + nums[j] === target) {
        rturn[(i, j)];
      }
    }
  }
}
