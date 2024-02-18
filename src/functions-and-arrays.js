
// Iteration 1 | Find the Maximum
// Implement the function maxOfTwoNumbers that takes two numbers as arguments and return the bigger one
function maxOfTwoNumbers(num1,num2) {
    if(num1>num2){
        return num1;
    } else{
        return num2;
    }
};


// Iteration 2 | Find the Longest Word.
//Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the firs occurrence.
//You can use the following array to test your solution
// const words = ["mystery", "brother", "aviator", "cocodrile", "pearl", "orchar"]

const anime =["ana", "pedro", "javier"];

const cucaracha =["ana", "pedro", "javier", "gilbert", "juan" , "guadalupe", "teofilo", "pancho","teodoro"];


/////
function findLongestWord(array){
    if(array.length === 0){
        return 0
    }
    let longestWord= " ";
    array.forEach((currentWord)=>{
        if(currentWord.length>longestWord.length){
            longestWord=currentWord;
        }
    })
    return longestWord
}


////

console.log(findLongestWord(cucaracha))


/*

### Iteration 3 | Sum Numbers

Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

Implement the function named `sumNumbers` that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Later in the course, we will learn how to do this using the `reduce` array method, making your work significantly easier. For now, let's practice _the "declarative"_ way of adding values using loops.

You can use the following array to test your solution:

```javascript
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


*/


const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(sumArray){
    if(sumArray.length === 0){
        return 0;
    }
    let sum=0;

    sumArray.forEach((n)=>{
        sum += n;

    
    })

    return sum;
}

console.log(sumNumbers(numbers))



const paula = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNum(paulaGuapa){
    return paulaGuapa.reduce((accumulator,currentElement)=>{
        return currentElement + accumulator;
    },0);

}
console.log(sumNum(paula))


/*


### Iteration 4 | Numbers Average

Calculating an average is a prevalent task. So let's practice it a bit.

**The logic behind this:**

1. Find the sum as we did in the first exercise (or how about reusing the function `sumNumbers()`?)
2. Divide that sum by the number of elements in the array.

<br>



Implement the function `averageNumbers` that expects an array of numbers and returns the average of the numbers.

You can use the following array to test your solution:

```javascript
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
```

*/


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArrOne) {
    if(numArrOne.length === 0){
        return 0;

    }
    const numSum=sumNumbers(numArrOne) / numArrOne.length;
   return numSum




}

/*

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() {}

*/
