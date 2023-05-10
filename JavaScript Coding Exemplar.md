JS Developer Coding Exemplar
Instructions
This coding exemplar is designed to highlight your skills and areas of expertise with the JS language in general. We rely mainly on JS as our front-end technology of choice. Because of this, it's important that developers have a well-rounded understanding of the JS language and its newest specifications (ES6/ES7).

Please complete the following questions to the best of your ability. If you are unable to solve a question, please indicate as such. You should feel free to use any online resources to solve these questions; after all, we expect that our developers will use their problem-solving skills at work! Some questions are intended to be difficult, while others are meant to be easy or obvious. Please post your answers in a Gist, using Markdown format, and send the link for review.

This exercise should take approximately one hour to complete.

Good luck!

**Question 1**
You've been tasked with identifying a string that contains the word "superman" (case insensitive). You've written the following code:

function validateString(str) {
    if (!str.toLowerCase().indexOf('superman')) {
        throw new Error('String does not contain superman');
    }    
}
QA has come to you and said that this works great for strings like "I love superman", but an exception is generated for strings like "Superman is awesome!", which should not happen. Explain why this occurs, and show how you would solve this issue (you must use indexOf() in your answer).

**Question 2**
You're given a sorted index array that contains no keys. The array contains only integers, and your task is to identify whether or not the integer you're looking for is in the array. Write a function that searches for the integer and returns true or false based on whether the integer is present. Describe how you arrived at your solution.

**Question 3**
Write a function that takes a phone number in any form and formats it using a delimiter supplied by the developer. The delimiter is optional; if one is not supplied, use a dash (-). Your function should accept a phone number in any format (e.g. 123-456-7890, (123) 456-7890, 1234567890, etc) and format it according to the 3-3-4 US block standard, using the delimiter specified. Assume foreign phone numbers and country codes are out of scope.

Note: This question CAN be solved using a regular expression, but one is not REQUIRED as a solution. Focus instead on cleanliness and effectiveness of the code, and take into account phone numbers that may not pass a sanity check.

**Question 4**
Write a complete set of unit tests for the following code:

function fizzBuzz(start = 1, stop = 100)
{
    let result = '';
    
    if (stop < start || start < 0 || stop < 0) {
        throw new Error('Invalid arguments');
    }
    
    for (let i = start; i <= stop; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz';
            continue;
        }
        
        if (i % 3 === 0) {
            result += 'Fizz';
            continue;
        }
        
        if (i % 5 === 0) {
            result += 'Buzz';
            continue;
        }
        
        result += i;
    }
    
    return result;
}
**Question 5**
Write a function that would generate a hex color code (#f1f2f3) from the full name of a person. It should always generate the same color for a given name. Describe how you arrived at your solution.

const name = 'John Doe';
const color = getColorFromName(name); // e.g. #9bc44c
**Question 6**
Considering the following ES5 code in a page that has ten buttons:

(function(){
	for (var i = 0, l = 10; i < l; i++) {
		document.getElementById('button-' + i).onclick = function () {
			console.log('Line %s', i);
		};
	}
})();
What is the bug in this code? Explain how to fix it in plain ES5.

**Question 7**
Write a function that determines if a given argument is array-like, in the sense that it is iterable.

isIterable(null); // false
isIterable('hello world'); // true
isIterable(document.querySelectorAll('.error-message')); // true


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Question 1.**
The code is using indexOf to check if 'superman' appears in the string, but it is not using an exact match. The indexOf() function is case sensitive, so in the example "Superman is awesome!" the indexOf() function will return -1 because it is looking for "superman" and not "Superman".

To solve this issue, the code can be updated to use the .includes() method instead of .indexOf(). The .includes() method is case insensitive and will return true if the specified string is found, regardless of the case.

function validateString(str) {
if (!str.toLowerCase().includes('superman')) {
throw new Error('String does not contain superman');
}
}
**Question 2.**
// My solution uses a binary search algorithm to search for the target integer. Binary search is an efficient search algorithm that works by repeatedly dividing the search interval in half until the target value is found.

// To use binary search, the array must be sorted. The function first checks to see if the array is sorted. If the array is not sorted, it returns false. If the array is sorted, the function then checks the middle element of the array. If the middle element is equal to the target value, the function returns true. Otherwise, if the target value is less than the middle element, the function searches the left side of the array, and if the target value is greater than the middle element, the function searches the right side of the array. This process is repeated until the target value is found or the search interval is empty.

// The time complexity of this algorithm is O(log n).

function binarySearch(arr, target) {
// check if array is sorted
for (let i = 0; i < arr.length; i++) {
if (arr[i] > arr[i + 1]) return false;
}

// set initial bounds
let left = 0;
let right = arr.length - 1;

// binary search
while (left <= right) {
let mid = Math.floor((left + right) / 2);
let midVal = arr[mid];

if (midVal === target) return true;
else if (midVal < target) left = mid + 1;
else right = mid - 1;
}

return false;
}
**Question 3.**
function formatPhoneNumber(phoneNumber, delimiter = "-") {
// Strip out all non-numeric values from the phoneNumber string
const onlyNumbers = phoneNumber.replace(/\D/g, "");

// Check if the phoneNumber is valid
if (onlyNumbers.length < 10 || onlyNumbers.length > 11) {
console.log("This phone number is invalid");
return;
}

// Determine if the phone number is 11 digits, and if so, the first digit must be a 1
const isElevenDigits = onlyNumbers.length === 11;
const firstIsOne = onlyNumbers[0] === "1";

// Skip the first digit if the phone number is 11 digits and the first digit is 1
let start = isElevenDigits && firstIsOne ? 1 : 0;

// Format the phone number using the specified delimiter
let formattedNumber = "";
let areaCode = onlyNumbers.substring(start, start + 3);
let prefix = onlyNumbers.substring(start + 3, start + 6);
let lineNumber = onlyNumbers.substring(start + 6);
formattedNumber = ${areaCode}${delimiter}${prefix}${delimiter}${lineNumber};

return formattedNumber;
}
**Question 4.**
// Test 1: Pass valid arguments
test('fizzBuzz should return the correct result when valid arguments are passed', () => {
expect(fizzBuzz(1, 15)).toBe('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz');
});

// Test 2: Start argument is negative
test('fizzBuzz should throw an error if the start argument is negative', () => {
expect(() => { fizzBuzz(-1, 15); }).toThrow('Invalid arguments');
});

// Test 3: Stop argument is negative
test('fizzBuzz should throw an error if the stop argument is negative', () => {
expect(() => { fizzBuzz(1, -15); }).toThrow('Invalid arguments');
});

// Test 4: Start argument is greater than stop argument
test('fizzBuzz should throw an error if the start argument is greater than the stop argument', () => {
expect(() => { fizzBuzz(15, 1); }).toThrow('Invalid arguments');
});

// Test 5: Start argument is not provided
test('fizzBuzz should return the correct result when the start argument is not provided', () => {
expect(fizzBuzz(undefined, 15)).toBe('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz');
});
**Question 5.**
function getColorFromName(name) {
// create a variable to store the hex code
let hexCode = "#";

// create a variable to store the total of the letter values in the name
let total = 0;

// loop through each letter in the name
for (let i = 0; i < name.length; i++) {
// get the numerical value of the letter
let letterVal = name.charCodeAt(i);
// add the letter value to the total
total += letterVal;
}

// create an array to store the hex values for each letter
let hexValues = [];

// loop through the total, split it into three parts
let parts = (total/3).toString().split('.');

// loop through each part
for (let i = 0; i < parts.length; i++) {
// convert each part to a hex value
let hexVal = parseInt(parts[i], 10).toString(16);
// add the hex value to the array
hexValues.push(hexVal);
}

// loop through the hex values array
for (let i = 0; i < hexValues.length; i++) {
// check if the hex value is single digit
if (hexValues[i].length === 1) {
// if it is, add a '0' to the beginning
hexValues[i] = '0' + hexValues[i];
}
// add the hex value to the hex code
hexCode += hexValues[i];
}

// return the hex code
return hexCode;
}

// My solution takes the full name of a person and converts each letter into a numerical value. It then adds up the values and splits them into three parts. Each part is then converted into a hex value and added to the hex code, which is then returned. The same name will always generate the same hex code, making it a reliable method of generating a unique color based on a name.
Question 6.
The bug in this code is that all of the buttons are logging the same value of "i" to the console. This is because the variable "i" is scoped to the outer function and is not reset when the onclick event is triggered.

To fix this bug in plain ES5, we can use an Immediately Invoked Function Expression (IIFE) to create a separate scope for each iteration of the loop, and pass the value of "i" as a parameter to the IIFE. The code would then look like this:

(function(){
for (var i = 0, l = 10; i < l; i++) {
(function(i){
document.getElementById('button-' + i).onclick = function () {
console.log('Line %s', i);
};
})(i);
}
})();
**Question 7.**
function isIterable(arg) {
return arg && typeof arg[Symbol.iterator] === 'function';
}
