// Implement a binary search function that takes an array of integers and a target integer
//  as inputs, and returns true if the target exists in the array and false otherwise.
// let arr = [4,26,15,1,13,6,30]
// target = 25
function search(num,target){
    let left = 0
    let right = num.length -1;
    while(left<=right){
     let middle = Math.floor((left+right)/2);
     if(num[middle]===target){
        return true
     }
     else if(num[middle]>target){
        right = middle -1
     }
     else{
        left = middle +1
     }

    }
    return false
}
let num= [4,26,15,1,13,6,30]
target = 25
console.log(search(num,target))

// Implement a binary search function that takes a sorted array of strings and a target string as 
// inputs, and returns true if the target exists in the array and false otherwise.
function binarySearch(string, target2){
    left = 0
    right = string.length-1;
    while(left>=right){
        let middle = Math.floor((left+right)/2);
        if(string[middle]==target2){
            return true
        }
        else if(string[middle]>target2){
            right=middle-1
        }
        else{
            left = middle +1
        }
    }
    return false

}
const string = ["Apple","Berry","Cherry","Dates"]
target2 = "Dates"
const output = binarySearch(string,target2);
console.log(output)
// Implement a merge sort function that takes an array of integers as 
// // input and returns a sorted array.
// let arr1 = [15,3,25,67,30,9]
function divideArray(arr1){
    if (arr1.length<=1){
        return arr1
    }
    let middle = Math.floor(arr1.length/2);
    let left = arr1.slice(0, middle);
    let right = arr1.slice(middle)
    console.log(left)
    console.log(right)
    return sortedArray(divideArray(left), divideArray(right))
}
function sortedArray(left, right){
    let emptyArr1 =[];
    while(left.length && right.length){
        if (left[0]<right[0]){
            emptyArr1.push(left.shift());
        }
        else{
            emptyArr1.push(right.shift());
        }
    }
    return [...emptyArr1,...left,...right]
}

let arr1 = [15,3,25,67,30,9];
console.log(divideArray(arr1));



