/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCeil = exports.getFloor = exports.getAbsolute = exports.calculateCubeSqrt = exports.calculateSqrt = exports.calculate = void 0;
// function to calculate factorial and normal calculation
function calculate(input) {
    let result = document.querySelector("#result");
    if (result) {
        // check if the input includes the "!" symbol then perform factorial function
        if (input.includes("!")) {
            const num = parseInt(input.slice(0, -1));
            // need for the type guard on resultFact, since we are immediately converting it to a string using the toString() method
            const resultFact = factorial(num).toString();
            // assign the calculated factorial value back to the input field
            const resultElem = document.querySelector("#result");
            if (resultElem) {
                resultElem.value = resultFact;
            }
        }
        else if (input.includes("π") || input.includes("e")) {
            // Replace 'π' and 'e' with their corresponding numerical values
            input = input.replaceAll(/(^|[-+*/])π/g, "$13.14159265359");
            input = input.replaceAll(/(^|[-+*/])e/g, "$12.71828182846");
            input = input.replaceAll(/π(?=\d)/g, "3.14159265359*");
            input = input.replaceAll(/e(?=\d)/g, "2.71828182846*");
            input = input.replaceAll(/(?<=\d|\.)π/g, "*3.14159265359");
            input = input.replaceAll(/(?<=\d|\.)e/g, "*2.71828182846");
            input = input.replaceAll(/π$/g, "*3.14159265359");
            input = input.replaceAll(/e$/g, "*2.71828182846");
            // Evaluate the expression
            try {
                const resultEval = eval(input);
                if (result)
                    result.value = resultEval.toFixed(11).toString();
            }
            catch (error) {
                if (result)
                    result.value = "Invalid expression";
            }
        }
        // check if input includes log
        else if (input.includes("log")) {
            const logResult = evaluateLog(input);
            if (typeof logResult === "number") {
                result.value = logResult.toString();
            }
            else {
                result.value = logResult;
            }
        }
        // check and evaluate if input includes ln
        else if (input.includes("ln")) {
            let naturalLogResult = evaluateNaturalLog(input);
            // used type guard
            if (typeof naturalLogResult === "number") {
                naturalLogResult = naturalLogResult.toString();
            }
            result.value = naturalLogResult;
        }
        // check and evaluate root
        else if (input.includes("√")) {
            let rootResult = calculateRoot(input);
            if (typeof rootResult === "number") {
                rootResult = rootResult.toString();
                result.value = rootResult;
            }
        }
        // else evaluate the input using the eval function
        else {
            // Replace double negative signs with a single positive sign
            input = input.replace(/--/g, "+");
            // Evaluate expression using eval()
            try {
                const exprResult = eval(input);
                result.value = exprResult.toString();
            }
            catch (_a) {
                result.value = "Invalid input";
            }
        }
    }
}
exports.calculate = calculate;
const result = document.querySelector("#result");
// factorial function
function factorial(num) {
    if (typeof num !== "number" || num < 0 || Math.floor(num) !== num) {
        return "Malformed Expression";
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
// function to calculate log
function evaluateLog(input) {
    // split the input value into the number before and after 'log'
    const [base, number] = input.split("log");
    // convert the base and number to numbers using the Number() method
    const baseNum = Number(base) || 10;
    const numberNum = Number(number);
    // calculate the logarithm with the specified base using the Math.log() method and display the result
    const tempAnswer = Math.log(numberNum) / Math.log(baseNum);
    const resultLog = tempAnswer.toString();
    const decimalIndex = resultLog.indexOf(".");
    const multipliedNum = decimalIndex > 0 && resultLog[decimalIndex - 1] === "0"
        ? Number(resultLog)
        : tempAnswer;
    return multipliedNum;
}
// function to calculate Natural Log
function evaluateNaturalLog(input) {
    const match = input.match(/^(\d*)ln(.+)$/);
    let coefficient = 1;
    let x = parseFloat(input);
    if (!match) {
        let resultNaturalLog = "Invalid input";
        return resultNaturalLog;
    }
    coefficient = match[1] ? parseInt(match[1]) : 1;
    // add null check and default value of 0
    x = parseFloat(match[2] || "0");
    let resultNaturalLog = coefficient * Math.log(x);
    return resultNaturalLog;
}
// function to calculate root
function calculateRoot(input) {
    const parts = input.split("√");
    // add null check and default value of 0
    const x = parseFloat(parts[1] || "0");
    if (isNaN(x)) {
        return "Invalid input";
    }
    else if (parts.length === 1) {
        return Math.sqrt(x);
    }
    else if (parts.length === 2) {
        // add null check and default value of 0
        const y = parseFloat(parts[0] || "0");
        if (isNaN(y)) {
            return "Invalid input";
        }
        else {
            return Math.pow(x, 1 / y);
        }
    }
    else {
        return "Invalid input";
    }
}
// function to calculate Square root
function calculateSqrt(input) {
    const num = parseFloat(input);
    if (isNaN(num)) {
        return "";
    }
    else {
        return Math.sqrt(num).toString();
    }
}
exports.calculateSqrt = calculateSqrt;
// function to calculate cube root
function calculateCubeSqrt(input) {
    const num = parseFloat(input);
    if (isNaN(num)) {
        return "";
    }
    else {
        return Math.cbrt(num).toString();
    }
}
exports.calculateCubeSqrt = calculateCubeSqrt;
// function to generate absolute value
function getAbsolute(input) {
    const num = parseFloat(input);
    if (isNaN(num)) {
        return "";
    }
    else {
        return Math.abs(num).toString();
    }
}
exports.getAbsolute = getAbsolute;
// function to generate Floor value
function getFloor(input) {
    const num = parseFloat(input);
    if (isNaN(num)) {
        return "";
    }
    else {
        return Math.floor(num).toString();
    }
}
exports.getFloor = getFloor;
// function to generate Ceil value
function getCeil(input) {
    const num = parseFloat(input);
    if (isNaN(num)) {
        return "";
    }
    else {
        return Math.ceil(num).toString();
    }
}
exports.getCeil = getCeil;
// add Eventlistener to toggle operand sign
const PlusbyMinus = document.querySelector("#addition_by_subtraction");
PlusbyMinus.addEventListener("click", () => {
    const userInput = result.value;
    lastOperandSign = lastOperandSign === "-" ? "+" : "-"; // toggle the last operand sign every time the button is clicked
    const calculatedValue = toggleLastOperandSign(userInput);
    result.value = calculatedValue;
});
let lastOperandSign = "+"; // initialize lastOperandSign to "+" when the page loads
// function to toggle operand sign
function toggleLastOperandSign(input) {
    let numRegex = /[-]?\d+/g;
    let nums = input.match(numRegex);
    if (nums === null) {
        return "";
    }
    let newString = "";
    for (let i = 0; i < nums.length; i++) {
        let num = parseInt(nums[i] || "");
        if (i === nums.length - 1 && num !== 0) {
            if (lastOperandSign === "-") {
                newString += `-${num}`;
            }
            else {
                newString += `${num}`;
            }
        }
        else {
            newString += `${num}`;
        }
        let opRegex = /[-+/*]/g;
        let opMatch = opRegex.exec(input);
        while (opMatch !== null &&
            opMatch.index < input.indexOf(nums[i + 1] || "")) {
            newString += `${opMatch[0]}`;
            opMatch = opRegex.exec(input);
        }
    }
    return newString;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
// toggle button
const toggleButton = document.querySelector("#toggle-button");
const buttons1 = document.querySelectorAll(".button1");
const buttons2 = document.querySelectorAll(".button2");
// toggle button event listener
toggleButton.addEventListener("click", () => {
    buttons1.forEach((button1) => {
        button1.classList.toggle("hidden");
    });
    buttons2.forEach((button2) => {
        button2.classList.toggle("hidden");
    });
});
// show dropdown menu on Trigonimetry button click
const dropbtnTrig = document.querySelector("#dropdownBtnTrig");
const dropdownContentTrig = document.querySelector("#myDropdownTrig");
// show dropdown menu on Function button click
const dropbtnFunc = document.querySelector("#dropdownBtnFunc");
const dropdownContentFunc = document.querySelector("#myDropdownFunc");
if (dropbtnTrig && dropdownContentTrig) {
    dropbtnTrig.addEventListener("click", () => {
        dropdownContentTrig.style.display =
            dropdownContentTrig.style.display === "none" ? "block" : "none";
    });
    if (dropbtnFunc && dropdownContentFunc) {
        dropbtnFunc.addEventListener("click", () => {
            dropdownContentFunc.style.display =
                dropdownContentFunc.style.display === "none" ? "block" : "none";
        });
        // Event listener for both dropdown, display none when user clicks outside dropdown buttons
        document.addEventListener("click", (event) => {
            if (!dropbtnTrig.contains(event.target) &&
                !dropdownContentTrig.contains(event.target)) {
                dropdownContentTrig.style.display = "none";
            }
            if (!dropbtnFunc.contains(event.target) &&
                !dropdownContentFunc.contains(event.target)) {
                dropdownContentFunc.style.display = "none";
            }
        });
    }
}
const arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "/",
    "*",
    "%",
    "(",
    ")",
    ".",
    "π",
    "e",
    "!",
];
// display keyboard key on screen when keyboard numbers or operators click
document.addEventListener("keydown", (event) => {
    // console.log(event);
    if (arr.includes(event.key)) {
        const result = document.getElementById("result");
        result.value += event.key;
    }
    if (event.key === "=") {
        try {
            const result = document.getElementById("result");
            (0, utils_1.calculate)(result.value);
            if (result.value === "") {
                result.value = "";
            }
        }
        catch (error) {
            const result = document.getElementById("result");
            result.value = "Malformed Expression";
        }
    }
    if (event.key === "Backspace") {
        const result = document.getElementById("result");
        result.value = result.value.slice(0, -1);
    }
    // prevent from Enter key pressing
    if (event.key === "Enter") {
        event.preventDefault();
    }
});
// Get all the number buttons
let numberButtons = document.getElementsByClassName("calcBtn");
// Add a click event listener to each button
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function () {
        // Get the value of the clicked button
        const buttonValue = this.getAttribute("value");
        // Get the current value of the input field
        const result = document.getElementById("result")
            .value;
        // Add the button value to the input field
        document.getElementById("result").value =
            result + buttonValue;
    });
}
// to get result on screen when equal button pressed by user
const equalBtn = document.getElementById("eval");
if (equalBtn) {
    equalBtn.addEventListener("click", () => {
        try {
            const result = document.getElementById("result")
                .value;
            (0, utils_1.calculate)(result);
            if (result === "") {
                document.getElementById("result").value = "";
            }
        }
        catch (error) {
            document.getElementById("result").value =
                "Malformed Expression";
        }
    });
}
const result = document.querySelector("#result");
// event listener to solve two power x
const twoPowx = document.querySelector("#two_power_X");
twoPowx.addEventListener("click", function () {
    const userIp = document.getElementById("result").value;
    const output = `2**${userIp}`;
    result.value = output;
});
// event listener to solve ten power x
const tenPowx = document.querySelector("#ten_power_x");
tenPowx.addEventListener("click", function () {
    const userIp = document.getElementById("result").value;
    const output = `10**${userIp}`;
    result.value = output;
});
// event listener to solve ten power x
const ePowx = document.querySelector("#e_power_x");
ePowx.addEventListener("click", function () {
    const userIp = document.getElementById("result").value;
    const output = `e**${userIp}`;
    result.value = output;
});
// add event listener to solve square root of x
const rootXbtn = document.querySelector("#root_x");
rootXbtn.addEventListener("click", () => {
    const userInput = result.value;
    const calculatedValue = (0, utils_1.calculateSqrt)(userInput);
    result.value = calculatedValue;
});
// add event listener to solve cube root of x
const threeRootXbtn = document.querySelector("#cube_root_x");
threeRootXbtn.addEventListener("click", () => {
    const userInput = result.value;
    const calculatedValue = (0, utils_1.calculateCubeSqrt)(userInput);
    result.value = calculatedValue;
});
// add Eventlistener to solve absolute
(_a = document.querySelector("#x_abs")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const userInput = result.value;
    const calculatedValue = (0, utils_1.getAbsolute)(userInput);
    result.value = calculatedValue;
});
// add Eventlistener to solve floor
(_b = document.querySelector("#x_floor")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    const userInput = result.value;
    const calculatedValue = (0, utils_1.getFloor)(userInput);
    result.value = calculatedValue;
});
// add Eventlistener to solve ceil
(_c = document.querySelector("#x_ceil")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    const userInput = result.value;
    const calculatedValue = (0, utils_1.getCeil)(userInput);
    result.value = calculatedValue;
});
// add Eventlistener to solve round
const roundx = document.querySelector("#x_round");
roundx.addEventListener("click", () => {
    const userInput = result.value;
    const calculatedValue = (0, utils_1.getAbsolute)(userInput);
    result.value = calculatedValue;
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtY2FsY3VsYXRvci8uL3NyYy91dGlscy91dGlscy50cyIsIndlYnBhY2s6Ly90cy1jYWxjdWxhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWNhbGN1bGF0b3IvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldENlaWwgPSBleHBvcnRzLmdldEZsb29yID0gZXhwb3J0cy5nZXRBYnNvbHV0ZSA9IGV4cG9ydHMuY2FsY3VsYXRlQ3ViZVNxcnQgPSBleHBvcnRzLmNhbGN1bGF0ZVNxcnQgPSBleHBvcnRzLmNhbGN1bGF0ZSA9IHZvaWQgMDtcbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBmYWN0b3JpYWwgYW5kIG5vcm1hbCBjYWxjdWxhdGlvblxuZnVuY3Rpb24gY2FsY3VsYXRlKGlucHV0KSB7XG4gICAgbGV0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdWx0XCIpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGlucHV0IGluY2x1ZGVzIHRoZSBcIiFcIiBzeW1ib2wgdGhlbiBwZXJmb3JtIGZhY3RvcmlhbCBmdW5jdGlvblxuICAgICAgICBpZiAoaW5wdXQuaW5jbHVkZXMoXCIhXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUludChpbnB1dC5zbGljZSgwLCAtMSkpO1xuICAgICAgICAgICAgLy8gbmVlZCBmb3IgdGhlIHR5cGUgZ3VhcmQgb24gcmVzdWx0RmFjdCwgc2luY2Ugd2UgYXJlIGltbWVkaWF0ZWx5IGNvbnZlcnRpbmcgaXQgdG8gYSBzdHJpbmcgdXNpbmcgdGhlIHRvU3RyaW5nKCkgbWV0aG9kXG4gICAgICAgICAgICBjb25zdCByZXN1bHRGYWN0ID0gZmFjdG9yaWFsKG51bSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIC8vIGFzc2lnbiB0aGUgY2FsY3VsYXRlZCBmYWN0b3JpYWwgdmFsdWUgYmFjayB0byB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3VsdFwiKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHRFbGVtKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0RWxlbS52YWx1ZSA9IHJlc3VsdEZhY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXQuaW5jbHVkZXMoXCLPgFwiKSB8fCBpbnB1dC5pbmNsdWRlcyhcImVcIikpIHtcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgJ8+AJyBhbmQgJ2UnIHdpdGggdGhlaXIgY29ycmVzcG9uZGluZyBudW1lcmljYWwgdmFsdWVzXG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoLyhefFstKyovXSnPgC9nLCBcIiQxMy4xNDE1OTI2NTM1OVwiKTtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvKF58Wy0rKi9dKWUvZywgXCIkMTIuNzE4MjgxODI4NDZcIik7XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoL8+AKD89XFxkKS9nLCBcIjMuMTQxNTkyNjUzNTkqXCIpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC9lKD89XFxkKS9nLCBcIjIuNzE4MjgxODI4NDYqXCIpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC8oPzw9XFxkfFxcLinPgC9nLCBcIiozLjE0MTU5MjY1MzU5XCIpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC8oPzw9XFxkfFxcLillL2csIFwiKjIuNzE4MjgxODI4NDZcIik7XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoL8+AJC9nLCBcIiozLjE0MTU5MjY1MzU5XCIpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC9lJC9nLCBcIioyLjcxODI4MTgyODQ2XCIpO1xuICAgICAgICAgICAgLy8gRXZhbHVhdGUgdGhlIGV4cHJlc3Npb25cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0RXZhbCA9IGV2YWwoaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHJlc3VsdEV2YWwudG9GaXhlZCgxMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IFwiSW52YWxpZCBleHByZXNzaW9uXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgaWYgaW5wdXQgaW5jbHVkZXMgbG9nXG4gICAgICAgIGVsc2UgaWYgKGlucHV0LmluY2x1ZGVzKFwibG9nXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBsb2dSZXN1bHQgPSBldmFsdWF0ZUxvZyhpbnB1dCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvZ1Jlc3VsdCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IGxvZ1Jlc3VsdC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gbG9nUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGFuZCBldmFsdWF0ZSBpZiBpbnB1dCBpbmNsdWRlcyBsblxuICAgICAgICBlbHNlIGlmIChpbnB1dC5pbmNsdWRlcyhcImxuXCIpKSB7XG4gICAgICAgICAgICBsZXQgbmF0dXJhbExvZ1Jlc3VsdCA9IGV2YWx1YXRlTmF0dXJhbExvZyhpbnB1dCk7XG4gICAgICAgICAgICAvLyB1c2VkIHR5cGUgZ3VhcmRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmF0dXJhbExvZ1Jlc3VsdCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIG5hdHVyYWxMb2dSZXN1bHQgPSBuYXR1cmFsTG9nUmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQudmFsdWUgPSBuYXR1cmFsTG9nUmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGFuZCBldmFsdWF0ZSByb290XG4gICAgICAgIGVsc2UgaWYgKGlucHV0LmluY2x1ZGVzKFwi4oiaXCIpKSB7XG4gICAgICAgICAgICBsZXQgcm9vdFJlc3VsdCA9IGNhbGN1bGF0ZVJvb3QoaW5wdXQpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByb290UmVzdWx0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgcm9vdFJlc3VsdCA9IHJvb3RSZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSByb290UmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2UgZXZhbHVhdGUgdGhlIGlucHV0IHVzaW5nIHRoZSBldmFsIGZ1bmN0aW9uXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVwbGFjZSBkb3VibGUgbmVnYXRpdmUgc2lnbnMgd2l0aCBhIHNpbmdsZSBwb3NpdGl2ZSBzaWduXG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoLy0tL2csIFwiK1wiKTtcbiAgICAgICAgICAgIC8vIEV2YWx1YXRlIGV4cHJlc3Npb24gdXNpbmcgZXZhbCgpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJSZXN1bHQgPSBldmFsKGlucHV0KTtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSBleHByUmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSBcIkludmFsaWQgaW5wdXRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuY2FsY3VsYXRlID0gY2FsY3VsYXRlO1xuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXN1bHRcIik7XG4vLyBmYWN0b3JpYWwgZnVuY3Rpb25cbmZ1bmN0aW9uIGZhY3RvcmlhbChudW0pIHtcbiAgICBpZiAodHlwZW9mIG51bSAhPT0gXCJudW1iZXJcIiB8fCBudW0gPCAwIHx8IE1hdGguZmxvb3IobnVtKSAhPT0gbnVtKSB7XG4gICAgICAgIHJldHVybiBcIk1hbGZvcm1lZCBFeHByZXNzaW9uXCI7XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSAxO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bTsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCAqPSBpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLy8gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIGxvZ1xuZnVuY3Rpb24gZXZhbHVhdGVMb2coaW5wdXQpIHtcbiAgICAvLyBzcGxpdCB0aGUgaW5wdXQgdmFsdWUgaW50byB0aGUgbnVtYmVyIGJlZm9yZSBhbmQgYWZ0ZXIgJ2xvZydcbiAgICBjb25zdCBbYmFzZSwgbnVtYmVyXSA9IGlucHV0LnNwbGl0KFwibG9nXCIpO1xuICAgIC8vIGNvbnZlcnQgdGhlIGJhc2UgYW5kIG51bWJlciB0byBudW1iZXJzIHVzaW5nIHRoZSBOdW1iZXIoKSBtZXRob2RcbiAgICBjb25zdCBiYXNlTnVtID0gTnVtYmVyKGJhc2UpIHx8IDEwO1xuICAgIGNvbnN0IG51bWJlck51bSA9IE51bWJlcihudW1iZXIpO1xuICAgIC8vIGNhbGN1bGF0ZSB0aGUgbG9nYXJpdGhtIHdpdGggdGhlIHNwZWNpZmllZCBiYXNlIHVzaW5nIHRoZSBNYXRoLmxvZygpIG1ldGhvZCBhbmQgZGlzcGxheSB0aGUgcmVzdWx0XG4gICAgY29uc3QgdGVtcEFuc3dlciA9IE1hdGgubG9nKG51bWJlck51bSkgLyBNYXRoLmxvZyhiYXNlTnVtKTtcbiAgICBjb25zdCByZXN1bHRMb2cgPSB0ZW1wQW5zd2VyLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgZGVjaW1hbEluZGV4ID0gcmVzdWx0TG9nLmluZGV4T2YoXCIuXCIpO1xuICAgIGNvbnN0IG11bHRpcGxpZWROdW0gPSBkZWNpbWFsSW5kZXggPiAwICYmIHJlc3VsdExvZ1tkZWNpbWFsSW5kZXggLSAxXSA9PT0gXCIwXCJcbiAgICAgICAgPyBOdW1iZXIocmVzdWx0TG9nKVxuICAgICAgICA6IHRlbXBBbnN3ZXI7XG4gICAgcmV0dXJuIG11bHRpcGxpZWROdW07XG59XG4vLyBmdW5jdGlvbiB0byBjYWxjdWxhdGUgTmF0dXJhbCBMb2dcbmZ1bmN0aW9uIGV2YWx1YXRlTmF0dXJhbExvZyhpbnB1dCkge1xuICAgIGNvbnN0IG1hdGNoID0gaW5wdXQubWF0Y2goL14oXFxkKilsbiguKykkLyk7XG4gICAgbGV0IGNvZWZmaWNpZW50ID0gMTtcbiAgICBsZXQgeCA9IHBhcnNlRmxvYXQoaW5wdXQpO1xuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgbGV0IHJlc3VsdE5hdHVyYWxMb2cgPSBcIkludmFsaWQgaW5wdXRcIjtcbiAgICAgICAgcmV0dXJuIHJlc3VsdE5hdHVyYWxMb2c7XG4gICAgfVxuICAgIGNvZWZmaWNpZW50ID0gbWF0Y2hbMV0gPyBwYXJzZUludChtYXRjaFsxXSkgOiAxO1xuICAgIC8vIGFkZCBudWxsIGNoZWNrIGFuZCBkZWZhdWx0IHZhbHVlIG9mIDBcbiAgICB4ID0gcGFyc2VGbG9hdChtYXRjaFsyXSB8fCBcIjBcIik7XG4gICAgbGV0IHJlc3VsdE5hdHVyYWxMb2cgPSBjb2VmZmljaWVudCAqIE1hdGgubG9nKHgpO1xuICAgIHJldHVybiByZXN1bHROYXR1cmFsTG9nO1xufVxuLy8gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHJvb3RcbmZ1bmN0aW9uIGNhbGN1bGF0ZVJvb3QoaW5wdXQpIHtcbiAgICBjb25zdCBwYXJ0cyA9IGlucHV0LnNwbGl0KFwi4oiaXCIpO1xuICAgIC8vIGFkZCBudWxsIGNoZWNrIGFuZCBkZWZhdWx0IHZhbHVlIG9mIDBcbiAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChwYXJ0c1sxXSB8fCBcIjBcIik7XG4gICAgaWYgKGlzTmFOKHgpKSB7XG4gICAgICAgIHJldHVybiBcIkludmFsaWQgaW5wdXRcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBhZGQgbnVsbCBjaGVjayBhbmQgZGVmYXVsdCB2YWx1ZSBvZiAwXG4gICAgICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KHBhcnRzWzBdIHx8IFwiMFwiKTtcbiAgICAgICAgaWYgKGlzTmFOKHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3coeCwgMSAvIHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgfVxufVxuLy8gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIFNxdWFyZSByb290XG5mdW5jdGlvbiBjYWxjdWxhdGVTcXJ0KGlucHV0KSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdChpbnB1dCk7XG4gICAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KG51bSkudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLmNhbGN1bGF0ZVNxcnQgPSBjYWxjdWxhdGVTcXJ0O1xuLy8gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIGN1YmUgcm9vdFxuZnVuY3Rpb24gY2FsY3VsYXRlQ3ViZVNxcnQoaW5wdXQpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICBpZiAoaXNOYU4obnVtKSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNicnQobnVtKS50b1N0cmluZygpO1xuICAgIH1cbn1cbmV4cG9ydHMuY2FsY3VsYXRlQ3ViZVNxcnQgPSBjYWxjdWxhdGVDdWJlU3FydDtcbi8vIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGFic29sdXRlIHZhbHVlXG5mdW5jdGlvbiBnZXRBYnNvbHV0ZShpbnB1dCkge1xuICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoaW5wdXQpO1xuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKG51bSkudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLmdldEFic29sdXRlID0gZ2V0QWJzb2x1dGU7XG4vLyBmdW5jdGlvbiB0byBnZW5lcmF0ZSBGbG9vciB2YWx1ZVxuZnVuY3Rpb24gZ2V0Rmxvb3IoaW5wdXQpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICBpZiAoaXNOYU4obnVtKSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG51bSkudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLmdldEZsb29yID0gZ2V0Rmxvb3I7XG4vLyBmdW5jdGlvbiB0byBnZW5lcmF0ZSBDZWlsIHZhbHVlXG5mdW5jdGlvbiBnZXRDZWlsKGlucHV0KSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdChpbnB1dCk7XG4gICAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG51bSkudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLmdldENlaWwgPSBnZXRDZWlsO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gdG9nZ2xlIG9wZXJhbmQgc2lnblxuY29uc3QgUGx1c2J5TWludXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZGl0aW9uX2J5X3N1YnRyYWN0aW9uXCIpO1xuUGx1c2J5TWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSByZXN1bHQudmFsdWU7XG4gICAgbGFzdE9wZXJhbmRTaWduID0gbGFzdE9wZXJhbmRTaWduID09PSBcIi1cIiA/IFwiK1wiIDogXCItXCI7IC8vIHRvZ2dsZSB0aGUgbGFzdCBvcGVyYW5kIHNpZ24gZXZlcnkgdGltZSB0aGUgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB0b2dnbGVMYXN0T3BlcmFuZFNpZ24odXNlcklucHV0KTtcbiAgICByZXN1bHQudmFsdWUgPSBjYWxjdWxhdGVkVmFsdWU7XG59KTtcbmxldCBsYXN0T3BlcmFuZFNpZ24gPSBcIitcIjsgLy8gaW5pdGlhbGl6ZSBsYXN0T3BlcmFuZFNpZ24gdG8gXCIrXCIgd2hlbiB0aGUgcGFnZSBsb2Fkc1xuLy8gZnVuY3Rpb24gdG8gdG9nZ2xlIG9wZXJhbmQgc2lnblxuZnVuY3Rpb24gdG9nZ2xlTGFzdE9wZXJhbmRTaWduKGlucHV0KSB7XG4gICAgbGV0IG51bVJlZ2V4ID0gL1stXT9cXGQrL2c7XG4gICAgbGV0IG51bXMgPSBpbnB1dC5tYXRjaChudW1SZWdleCk7XG4gICAgaWYgKG51bXMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGxldCBuZXdTdHJpbmcgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbnVtID0gcGFyc2VJbnQobnVtc1tpXSB8fCBcIlwiKTtcbiAgICAgICAgaWYgKGkgPT09IG51bXMubGVuZ3RoIC0gMSAmJiBudW0gIT09IDApIHtcbiAgICAgICAgICAgIGlmIChsYXN0T3BlcmFuZFNpZ24gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RyaW5nICs9IGAtJHtudW19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1N0cmluZyArPSBgJHtudW19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld1N0cmluZyArPSBgJHtudW19YDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3BSZWdleCA9IC9bLSsvKl0vZztcbiAgICAgICAgbGV0IG9wTWF0Y2ggPSBvcFJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgICAgICB3aGlsZSAob3BNYXRjaCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgb3BNYXRjaC5pbmRleCA8IGlucHV0LmluZGV4T2YobnVtc1tpICsgMV0gfHwgXCJcIikpIHtcbiAgICAgICAgICAgIG5ld1N0cmluZyArPSBgJHtvcE1hdGNoWzBdfWA7XG4gICAgICAgICAgICBvcE1hdGNoID0gb3BSZWdleC5leGVjKGlucHV0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3U3RyaW5nO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hLCBfYiwgX2M7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHMvdXRpbHNcIik7XG4vLyB0b2dnbGUgYnV0dG9uXG5jb25zdCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1idXR0b25cIik7XG5jb25zdCBidXR0b25zMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uMVwiKTtcbmNvbnN0IGJ1dHRvbnMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24yXCIpO1xuLy8gdG9nZ2xlIGJ1dHRvbiBldmVudCBsaXN0ZW5lclxudG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnV0dG9uczEuZm9yRWFjaCgoYnV0dG9uMSkgPT4ge1xuICAgICAgICBidXR0b24xLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG4gICAgYnV0dG9uczIuZm9yRWFjaCgoYnV0dG9uMikgPT4ge1xuICAgICAgICBidXR0b24yLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG59KTtcbi8vIHNob3cgZHJvcGRvd24gbWVudSBvbiBUcmlnb25pbWV0cnkgYnV0dG9uIGNsaWNrXG5jb25zdCBkcm9wYnRuVHJpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25CdG5UcmlnXCIpO1xuY29uc3QgZHJvcGRvd25Db250ZW50VHJpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXlEcm9wZG93blRyaWdcIik7XG4vLyBzaG93IGRyb3Bkb3duIG1lbnUgb24gRnVuY3Rpb24gYnV0dG9uIGNsaWNrXG5jb25zdCBkcm9wYnRuRnVuYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcGRvd25CdG5GdW5jXCIpO1xuY29uc3QgZHJvcGRvd25Db250ZW50RnVuYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXlEcm9wZG93bkZ1bmNcIik7XG5pZiAoZHJvcGJ0blRyaWcgJiYgZHJvcGRvd25Db250ZW50VHJpZykge1xuICAgIGRyb3BidG5UcmlnLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRyb3Bkb3duQ29udGVudFRyaWcuc3R5bGUuZGlzcGxheSA9XG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRUcmlnLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gICAgfSk7XG4gICAgaWYgKGRyb3BidG5GdW5jICYmIGRyb3Bkb3duQ29udGVudEZ1bmMpIHtcbiAgICAgICAgZHJvcGJ0bkZ1bmMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudEZ1bmMuc3R5bGUuZGlzcGxheSA9XG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50RnVuYy5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIGJvdGggZHJvcGRvd24sIGRpc3BsYXkgbm9uZSB3aGVuIHVzZXIgY2xpY2tzIG91dHNpZGUgZHJvcGRvd24gYnV0dG9uc1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRyb3BidG5UcmlnLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgICAgICAgICAgICAhZHJvcGRvd25Db250ZW50VHJpZy5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50VHJpZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWRyb3BidG5GdW5jLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgICAgICAgICAgICAhZHJvcGRvd25Db250ZW50RnVuYy5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50RnVuYy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNvbnN0IGFyciA9IFtcbiAgICBcIjBcIixcbiAgICBcIjFcIixcbiAgICBcIjJcIixcbiAgICBcIjNcIixcbiAgICBcIjRcIixcbiAgICBcIjVcIixcbiAgICBcIjZcIixcbiAgICBcIjdcIixcbiAgICBcIjhcIixcbiAgICBcIjlcIixcbiAgICBcIitcIixcbiAgICBcIi1cIixcbiAgICBcIi9cIixcbiAgICBcIipcIixcbiAgICBcIiVcIixcbiAgICBcIihcIixcbiAgICBcIilcIixcbiAgICBcIi5cIixcbiAgICBcIs+AXCIsXG4gICAgXCJlXCIsXG4gICAgXCIhXCIsXG5dO1xuLy8gZGlzcGxheSBrZXlib2FyZCBrZXkgb24gc2NyZWVuIHdoZW4ga2V5Ym9hcmQgbnVtYmVycyBvciBvcGVyYXRvcnMgY2xpY2tcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICBpZiAoYXJyLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIik7XG4gICAgICAgIHJlc3VsdC52YWx1ZSArPSBldmVudC5rZXk7XG4gICAgfVxuICAgIGlmIChldmVudC5rZXkgPT09IFwiPVwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKTtcbiAgICAgICAgICAgICgwLCB1dGlsc18xLmNhbGN1bGF0ZSkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIik7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUgPSBcIk1hbGZvcm1lZCBFeHByZXNzaW9uXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKTtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gcmVzdWx0LnZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gICAgLy8gcHJldmVudCBmcm9tIEVudGVyIGtleSBwcmVzc2luZ1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn0pO1xuLy8gR2V0IGFsbCB0aGUgbnVtYmVyIGJ1dHRvbnNcbmxldCBudW1iZXJCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhbGNCdG5cIik7XG4vLyBBZGQgYSBjbGljayBldmVudCBsaXN0ZW5lciB0byBlYWNoIGJ1dHRvblxuZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgbnVtYmVyQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBHZXQgdGhlIHZhbHVlIG9mIHRoZSBjbGlja2VkIGJ1dHRvblxuICAgICAgICBjb25zdCBidXR0b25WYWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIilcbiAgICAgICAgICAgIC52YWx1ZTtcbiAgICAgICAgLy8gQWRkIHRoZSBidXR0b24gdmFsdWUgdG8gdGhlIGlucHV0IGZpZWxkXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLnZhbHVlID1cbiAgICAgICAgICAgIHJlc3VsdCArIGJ1dHRvblZhbHVlO1xuICAgIH0pO1xufVxuLy8gdG8gZ2V0IHJlc3VsdCBvbiBzY3JlZW4gd2hlbiBlcXVhbCBidXR0b24gcHJlc3NlZCBieSB1c2VyXG5jb25zdCBlcXVhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXZhbFwiKTtcbmlmIChlcXVhbEJ0bikge1xuICAgIGVxdWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKVxuICAgICAgICAgICAgICAgIC52YWx1ZTtcbiAgICAgICAgICAgICgwLCB1dGlsc18xLmNhbGN1bGF0ZSkocmVzdWx0KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKS52YWx1ZSA9XG4gICAgICAgICAgICAgICAgXCJNYWxmb3JtZWQgRXhwcmVzc2lvblwiO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5jb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3VsdFwiKTtcbi8vIGV2ZW50IGxpc3RlbmVyIHRvIHNvbHZlIHR3byBwb3dlciB4XG5jb25zdCB0d29Qb3d4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0d29fcG93ZXJfWFwiKTtcbnR3b1Bvd3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB1c2VySXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKS52YWx1ZTtcbiAgICBjb25zdCBvdXRwdXQgPSBgMioqJHt1c2VySXB9YDtcbiAgICByZXN1bHQudmFsdWUgPSBvdXRwdXQ7XG59KTtcbi8vIGV2ZW50IGxpc3RlbmVyIHRvIHNvbHZlIHRlbiBwb3dlciB4XG5jb25zdCB0ZW5Qb3d4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW5fcG93ZXJfeFwiKTtcbnRlblBvd3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB1c2VySXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKS52YWx1ZTtcbiAgICBjb25zdCBvdXRwdXQgPSBgMTAqKiR7dXNlcklwfWA7XG4gICAgcmVzdWx0LnZhbHVlID0gb3V0cHV0O1xufSk7XG4vLyBldmVudCBsaXN0ZW5lciB0byBzb2x2ZSB0ZW4gcG93ZXIgeFxuY29uc3QgZVBvd3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VfcG93ZXJfeFwiKTtcbmVQb3d4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXNlcklwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIikudmFsdWU7XG4gICAgY29uc3Qgb3V0cHV0ID0gYGUqKiR7dXNlcklwfWA7XG4gICAgcmVzdWx0LnZhbHVlID0gb3V0cHV0O1xufSk7XG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgc3F1YXJlIHJvb3Qgb2YgeFxuY29uc3Qgcm9vdFhidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RfeFwiKTtcbnJvb3RYYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9ICgwLCB1dGlsc18xLmNhbGN1bGF0ZVNxcnQpKHVzZXJJbnB1dCk7XG4gICAgcmVzdWx0LnZhbHVlID0gY2FsY3VsYXRlZFZhbHVlO1xufSk7XG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgY3ViZSByb290IG9mIHhcbmNvbnN0IHRocmVlUm9vdFhidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1YmVfcm9vdF94XCIpO1xudGhyZWVSb290WGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5jYWxjdWxhdGVDdWJlU3FydCkodXNlcklucHV0KTtcbiAgICByZXN1bHQudmFsdWUgPSBjYWxjdWxhdGVkVmFsdWU7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlIGFic29sdXRlXG4oX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3hfYWJzXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSByZXN1bHQudmFsdWU7XG4gICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gKDAsIHV0aWxzXzEuZ2V0QWJzb2x1dGUpKHVzZXJJbnB1dCk7XG4gICAgcmVzdWx0LnZhbHVlID0gY2FsY3VsYXRlZFZhbHVlO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBmbG9vclxuKF9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN4X2Zsb29yXCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSByZXN1bHQudmFsdWU7XG4gICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gKDAsIHV0aWxzXzEuZ2V0Rmxvb3IpKHVzZXJJbnB1dCk7XG4gICAgcmVzdWx0LnZhbHVlID0gY2FsY3VsYXRlZFZhbHVlO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBjZWlsXG4oX2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3hfY2VpbFwiKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9ICgwLCB1dGlsc18xLmdldENlaWwpKHVzZXJJbnB1dCk7XG4gICAgcmVzdWx0LnZhbHVlID0gY2FsY3VsYXRlZFZhbHVlO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSByb3VuZFxuY29uc3Qgcm91bmR4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN4X3JvdW5kXCIpO1xucm91bmR4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9ICgwLCB1dGlsc18xLmdldEFic29sdXRlKSh1c2VySW5wdXQpO1xuICAgIHJlc3VsdC52YWx1ZSA9IGNhbGN1bGF0ZWRWYWx1ZTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9