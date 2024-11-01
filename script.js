// ==================Question1:  Write a function that displays current date & time in your browser. 
// function displayCurrentDateTime() {
//     let currentDateTime = new Date();

//     let formattedDateTime = currentDateTime.toLocaleString();

//     let result = document.createElement("div");
//     result.innerHTML = `<p>Current Date and Time: ${formattedDateTime}</p>`;

//     document.body.appendChild(result);
// }

// displayCurrentDateTime();

// ==================Question2: Write a function that takes first & last name and then it greets the user using his full name. 
// function greetUser(firstName, lastName) {
//     let fullName = firstName + " " + lastName;

//     let greetingMessage = `Hello, ${fullName}! Welcome!`;

//     let result = document.createElement("div");
//     result.innerHTML = `<p>${greetingMessage}</p>`;

//     document.body.appendChild(result);
// }

// greetUser("John", "Doe");

// ==================Question3: Write a function that adds two numbers (input by user) and returns the sum of two numbers. 
/*function addTwoNumbers() {
    let firstNumber = parseFloat(prompt("Enter the first number:"));

    let secondNumber = parseFloat(prompt("Enter the second number:"));

     let sum = firstNumber + secondNumber;

    let resultMessage = `The sum of ${firstNumber} and ${secondNumber} is: ${sum}`;

    let result = document.createElement("div");
   result.innerHTML = `<p>${resultMessage}</p>`;

    document.body.appendChild(result);

    return sum;
}

addTwoNumbers();*/

// ==================Question4: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser
/*function computeOperation(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Error: Division by zero is not allowed.";
            }
            break;
        default:
            result = "Error: Invalid operator.";
    }

    let resultMessage = `Result of ${num1} ${operator} ${num2} = ${result}`;
    let resultDiv = document.createElement("div");
    resultDiv.innerHTML = `<p>${resultMessage}</p>`;
    document.body.appendChild(resultDiv);
    return result;
}

computeOperation(10, 5, '+');*/

// ==================Question5: Write a function that squares its argument
// function squareNumber(num) {
//     return num * num;
// }

// let numberToSquare = 5;
// let squaredResult = squareNumber(numberToSquare);

// let resultMessage = `The square of ${numberToSquare} is: ${squaredResult}`;
// let resultDiv = document.createElement("div");
// resultDiv.innerHTML = `<p>${resultMessage}</p>`;

// document.body.appendChild(resultDiv);

// ==================Question6: Write a function that computes factorial of a number
// function factorial(num) {
//     if (num < 0) {
//         return "Error: Factorial is not defined for negative numbers.";
//     }
//     if (num === 0) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }
// let numberToFactorial = 5;
// let factorialResult = factorial(numberToFactorial);
// let resultMessage = `The factorial of ${numberToFactorial} is: ${factorialResult}`;
// let resultDiv = document.createElement("div");
// resultDiv.innerHTML = `<p>${resultMessage}</p>`;
// document.body.appendChild(resultDiv);

// ==================Question7: Write a function that take start and end number as inputs & display counting in your browser
// function displayCounting(start, end) {
//     let resultDiv = document.createElement("div");
//     resultDiv.innerHTML = `<h3>Counting from ${start} to ${end}:</h3>`;

//     for (let i = start; i <= end; i++) {
//         resultDiv.innerHTML += `<p>${i}</p>`;
//     }

//     document.body.appendChild(resultDiv);
// }
// // Example usage
// let startNumber = 1;
// let endNumber = 10;
// displayCounting(startNumber, endNumber);

// ==================Question8: Write a nested function that computes hypotenuse of a right angle triangle. 
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(value) {
//         return value * value;
//     }

//     const baseSquare = calculateSquare(base);
//     const perpendicularSquare = calculateSquare(perpendicular);

//     const hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

//     let resultMessage = `The hypotenuse of the triangle with base ${base} and perpendicular ${perpendicular} is: ${hypotenuse.toFixed(2)}`;

//     let resultDiv = document.createElement("div");
//     resultDiv.innerHTML = `<p>${resultMessage}</p>`;

//     document.body.appendChild(resultDiv);

//     return hypotenuse;
// }

// // Example usage
// let base = 3;
// let perpendicular = 4;
// calculateHypotenuse(base, perpendicular);

// ==================Question9: Write a function that calculates the area of a rectangle
// function calculateRectangleArea(width, height) {
//     return width * height;
// }

// let areaWithValues = calculateRectangleArea(5, 10);
// console.log(`Area with values: ${areaWithValues}`);

// let rectangleWidth = 7;
// let rectangleHeight = 3;
// let areaWithVariables = calculateRectangleArea(rectangleWidth, rectangleHeight);
// console.log(`Area with variables: ${areaWithVariables}`);

// let resultDiv = document.createElement("div");
// resultDiv.innerHTML = `
//     <p>Area with values (5, 10): ${areaWithValues}</p>
//     <p>Area with variables (7, 3): ${areaWithVariables}</p>
// `;

// document.body.appendChild(resultDiv);

// ==================Question10: Write a JavaScript function that checks whether a passed string is palindrome or not? 
// function isPalindrome(str) {
//     const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//     const reversedStr = cleanedStr.split('').reverse().join('');

//     return cleanedStr === reversedStr;
// }

// const testString = "Madam";
// const result = isPalindrome(testString);
// let resultMessage = `Is "${testString}" a palindrome? ${result ? "Yes" : "No"}`;
// let resultDiv = document.createElement("div");
// resultDiv.innerHTML = `<p>${resultMessage}</p>`;
// document.body.appendChild(resultDiv);

// ==================Question11: Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// function capitalizeFirstLetterOfEachWord(str) {
//     const words = str.split(' ');

//     const capitalizedWords = words.map(word => {
//         if (word.length > 0) {
//             return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         }
//         return word; 
//     });

//     return capitalizedWords.join(' ');
// }

// // Example usage
// const inputString = prompt("Enter Words:"); 
// const outputString = capitalizeFirstLetterOfEachWord(inputString);

// let resultMessage = `Input String: "${inputString}" <br> Capitalized String: "${outputString}"`;
// let resultDiv = document.createElement("div");
// resultDiv.innerHTML = `<p>${resultMessage}</p>`;

// document.body.appendChild(resultDiv);

// ==================Question12: Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// function findLongestWord(str) {
//     const words = str.split(' ');

//     let longestWord = '';

//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }
// // Example usage
// const inputString = 'Web Development Tutorial';
// const longestWord = findLongestWord(inputString);
// let resultMessage = `Input String: "${inputString}" <br> Longest Word: "${longestWord}"`;
// let resultDiv = document.createElement("div");
// resultDiv.innerHTML = `<p>${resultMessage}</p>`;
// document.body.appendChild(resultDiv);

// ==================Question13: Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o' 
// function countLetterOccurrences(str, letter) {
//     const lowerStr = str.toLowerCase();
//     const lowerLetter = letter.toLowerCase();
//     let count = 0;

//     for (let char of lowerStr) {
//         if (char === lowerLetter) {
//             count++;
//         }
//     }
//     return count;
// }

// // Example usage
// const inputString = 'JSResourceS.com';
// const letterToCount = 'o';
// const occurrences = countLetterOccurrences(inputString, letterToCount);
// let resultMessage = `The letter "${letterToCount}" occurs ${occurrences} times in the string "${inputString}".`;
// let resultDiv = document.createElement("div");
// resultDiv.innerHTML = `<p>${resultMessage}</p>`;
// document.body.appendChild(resultDiv);

// ==================Question14: The Geometrizer 
// function calcCircumference(radius) {
//     const pi = Math.PI;
//     const circumference = 2 * pi * radius;
//     console.log(`The circumference is ${circumference.toFixed(2)}`);
// }
// function calcArea(radius) {
//     const pi = Math.PI;
//     const area = pi * radius * radius;
//     console.log(`The area is ${area.toFixed(2)}`);
// }

// // Example usage
// const radius = 5;
// calcCircumference(radius);
// calcArea(radius);
// let resultDiv = document.createElement("div");
// resultDiv.innerHTML = `
//     <p>The circumference is ${(2 * Math.PI * radius).toFixed(2)}</p>
//     <p>The area is ${(Math.PI * radius * radius).toFixed(2)}</p>
// `;
// document.body.appendChild(resultDiv);