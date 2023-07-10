// Given an array of integers, find the sum of its elements.

// For example, if the array ar=[1,2,3],1+2+3 , so return 6.




function simpleArraySum(ar) {
    // Write your code here
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
        sum += ar[i]
    }
    return sum
}
var numbers = [1, 2, 3, 4, 10, 11];
var result = simpleArraySum(numbers);
console.log(result);