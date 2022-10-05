//1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/?envType=study-plan&id=level-1

let runningSum = function(nums) {
    let arrayFinal = []
    //const arrayLength = nums.length
    nums.reduce((prev,curr) => {
        console.log('prev='+prev + ',' + 'curr='+curr + ',' + 'arrayFinal='+'[' + arrayFinal +']') //default value : prev=0, curr=the first array element
        arrayFinal.push(prev+curr); 
        console.log('pushed:' + ' arrayFinal='+'[' + arrayFinal +']')
        return prev+curr}, 
    0);
    return arrayFinal; 
}
let array = [1,2,3,4] //expected output is [1,3,6,10]
let array2 = [1,1,1,1] //expected output is [1,2,3,4]
console.log(runningSum(array)) 
console.log(runningSum(array2))