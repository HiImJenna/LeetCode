/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let length = Math.floor(nums.length / 2) + 1;
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1;
        if(map[nums[i]] === length || map[nums[i]] > length) {
            return nums[i];
        }
    }

};

console.log(majorityElement([3,2,3]));

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
