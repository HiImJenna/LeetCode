/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var k = 0;
    let array1 = [];
    for(i = 0; i < nums.length; i++) {
        if(nums[i] === val ) {
            nums.splice(i, 1);
            i--;
        }
    }

    console.log('nums : ' + nums);
    return nums.length;
};



console.log(removeElement([0,1,2,2,3,0,4,2], 2)) //-> 2를 뺀 배열의 길이와 배열을 return 해야함