/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var k = 0;
    for(i = 0; i < nums.length; i++) {
        if(nums[i] === val ) {
            k++;
        }
    }
    return nums.length-k;
};



console.log(removeElement([0,1,2,2,3,0,4,2], 2)) //-> 2를 뺀 배열의 길이를 return 해야함