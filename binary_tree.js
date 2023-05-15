function binarySearch(sortedNums, searchNum) {

    // console.log(sortedNums);
    // console.log(searchNum);

    if (sortedNums.length === 0) {
        return false;
    } else {
        // find middle of array
        let middle = Math.floor(sortedNums.length / 2);

        // compare middle to searchNum
        if (sortedNums[middle] === searchNum) {
            // if middle is searchNum, return true
            return true;
        }  else if (sortedNums[middle] > searchNum) {
            // search left side of array
            return binarySearch(sortedNums.slice(0, middle), searchNum);
        } else if (sortedNums[middle] < searchNum) {
            // search right side of array
            return binarySearch(sortedNums.slice(middle + 1), searchNum);
        } else {
            // if middle is not searchNum, return false
            return false;
        }
    }
}
console.log(binarySearch(nums2, searchNum2));