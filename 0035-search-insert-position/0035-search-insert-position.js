//O(log n)
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length;
   
    while(left < right) {
        const mid = Math.floor((left + right) / 2); //중간 index
        if(nums[mid] === target) { // 입력값이 중간 index값과 같다면
            return mid;

        } else if(target > nums[mid]) { // 중간보다 크면
            left = mid + 1;

        } else { //중간보다 작으면
            right = mid;
        }
    }
    return left;
};
