/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.memoryRecall = exports.memoryClear = exports.memoryStore = exports.memoryOperation = exports.getFe = exports.getDegreesToDMS = exports.getDeg = exports.getRand = exports.getCot = exports.getCsc = exports.getSec = exports.getTan = exports.getCos = exports.getSine = exports.getPlusbyMinus = exports.getCeil = exports.getFloor = exports.getAbsolute = exports.calculateCubeSqrt = exports.calculateSqrt = exports.calculate = void 0;
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
        throw new Error("Invalid input");
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
        throw new Error("Invalid input");
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
        throw new Error("Invalid input");
    }
    else if (parts.length === 1) {
        return Math.sqrt(x);
    }
    else if (parts.length === 2) {
        // add null check and default value of 0
        const y = parseFloat(parts[0] || "0");
        if (isNaN(y)) {
            throw new Error("Invalid input");
        }
        else {
            return Math.pow(x, 1 / y);
        }
    }
    else {
        throw new Error("Invalid input");
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
// function to toggle operand sign
function getPlusbyMinus(input) {
    let userStr = input.value.toString();
    if (userStr.charAt(0) === "-") {
        input.value = input.value.substring(1, input.value.length);
    }
    else {
        input.value = "-" + input.value;
    }
}
exports.getPlusbyMinus = getPlusbyMinus;
// check which unit of angle is selected by user
let unitOfAngle = "DEG";
const buttonOfUnit = document.getElementById("deg");
buttonOfUnit.addEventListener("click", () => {
    unitOfAngle = unitOfAngle === "DEG" ? "RAD" : "DEG";
    buttonOfUnit.innerHTML = unitOfAngle;
});
// common function to calculate all Trigonometry functions
function calculateTrigValue(input, trigFunc) {
    if (unitOfAngle === "RAD") {
        let radians = parseFloat(input);
        result.value = trigFunc(radians).toString();
    }
    else if (unitOfAngle === "DEG") {
        let degree = parseFloat(input) * (Math.PI / 180);
        result.value = trigFunc(degree).toString();
    }
}
// function for get sine value
function getSine(input) {
    if (!input) {
        throw new Error("Invalid input");
    }
    return calculateTrigValue(input, Math.sin);
}
exports.getSine = getSine;
// function for get cos value
function getCos(input) {
    if (!input) {
        throw new Error("Invalid input");
    }
    return calculateTrigValue(input, Math.cos);
}
exports.getCos = getCos;
// function for get tan value
function getTan(input) {
    if (!input) {
        throw new Error("Invalid input");
    }
    return calculateTrigValue(input, Math.tan);
}
exports.getTan = getTan;
// function for get sec value
function getSec(input) {
    if (!input) {
        throw new Error("Invalid input");
    }
    return calculateTrigValue(input, (radians) => 1 / Math.cos(radians));
}
exports.getSec = getSec;
// function for get cosec value
function getCsc(input) {
    if (!input) {
        throw new Error("Invalid input");
    }
    return calculateTrigValue(input, (radians) => 1 / Math.sin(radians));
}
exports.getCsc = getCsc;
// function for get cot value
function getCot(input) {
    if (!input) {
        throw new Error("Invalid input");
    }
    return calculateTrigValue(input, (radians) => 1 / Math.tan(radians));
}
exports.getCot = getCot;
// function to generate random numbers
function getRand(input) {
    input.value = Math.random().toString();
}
exports.getRand = getRand;
// function to get degree
function getDeg(input) {
    if (unitOfAngle === "RAD") {
        let deg = Number(input) * (180 / Math.PI);
        result.value = deg.toString();
    }
    else {
        result.value = (Number(result.value) / 0.0147).toString();
    }
}
exports.getDeg = getDeg;
// function to get Degree to DMS
function getDegreesToDMS(input) {
    if (unitOfAngle === "DEG") {
        let d = Math.floor(Number(input));
        let m = Math.floor((Number(input) - d) * 60);
        let s = ((Number(input) - d - m / 60) * 3600).toFixed(2);
        if (s == "60") {
            m++;
            s = "0";
        }
        if (m == 60) {
            d++;
            m = 0;
        }
        result.value = `${d}° ${m}' ${s}"`;
    }
    else {
        alert("Please select DEG option first");
        result.value = "";
    }
}
exports.getDegreesToDMS = getDegreesToDMS;
// function to get fixed to exponent
function getFe(input) {
    if (input == "" || input == "0") {
        input = "0";
    }
    else {
        input = `${input}e+0`;
    }
    result.value = input;
}
exports.getFe = getFe;
function getMemoryValue() {
    return parseInt(document.getElementById("memoryShow").innerHTML);
}
// function for memory addition and subtraction
function memoryOperation(input, operation) {
    const inputVal = parseInt(input.value);
    if (!isNaN(inputVal)) {
        let memoryVal = getMemoryValue();
        if (operation === "add") {
            memoryVal += inputVal;
        }
        else if (operation === "subtract") {
            memoryVal -= inputVal;
        }
        document.getElementById("memoryShow").innerHTML = memoryVal.toString();
    }
    let memoryVal = document.querySelector("#memoryShow");
    if (memoryVal.innerHTML >= "1" || memoryVal.innerHTML <= "1") {
        document.getElementById("memoryClear").disabled =
            false;
        document.getElementById("memoryRecall").disabled =
            false;
    }
}
exports.memoryOperation = memoryOperation;
function updateMemoryButtons() {
    let memoryVal = document.querySelector("#memoryShow");
    document.getElementById("memoryClear").disabled =
        memoryVal.innerHTML === "0";
    document.getElementById("memoryRecall").disabled =
        memoryVal.innerHTML === "0";
}
// function to store memory
function memoryStore(input) {
    document.getElementById("memoryShow").innerHTML = input.value || "0";
    updateMemoryButtons();
}
exports.memoryStore = memoryStore;
// function to clear memory
function memoryClear() {
    document.getElementById("memoryShow").innerHTML =  false || "0";
    updateMemoryButtons();
}
exports.memoryClear = memoryClear;
// function for memory recall
function memoryRecall(input) {
    input.value = document.getElementById("memoryShow").innerHTML;
}
exports.memoryRecall = memoryRecall;


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
const result = document.querySelector("#result");
// display keyboard key on screen when keyboard numbers or operators click
document.addEventListener("keydown", (event) => {
    // console.log(event);
    if (arr.includes(event.key)) {
        result.value += event.key;
    }
    if (event.key === "=") {
        try {
            (0, utils_1.calculate)(result.value);
            if (result.value === "") {
                result.value = "";
            }
        }
        catch (error) {
            result.value = "Malformed Expression";
        }
    }
    if (event.key === "Backspace") {
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
        const result = document.getElementById("result").value;
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
            const result = document.getElementById("result").value;
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
// event listener to solve two power x
const twoPowx = document.querySelector("#two_power_X");
twoPowx.addEventListener("click", function () {
    const userIp = result.value;
    const output = `2**${userIp}`;
    result.value = output;
});
// event listener to solve ten power x
const tenPowx = document.querySelector("#ten_power_x");
tenPowx.addEventListener("click", function () {
    const userIp = result.value;
    const output = `10**${userIp}`;
    result.value = output;
});
// event listener to solve e power x
const ePowx = document.querySelector("#e_power_x");
ePowx.addEventListener("click", function () {
    const userIp = result.value;
    const output = `e**${userIp}`;
    result.value = output;
});
// event listener to solve exp
const ePow = document.querySelector("#exp");
ePow.addEventListener("click", function () {
    const userIp = result.value;
    const output = `e**${userIp}`;
    result.value = output;
});
// event listener to solve 1/x
const oneByX = document.querySelector("#one_by_x");
oneByX.addEventListener("click", function () {
    const userIp = result.value;
    const output = `1/${userIp}`;
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
// add Eventlistener to solve '+/-'
const PlusbyMinus = document.querySelector("#addition_by_subtraction");
PlusbyMinus.addEventListener("click", () => {
    (0, utils_1.getPlusbyMinus)(result);
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
// add Eventlistener to solve sin
const sinBtn = document.querySelector("#sin");
sinBtn.addEventListener("click", () => {
    (0, utils_1.getSine)(result.value);
});
// add Eventlistener to solve cos
const cosBtn = document.querySelector("#cos");
cosBtn.addEventListener("click", () => {
    (0, utils_1.getCos)(result.value);
});
// add Eventlistener to solve tan
const tanBtn = document.querySelector("#tan");
tanBtn.addEventListener("click", () => {
    (0, utils_1.getTan)(result.value);
});
// add Eventlistener to solve sec
const secBtn = document.querySelector("#sec");
secBtn.addEventListener("click", () => {
    (0, utils_1.getSec)(result.value);
});
// add Eventlistener to solve cosec
const cscBtn = document.querySelector("#csc");
cscBtn.addEventListener("click", () => {
    (0, utils_1.getCsc)(result.value);
});
// add Eventlistener to solve cot
const cotBtn = document.querySelector("#cot");
cotBtn.addEventListener("click", () => {
    (0, utils_1.getCot)(result.value);
});
// add Eventlistener to generate random numbers
const randBtn = document.querySelector("#rand");
randBtn.addEventListener("click", () => {
    (0, utils_1.getRand)(result);
});
// add Eventlistener to get degree
const degBtn = document.querySelector("#btnDeg");
degBtn.addEventListener("click", () => {
    (0, utils_1.getDeg)(result.value);
});
// add Eventlistener for dms
const dmsBtn = document.querySelector("#dms");
dmsBtn.addEventListener("click", () => {
    (0, utils_1.getDegreesToDMS)(result.value);
});
// add EventListener for f-e
const fixedtoExponent = document.querySelector("#fe");
fixedtoExponent.addEventListener("click", () => {
    (0, utils_1.getFe)(result.value);
});
// Memory buttons Eventlistener
const memoryButtons = document.querySelectorAll(".memory-button");
memoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonId = button.id;
        switch (buttonId) {
            case "memoryStore":
                if (result.value != "") {
                    (0, utils_1.memoryStore)(result);
                }
                break;
            case "memoryClear":
                (0, utils_1.memoryClear)();
                break;
            case "memoryRecall":
                (0, utils_1.memoryRecall)(result);
                break;
            case "memoryPlus":
                (0, utils_1.memoryOperation)(result, "add");
                break;
            case "memoryMinus":
                (0, utils_1.memoryOperation)(result, "subtract");
                break;
            default:
                break;
        }
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixHQUFHLG1CQUFtQixHQUFHLG1CQUFtQixHQUFHLHVCQUF1QixHQUFHLGFBQWEsR0FBRyx1QkFBdUIsR0FBRyxjQUFjLEdBQUcsZUFBZSxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsY0FBYyxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsZUFBZSxHQUFHLHNCQUFzQixHQUFHLGVBQWUsR0FBRyxnQkFBZ0IsR0FBRyxtQkFBbUIsR0FBRyx5QkFBeUIsR0FBRyxxQkFBcUIsR0FBRyxpQkFBaUI7QUFDMWE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxzREFBc0QsTUFBRTtBQUN4RDtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COzs7Ozs7O1VDMVhwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2I7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCLG1CQUFPLENBQUMsMkNBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwQkFBMEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1jYWxjdWxhdG9yLy4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL3RzLWNhbGN1bGF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtY2FsY3VsYXRvci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWVtb3J5UmVjYWxsID0gZXhwb3J0cy5tZW1vcnlDbGVhciA9IGV4cG9ydHMubWVtb3J5U3RvcmUgPSBleHBvcnRzLm1lbW9yeU9wZXJhdGlvbiA9IGV4cG9ydHMuZ2V0RmUgPSBleHBvcnRzLmdldERlZ3JlZXNUb0RNUyA9IGV4cG9ydHMuZ2V0RGVnID0gZXhwb3J0cy5nZXRSYW5kID0gZXhwb3J0cy5nZXRDb3QgPSBleHBvcnRzLmdldENzYyA9IGV4cG9ydHMuZ2V0U2VjID0gZXhwb3J0cy5nZXRUYW4gPSBleHBvcnRzLmdldENvcyA9IGV4cG9ydHMuZ2V0U2luZSA9IGV4cG9ydHMuZ2V0UGx1c2J5TWludXMgPSBleHBvcnRzLmdldENlaWwgPSBleHBvcnRzLmdldEZsb29yID0gZXhwb3J0cy5nZXRBYnNvbHV0ZSA9IGV4cG9ydHMuY2FsY3VsYXRlQ3ViZVNxcnQgPSBleHBvcnRzLmNhbGN1bGF0ZVNxcnQgPSBleHBvcnRzLmNhbGN1bGF0ZSA9IHZvaWQgMDtcbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBmYWN0b3JpYWwgYW5kIG5vcm1hbCBjYWxjdWxhdGlvblxuZnVuY3Rpb24gY2FsY3VsYXRlKGlucHV0KSB7XG4gICAgbGV0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdWx0XCIpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGlucHV0IGluY2x1ZGVzIHRoZSBcIiFcIiBzeW1ib2wgdGhlbiBwZXJmb3JtIGZhY3RvcmlhbCBmdW5jdGlvblxuICAgICAgICBpZiAoaW5wdXQuaW5jbHVkZXMoXCIhXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUludChpbnB1dC5zbGljZSgwLCAtMSkpO1xuICAgICAgICAgICAgLy8gbmVlZCBmb3IgdGhlIHR5cGUgZ3VhcmQgb24gcmVzdWx0RmFjdCwgc2luY2Ugd2UgYXJlIGltbWVkaWF0ZWx5IGNvbnZlcnRpbmcgaXQgdG8gYSBzdHJpbmcgdXNpbmcgdGhlIHRvU3RyaW5nKCkgbWV0aG9kXG4gICAgICAgICAgICBjb25zdCByZXN1bHRGYWN0ID0gZmFjdG9yaWFsKG51bSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIC8vIGFzc2lnbiB0aGUgY2FsY3VsYXRlZCBmYWN0b3JpYWwgdmFsdWUgYmFjayB0byB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3VsdFwiKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHRFbGVtKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0RWxlbS52YWx1ZSA9IHJlc3VsdEZhY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXQuaW5jbHVkZXMoXCLPgFwiKSB8fCBpbnB1dC5pbmNsdWRlcyhcImVcIikpIHtcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgJ8+AJyBhbmQgJ2UnIHdpdGggdGhlaXIgY29ycmVzcG9uZGluZyBudW1lcmljYWwgdmFsdWVzXG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoLyhefFstKyovXSnPgC9nLCBcIiQxMy4xNDE1OTI2NTM1OVwiKTtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvKF58Wy0rKi9dKWUvZywgXCIkMTIuNzE4MjgxODI4NDZcIik7XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoL8+AKD89XFxkKS9nLCBcIjMuMTQxNTkyNjUzNTkqXCIpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC9lKD89XFxkKS9nLCBcIjIuNzE4MjgxODI4NDYqXCIpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC8oPzw9XFxkfFxcLinPgC9nLCBcIiozLjE0MTU5MjY1MzU5XCIpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC8oPzw9XFxkfFxcLillL2csIFwiKjIuNzE4MjgxODI4NDZcIik7XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoL8+AJC9nLCBcIiozLjE0MTU5MjY1MzU5XCIpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC9lJC9nLCBcIioyLjcxODI4MTgyODQ2XCIpO1xuICAgICAgICAgICAgLy8gRXZhbHVhdGUgdGhlIGV4cHJlc3Npb25cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0RXZhbCA9IGV2YWwoaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHJlc3VsdEV2YWwudG9GaXhlZCgxMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IFwiSW52YWxpZCBleHByZXNzaW9uXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgaWYgaW5wdXQgaW5jbHVkZXMgbG9nXG4gICAgICAgIGVsc2UgaWYgKGlucHV0LmluY2x1ZGVzKFwibG9nXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBsb2dSZXN1bHQgPSBldmFsdWF0ZUxvZyhpbnB1dCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvZ1Jlc3VsdCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IGxvZ1Jlc3VsdC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gbG9nUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGFuZCBldmFsdWF0ZSBpZiBpbnB1dCBpbmNsdWRlcyBsblxuICAgICAgICBlbHNlIGlmIChpbnB1dC5pbmNsdWRlcyhcImxuXCIpKSB7XG4gICAgICAgICAgICBsZXQgbmF0dXJhbExvZ1Jlc3VsdCA9IGV2YWx1YXRlTmF0dXJhbExvZyhpbnB1dCk7XG4gICAgICAgICAgICAvLyB1c2VkIHR5cGUgZ3VhcmRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmF0dXJhbExvZ1Jlc3VsdCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIG5hdHVyYWxMb2dSZXN1bHQgPSBuYXR1cmFsTG9nUmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQudmFsdWUgPSBuYXR1cmFsTG9nUmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGFuZCBldmFsdWF0ZSByb290XG4gICAgICAgIGVsc2UgaWYgKGlucHV0LmluY2x1ZGVzKFwi4oiaXCIpKSB7XG4gICAgICAgICAgICBsZXQgcm9vdFJlc3VsdCA9IGNhbGN1bGF0ZVJvb3QoaW5wdXQpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByb290UmVzdWx0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgcm9vdFJlc3VsdCA9IHJvb3RSZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSByb290UmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2UgZXZhbHVhdGUgdGhlIGlucHV0IHVzaW5nIHRoZSBldmFsIGZ1bmN0aW9uXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVwbGFjZSBkb3VibGUgbmVnYXRpdmUgc2lnbnMgd2l0aCBhIHNpbmdsZSBwb3NpdGl2ZSBzaWduXG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoLy0tL2csIFwiK1wiKTtcbiAgICAgICAgICAgIC8vIEV2YWx1YXRlIGV4cHJlc3Npb24gdXNpbmcgZXZhbCgpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJSZXN1bHQgPSBldmFsKGlucHV0KTtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSBleHByUmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSBcIkludmFsaWQgaW5wdXRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuY2FsY3VsYXRlID0gY2FsY3VsYXRlO1xuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXN1bHRcIik7XG4vLyBmYWN0b3JpYWwgZnVuY3Rpb25cbmZ1bmN0aW9uIGZhY3RvcmlhbChudW0pIHtcbiAgICBpZiAodHlwZW9mIG51bSAhPT0gXCJudW1iZXJcIiB8fCBudW0gPCAwIHx8IE1hdGguZmxvb3IobnVtKSAhPT0gbnVtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXRcIik7XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSAxO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bTsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCAqPSBpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLy8gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIGxvZ1xuZnVuY3Rpb24gZXZhbHVhdGVMb2coaW5wdXQpIHtcbiAgICAvLyBzcGxpdCB0aGUgaW5wdXQgdmFsdWUgaW50byB0aGUgbnVtYmVyIGJlZm9yZSBhbmQgYWZ0ZXIgJ2xvZydcbiAgICBjb25zdCBbYmFzZSwgbnVtYmVyXSA9IGlucHV0LnNwbGl0KFwibG9nXCIpO1xuICAgIC8vIGNvbnZlcnQgdGhlIGJhc2UgYW5kIG51bWJlciB0byBudW1iZXJzIHVzaW5nIHRoZSBOdW1iZXIoKSBtZXRob2RcbiAgICBjb25zdCBiYXNlTnVtID0gTnVtYmVyKGJhc2UpIHx8IDEwO1xuICAgIGNvbnN0IG51bWJlck51bSA9IE51bWJlcihudW1iZXIpO1xuICAgIC8vIGNhbGN1bGF0ZSB0aGUgbG9nYXJpdGhtIHdpdGggdGhlIHNwZWNpZmllZCBiYXNlIHVzaW5nIHRoZSBNYXRoLmxvZygpIG1ldGhvZCBhbmQgZGlzcGxheSB0aGUgcmVzdWx0XG4gICAgY29uc3QgdGVtcEFuc3dlciA9IE1hdGgubG9nKG51bWJlck51bSkgLyBNYXRoLmxvZyhiYXNlTnVtKTtcbiAgICBjb25zdCByZXN1bHRMb2cgPSB0ZW1wQW5zd2VyLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgZGVjaW1hbEluZGV4ID0gcmVzdWx0TG9nLmluZGV4T2YoXCIuXCIpO1xuICAgIGNvbnN0IG11bHRpcGxpZWROdW0gPSBkZWNpbWFsSW5kZXggPiAwICYmIHJlc3VsdExvZ1tkZWNpbWFsSW5kZXggLSAxXSA9PT0gXCIwXCJcbiAgICAgICAgPyBOdW1iZXIocmVzdWx0TG9nKVxuICAgICAgICA6IHRlbXBBbnN3ZXI7XG4gICAgcmV0dXJuIG11bHRpcGxpZWROdW07XG59XG4vLyBmdW5jdGlvbiB0byBjYWxjdWxhdGUgTmF0dXJhbCBMb2dcbmZ1bmN0aW9uIGV2YWx1YXRlTmF0dXJhbExvZyhpbnB1dCkge1xuICAgIGNvbnN0IG1hdGNoID0gaW5wdXQubWF0Y2goL14oXFxkKilsbiguKykkLyk7XG4gICAgbGV0IGNvZWZmaWNpZW50ID0gMTtcbiAgICBsZXQgeCA9IHBhcnNlRmxvYXQoaW5wdXQpO1xuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dFwiKTtcbiAgICB9XG4gICAgY29lZmZpY2llbnQgPSBtYXRjaFsxXSA/IHBhcnNlSW50KG1hdGNoWzFdKSA6IDE7XG4gICAgLy8gYWRkIG51bGwgY2hlY2sgYW5kIGRlZmF1bHQgdmFsdWUgb2YgMFxuICAgIHggPSBwYXJzZUZsb2F0KG1hdGNoWzJdIHx8IFwiMFwiKTtcbiAgICBsZXQgcmVzdWx0TmF0dXJhbExvZyA9IGNvZWZmaWNpZW50ICogTWF0aC5sb2coeCk7XG4gICAgcmV0dXJuIHJlc3VsdE5hdHVyYWxMb2c7XG59XG4vLyBmdW5jdGlvbiB0byBjYWxjdWxhdGUgcm9vdFxuZnVuY3Rpb24gY2FsY3VsYXRlUm9vdChpbnB1dCkge1xuICAgIGNvbnN0IHBhcnRzID0gaW5wdXQuc3BsaXQoXCLiiJpcIik7XG4gICAgLy8gYWRkIG51bGwgY2hlY2sgYW5kIGRlZmF1bHQgdmFsdWUgb2YgMFxuICAgIGNvbnN0IHggPSBwYXJzZUZsb2F0KHBhcnRzWzFdIHx8IFwiMFwiKTtcbiAgICBpZiAoaXNOYU4oeCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dFwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBhZGQgbnVsbCBjaGVjayBhbmQgZGVmYXVsdCB2YWx1ZSBvZiAwXG4gICAgICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KHBhcnRzWzBdIHx8IFwiMFwiKTtcbiAgICAgICAgaWYgKGlzTmFOKHkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHgsIDEgLyB5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dFwiKTtcbiAgICB9XG59XG4vLyBmdW5jdGlvbiB0byBjYWxjdWxhdGUgU3F1YXJlIHJvb3RcbmZ1bmN0aW9uIGNhbGN1bGF0ZVNxcnQoaW5wdXQpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICBpZiAoaXNOYU4obnVtKSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQobnVtKS50b1N0cmluZygpO1xuICAgIH1cbn1cbmV4cG9ydHMuY2FsY3VsYXRlU3FydCA9IGNhbGN1bGF0ZVNxcnQ7XG4vLyBmdW5jdGlvbiB0byBjYWxjdWxhdGUgY3ViZSByb290XG5mdW5jdGlvbiBjYWxjdWxhdGVDdWJlU3FydChpbnB1dCkge1xuICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoaW5wdXQpO1xuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2JydChudW0pLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5jYWxjdWxhdGVDdWJlU3FydCA9IGNhbGN1bGF0ZUN1YmVTcXJ0O1xuLy8gZnVuY3Rpb24gdG8gZ2VuZXJhdGUgYWJzb2x1dGUgdmFsdWVcbmZ1bmN0aW9uIGdldEFic29sdXRlKGlucHV0KSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdChpbnB1dCk7XG4gICAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMobnVtKS50b1N0cmluZygpO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0QWJzb2x1dGUgPSBnZXRBYnNvbHV0ZTtcbi8vIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIEZsb29yIHZhbHVlXG5mdW5jdGlvbiBnZXRGbG9vcihpbnB1dCkge1xuICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoaW5wdXQpO1xuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtKS50b1N0cmluZygpO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0Rmxvb3IgPSBnZXRGbG9vcjtcbi8vIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIENlaWwgdmFsdWVcbmZ1bmN0aW9uIGdldENlaWwoaW5wdXQpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICBpZiAoaXNOYU4obnVtKSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtKS50b1N0cmluZygpO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0Q2VpbCA9IGdldENlaWw7XG4vLyBmdW5jdGlvbiB0byB0b2dnbGUgb3BlcmFuZCBzaWduXG5mdW5jdGlvbiBnZXRQbHVzYnlNaW51cyhpbnB1dCkge1xuICAgIGxldCB1c2VyU3RyID0gaW5wdXQudmFsdWUudG9TdHJpbmcoKTtcbiAgICBpZiAodXNlclN0ci5jaGFyQXQoMCkgPT09IFwiLVwiKSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUuc3Vic3RyaW5nKDEsIGlucHV0LnZhbHVlLmxlbmd0aCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiLVwiICsgaW5wdXQudmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRQbHVzYnlNaW51cyA9IGdldFBsdXNieU1pbnVzO1xuLy8gY2hlY2sgd2hpY2ggdW5pdCBvZiBhbmdsZSBpcyBzZWxlY3RlZCBieSB1c2VyXG5sZXQgdW5pdE9mQW5nbGUgPSBcIkRFR1wiO1xuY29uc3QgYnV0dG9uT2ZVbml0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWdcIik7XG5idXR0b25PZlVuaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB1bml0T2ZBbmdsZSA9IHVuaXRPZkFuZ2xlID09PSBcIkRFR1wiID8gXCJSQURcIiA6IFwiREVHXCI7XG4gICAgYnV0dG9uT2ZVbml0LmlubmVySFRNTCA9IHVuaXRPZkFuZ2xlO1xufSk7XG4vLyBjb21tb24gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIGFsbCBUcmlnb25vbWV0cnkgZnVuY3Rpb25zXG5mdW5jdGlvbiBjYWxjdWxhdGVUcmlnVmFsdWUoaW5wdXQsIHRyaWdGdW5jKSB7XG4gICAgaWYgKHVuaXRPZkFuZ2xlID09PSBcIlJBRFwiKSB7XG4gICAgICAgIGxldCByYWRpYW5zID0gcGFyc2VGbG9hdChpbnB1dCk7XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IHRyaWdGdW5jKHJhZGlhbnMpLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHVuaXRPZkFuZ2xlID09PSBcIkRFR1wiKSB7XG4gICAgICAgIGxldCBkZWdyZWUgPSBwYXJzZUZsb2F0KGlucHV0KSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gdHJpZ0Z1bmMoZGVncmVlKS50b1N0cmluZygpO1xuICAgIH1cbn1cbi8vIGZ1bmN0aW9uIGZvciBnZXQgc2luZSB2YWx1ZVxuZnVuY3Rpb24gZ2V0U2luZShpbnB1dCkge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGN1bGF0ZVRyaWdWYWx1ZShpbnB1dCwgTWF0aC5zaW4pO1xufVxuZXhwb3J0cy5nZXRTaW5lID0gZ2V0U2luZTtcbi8vIGZ1bmN0aW9uIGZvciBnZXQgY29zIHZhbHVlXG5mdW5jdGlvbiBnZXRDb3MoaW5wdXQpIHtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXRcIik7XG4gICAgfVxuICAgIHJldHVybiBjYWxjdWxhdGVUcmlnVmFsdWUoaW5wdXQsIE1hdGguY29zKTtcbn1cbmV4cG9ydHMuZ2V0Q29zID0gZ2V0Q29zO1xuLy8gZnVuY3Rpb24gZm9yIGdldCB0YW4gdmFsdWVcbmZ1bmN0aW9uIGdldFRhbihpbnB1dCkge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGN1bGF0ZVRyaWdWYWx1ZShpbnB1dCwgTWF0aC50YW4pO1xufVxuZXhwb3J0cy5nZXRUYW4gPSBnZXRUYW47XG4vLyBmdW5jdGlvbiBmb3IgZ2V0IHNlYyB2YWx1ZVxuZnVuY3Rpb24gZ2V0U2VjKGlucHV0KSB7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0XCIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY3VsYXRlVHJpZ1ZhbHVlKGlucHV0LCAocmFkaWFucykgPT4gMSAvIE1hdGguY29zKHJhZGlhbnMpKTtcbn1cbmV4cG9ydHMuZ2V0U2VjID0gZ2V0U2VjO1xuLy8gZnVuY3Rpb24gZm9yIGdldCBjb3NlYyB2YWx1ZVxuZnVuY3Rpb24gZ2V0Q3NjKGlucHV0KSB7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0XCIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY3VsYXRlVHJpZ1ZhbHVlKGlucHV0LCAocmFkaWFucykgPT4gMSAvIE1hdGguc2luKHJhZGlhbnMpKTtcbn1cbmV4cG9ydHMuZ2V0Q3NjID0gZ2V0Q3NjO1xuLy8gZnVuY3Rpb24gZm9yIGdldCBjb3QgdmFsdWVcbmZ1bmN0aW9uIGdldENvdChpbnB1dCkge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGN1bGF0ZVRyaWdWYWx1ZShpbnB1dCwgKHJhZGlhbnMpID0+IDEgLyBNYXRoLnRhbihyYWRpYW5zKSk7XG59XG5leHBvcnRzLmdldENvdCA9IGdldENvdDtcbi8vIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHJhbmRvbSBudW1iZXJzXG5mdW5jdGlvbiBnZXRSYW5kKGlucHV0KSB7XG4gICAgaW5wdXQudmFsdWUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCk7XG59XG5leHBvcnRzLmdldFJhbmQgPSBnZXRSYW5kO1xuLy8gZnVuY3Rpb24gdG8gZ2V0IGRlZ3JlZVxuZnVuY3Rpb24gZ2V0RGVnKGlucHV0KSB7XG4gICAgaWYgKHVuaXRPZkFuZ2xlID09PSBcIlJBRFwiKSB7XG4gICAgICAgIGxldCBkZWcgPSBOdW1iZXIoaW5wdXQpICogKDE4MCAvIE1hdGguUEkpO1xuICAgICAgICByZXN1bHQudmFsdWUgPSBkZWcudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IChOdW1iZXIocmVzdWx0LnZhbHVlKSAvIDAuMDE0NykudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLmdldERlZyA9IGdldERlZztcbi8vIGZ1bmN0aW9uIHRvIGdldCBEZWdyZWUgdG8gRE1TXG5mdW5jdGlvbiBnZXREZWdyZWVzVG9ETVMoaW5wdXQpIHtcbiAgICBpZiAodW5pdE9mQW5nbGUgPT09IFwiREVHXCIpIHtcbiAgICAgICAgbGV0IGQgPSBNYXRoLmZsb29yKE51bWJlcihpbnB1dCkpO1xuICAgICAgICBsZXQgbSA9IE1hdGguZmxvb3IoKE51bWJlcihpbnB1dCkgLSBkKSAqIDYwKTtcbiAgICAgICAgbGV0IHMgPSAoKE51bWJlcihpbnB1dCkgLSBkIC0gbSAvIDYwKSAqIDM2MDApLnRvRml4ZWQoMik7XG4gICAgICAgIGlmIChzID09IFwiNjBcIikge1xuICAgICAgICAgICAgbSsrO1xuICAgICAgICAgICAgcyA9IFwiMFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtID09IDYwKSB7XG4gICAgICAgICAgICBkKys7XG4gICAgICAgICAgICBtID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQudmFsdWUgPSBgJHtkfcKwICR7bX0nICR7c31cImA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBzZWxlY3QgREVHIG9wdGlvbiBmaXJzdFwiKTtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gXCJcIjtcbiAgICB9XG59XG5leHBvcnRzLmdldERlZ3JlZXNUb0RNUyA9IGdldERlZ3JlZXNUb0RNUztcbi8vIGZ1bmN0aW9uIHRvIGdldCBmaXhlZCB0byBleHBvbmVudFxuZnVuY3Rpb24gZ2V0RmUoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT0gXCJcIiB8fCBpbnB1dCA9PSBcIjBcIikge1xuICAgICAgICBpbnB1dCA9IFwiMFwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaW5wdXQgPSBgJHtpbnB1dH1lKzBgO1xuICAgIH1cbiAgICByZXN1bHQudmFsdWUgPSBpbnB1dDtcbn1cbmV4cG9ydHMuZ2V0RmUgPSBnZXRGZTtcbmZ1bmN0aW9uIGdldE1lbW9yeVZhbHVlKCkge1xuICAgIHJldHVybiBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbW9yeVNob3dcIikuaW5uZXJIVE1MKTtcbn1cbi8vIGZ1bmN0aW9uIGZvciBtZW1vcnkgYWRkaXRpb24gYW5kIHN1YnRyYWN0aW9uXG5mdW5jdGlvbiBtZW1vcnlPcGVyYXRpb24oaW5wdXQsIG9wZXJhdGlvbikge1xuICAgIGNvbnN0IGlucHV0VmFsID0gcGFyc2VJbnQoaW5wdXQudmFsdWUpO1xuICAgIGlmICghaXNOYU4oaW5wdXRWYWwpKSB7XG4gICAgICAgIGxldCBtZW1vcnlWYWwgPSBnZXRNZW1vcnlWYWx1ZSgpO1xuICAgICAgICBpZiAob3BlcmF0aW9uID09PSBcImFkZFwiKSB7XG4gICAgICAgICAgICBtZW1vcnlWYWwgKz0gaW5wdXRWYWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3BlcmF0aW9uID09PSBcInN1YnRyYWN0XCIpIHtcbiAgICAgICAgICAgIG1lbW9yeVZhbCAtPSBpbnB1dFZhbDtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbW9yeVNob3dcIikuaW5uZXJIVE1MID0gbWVtb3J5VmFsLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGxldCBtZW1vcnlWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbW9yeVNob3dcIik7XG4gICAgaWYgKG1lbW9yeVZhbC5pbm5lckhUTUwgPj0gXCIxXCIgfHwgbWVtb3J5VmFsLmlubmVySFRNTCA8PSBcIjFcIikge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbW9yeUNsZWFyXCIpLmRpc2FibGVkID1cbiAgICAgICAgICAgIGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbW9yeVJlY2FsbFwiKS5kaXNhYmxlZCA9XG4gICAgICAgICAgICBmYWxzZTtcbiAgICB9XG59XG5leHBvcnRzLm1lbW9yeU9wZXJhdGlvbiA9IG1lbW9yeU9wZXJhdGlvbjtcbmZ1bmN0aW9uIHVwZGF0ZU1lbW9yeUJ1dHRvbnMoKSB7XG4gICAgbGV0IG1lbW9yeVZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVtb3J5U2hvd1wiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbW9yeUNsZWFyXCIpLmRpc2FibGVkID1cbiAgICAgICAgbWVtb3J5VmFsLmlubmVySFRNTCA9PT0gXCIwXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1vcnlSZWNhbGxcIikuZGlzYWJsZWQgPVxuICAgICAgICBtZW1vcnlWYWwuaW5uZXJIVE1MID09PSBcIjBcIjtcbn1cbi8vIGZ1bmN0aW9uIHRvIHN0b3JlIG1lbW9yeVxuZnVuY3Rpb24gbWVtb3J5U3RvcmUoaW5wdXQpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbW9yeVNob3dcIikuaW5uZXJIVE1MID0gaW5wdXQudmFsdWUgfHwgXCIwXCI7XG4gICAgdXBkYXRlTWVtb3J5QnV0dG9ucygpO1xufVxuZXhwb3J0cy5tZW1vcnlTdG9yZSA9IG1lbW9yeVN0b3JlO1xuLy8gZnVuY3Rpb24gdG8gY2xlYXIgbWVtb3J5XG5mdW5jdGlvbiBtZW1vcnlDbGVhcigpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbW9yeVNob3dcIikuaW5uZXJIVE1MID0gXCJcIiB8fCBcIjBcIjtcbiAgICB1cGRhdGVNZW1vcnlCdXR0b25zKCk7XG59XG5leHBvcnRzLm1lbW9yeUNsZWFyID0gbWVtb3J5Q2xlYXI7XG4vLyBmdW5jdGlvbiBmb3IgbWVtb3J5IHJlY2FsbFxuZnVuY3Rpb24gbWVtb3J5UmVjYWxsKGlucHV0KSB7XG4gICAgaW5wdXQudmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbW9yeVNob3dcIikuaW5uZXJIVE1MO1xufVxuZXhwb3J0cy5tZW1vcnlSZWNhbGwgPSBtZW1vcnlSZWNhbGw7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2EsIF9iLCBfYztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlscy91dGlsc1wiKTtcbi8vIHRvZ2dsZSBidXR0b25cbmNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLWJ1dHRvblwiKTtcbmNvbnN0IGJ1dHRvbnMxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24xXCIpO1xuY29uc3QgYnV0dG9uczIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbjJcIik7XG4vLyB0b2dnbGUgYnV0dG9uIGV2ZW50IGxpc3RlbmVyXG50b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidXR0b25zMS5mb3JFYWNoKChidXR0b24xKSA9PiB7XG4gICAgICAgIGJ1dHRvbjEuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgICBidXR0b25zMi5mb3JFYWNoKChidXR0b24yKSA9PiB7XG4gICAgICAgIGJ1dHRvbjIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9KTtcbn0pO1xuLy8gc2hvdyBkcm9wZG93biBtZW51IG9uIFRyaWdvbmltZXRyeSBidXR0b24gY2xpY2tcbmNvbnN0IGRyb3BidG5UcmlnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkJ0blRyaWdcIik7XG5jb25zdCBkcm9wZG93bkNvbnRlbnRUcmlnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteURyb3Bkb3duVHJpZ1wiKTtcbi8vIHNob3cgZHJvcGRvd24gbWVudSBvbiBGdW5jdGlvbiBidXR0b24gY2xpY2tcbmNvbnN0IGRyb3BidG5GdW5jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkJ0bkZ1bmNcIik7XG5jb25zdCBkcm9wZG93bkNvbnRlbnRGdW5jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteURyb3Bkb3duRnVuY1wiKTtcbmlmIChkcm9wYnRuVHJpZyAmJiBkcm9wZG93bkNvbnRlbnRUcmlnKSB7XG4gICAgZHJvcGJ0blRyaWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZHJvcGRvd25Db250ZW50VHJpZy5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudFRyaWcuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcbiAgICB9KTtcbiAgICBpZiAoZHJvcGJ0bkZ1bmMgJiYgZHJvcGRvd25Db250ZW50RnVuYykge1xuICAgICAgICBkcm9wYnRuRnVuYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50RnVuYy5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRGdW5jLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgYm90aCBkcm9wZG93biwgZGlzcGxheSBub25lIHdoZW4gdXNlciBjbGlja3Mgb3V0c2lkZSBkcm9wZG93biBidXR0b25zXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghZHJvcGJ0blRyaWcuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICAgICAgICAgICFkcm9wZG93bkNvbnRlbnRUcmlnLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRUcmlnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZHJvcGJ0bkZ1bmMuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICAgICAgICAgICFkcm9wZG93bkNvbnRlbnRGdW5jLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRGdW5jLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuY29uc3QgYXJyID0gW1xuICAgIFwiMFwiLFxuICAgIFwiMVwiLFxuICAgIFwiMlwiLFxuICAgIFwiM1wiLFxuICAgIFwiNFwiLFxuICAgIFwiNVwiLFxuICAgIFwiNlwiLFxuICAgIFwiN1wiLFxuICAgIFwiOFwiLFxuICAgIFwiOVwiLFxuICAgIFwiK1wiLFxuICAgIFwiLVwiLFxuICAgIFwiL1wiLFxuICAgIFwiKlwiLFxuICAgIFwiJVwiLFxuICAgIFwiKFwiLFxuICAgIFwiKVwiLFxuICAgIFwiLlwiLFxuICAgIFwiz4BcIixcbiAgICBcImVcIixcbiAgICBcIiFcIixcbl07XG5jb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3VsdFwiKTtcbi8vIGRpc3BsYXkga2V5Ym9hcmQga2V5IG9uIHNjcmVlbiB3aGVuIGtleWJvYXJkIG51bWJlcnMgb3Igb3BlcmF0b3JzIGNsaWNrXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgaWYgKGFyci5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICAgIHJlc3VsdC52YWx1ZSArPSBldmVudC5rZXk7XG4gICAgfVxuICAgIGlmIChldmVudC5rZXkgPT09IFwiPVwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5jYWxjdWxhdGUpKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IFwiTWFsZm9ybWVkIEV4cHJlc3Npb25cIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IHJlc3VsdC52YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIC8vIHByZXZlbnQgZnJvbSBFbnRlciBrZXkgcHJlc3NpbmdcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59KTtcbi8vIEdldCBhbGwgdGhlIG51bWJlciBidXR0b25zXG5sZXQgbnVtYmVyQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYWxjQnRuXCIpO1xuLy8gQWRkIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBidXR0b25cbmZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgIG51bWJlckJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gR2V0IHRoZSB2YWx1ZSBvZiB0aGUgY2xpY2tlZCBidXR0b25cbiAgICAgICAgY29uc3QgYnV0dG9uVmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGlucHV0IGZpZWxkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLnZhbHVlO1xuICAgICAgICAvLyBBZGQgdGhlIGJ1dHRvbiB2YWx1ZSB0byB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIikudmFsdWUgPVxuICAgICAgICAgICAgcmVzdWx0ICsgYnV0dG9uVmFsdWU7XG4gICAgfSk7XG59XG4vLyB0byBnZXQgcmVzdWx0IG9uIHNjcmVlbiB3aGVuIGVxdWFsIGJ1dHRvbiBwcmVzc2VkIGJ5IHVzZXJcbmNvbnN0IGVxdWFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJldmFsXCIpO1xuaWYgKGVxdWFsQnRuKSB7XG4gICAgZXF1YWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLnZhbHVlO1xuICAgICAgICAgICAgKDAsIHV0aWxzXzEuY2FsY3VsYXRlKShyZXN1bHQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLnZhbHVlID1cbiAgICAgICAgICAgICAgICBcIk1hbGZvcm1lZCBFeHByZXNzaW9uXCI7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIGV2ZW50IGxpc3RlbmVyIHRvIHNvbHZlIHR3byBwb3dlciB4XG5jb25zdCB0d29Qb3d4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0d29fcG93ZXJfWFwiKTtcbnR3b1Bvd3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB1c2VySXAgPSByZXN1bHQudmFsdWU7XG4gICAgY29uc3Qgb3V0cHV0ID0gYDIqKiR7dXNlcklwfWA7XG4gICAgcmVzdWx0LnZhbHVlID0gb3V0cHV0O1xufSk7XG4vLyBldmVudCBsaXN0ZW5lciB0byBzb2x2ZSB0ZW4gcG93ZXIgeFxuY29uc3QgdGVuUG93eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVuX3Bvd2VyX3hcIik7XG50ZW5Qb3d4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXNlcklwID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IG91dHB1dCA9IGAxMCoqJHt1c2VySXB9YDtcbiAgICByZXN1bHQudmFsdWUgPSBvdXRwdXQ7XG59KTtcbi8vIGV2ZW50IGxpc3RlbmVyIHRvIHNvbHZlIGUgcG93ZXIgeFxuY29uc3QgZVBvd3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VfcG93ZXJfeFwiKTtcbmVQb3d4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXNlcklwID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IG91dHB1dCA9IGBlKioke3VzZXJJcH1gO1xuICAgIHJlc3VsdC52YWx1ZSA9IG91dHB1dDtcbn0pO1xuLy8gZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgZXhwXG5jb25zdCBlUG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBcIik7XG5lUG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXNlcklwID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IG91dHB1dCA9IGBlKioke3VzZXJJcH1gO1xuICAgIHJlc3VsdC52YWx1ZSA9IG91dHB1dDtcbn0pO1xuLy8gZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgMS94XG5jb25zdCBvbmVCeVggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29uZV9ieV94XCIpO1xub25lQnlYLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXNlcklwID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IG91dHB1dCA9IGAxLyR7dXNlcklwfWA7XG4gICAgcmVzdWx0LnZhbHVlID0gb3V0cHV0O1xufSk7XG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgc3F1YXJlIHJvb3Qgb2YgeFxuY29uc3Qgcm9vdFhidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RfeFwiKTtcbnJvb3RYYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9ICgwLCB1dGlsc18xLmNhbGN1bGF0ZVNxcnQpKHVzZXJJbnB1dCk7XG4gICAgcmVzdWx0LnZhbHVlID0gY2FsY3VsYXRlZFZhbHVlO1xufSk7XG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgY3ViZSByb290IG9mIHhcbmNvbnN0IHRocmVlUm9vdFhidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1YmVfcm9vdF94XCIpO1xudGhyZWVSb290WGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5jYWxjdWxhdGVDdWJlU3FydCkodXNlcklucHV0KTtcbiAgICByZXN1bHQudmFsdWUgPSBjYWxjdWxhdGVkVmFsdWU7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlICcrLy0nXG5jb25zdCBQbHVzYnlNaW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkaXRpb25fYnlfc3VidHJhY3Rpb25cIik7XG5QbHVzYnlNaW51cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldFBsdXNieU1pbnVzKShyZXN1bHQpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBhYnNvbHV0ZVxuKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN4X2Fic1wiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9ICgwLCB1dGlsc18xLmdldEFic29sdXRlKSh1c2VySW5wdXQpO1xuICAgIHJlc3VsdC52YWx1ZSA9IGNhbGN1bGF0ZWRWYWx1ZTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgZmxvb3JcbihfYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeF9mbG9vclwiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9ICgwLCB1dGlsc18xLmdldEZsb29yKSh1c2VySW5wdXQpO1xuICAgIHJlc3VsdC52YWx1ZSA9IGNhbGN1bGF0ZWRWYWx1ZTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgY2VpbFxuKF9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN4X2NlaWxcIikpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5nZXRDZWlsKSh1c2VySW5wdXQpO1xuICAgIHJlc3VsdC52YWx1ZSA9IGNhbGN1bGF0ZWRWYWx1ZTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgcm91bmRcbmNvbnN0IHJvdW5keCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeF9yb3VuZFwiKTtcbnJvdW5keC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5nZXRBYnNvbHV0ZSkodXNlcklucHV0KTtcbiAgICByZXN1bHQudmFsdWUgPSBjYWxjdWxhdGVkVmFsdWU7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlIHNpblxuY29uc3Qgc2luQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaW5cIik7XG5zaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXRTaW5lKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBjb3NcbmNvbnN0IGNvc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29zXCIpO1xuY29zQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0Q29zKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSB0YW5cbmNvbnN0IHRhbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFuXCIpO1xudGFuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0VGFuKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBzZWNcbmNvbnN0IHNlY0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VjXCIpO1xuc2VjQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0U2VjKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBjb3NlY1xuY29uc3QgY3NjQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjc2NcIik7XG5jc2NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXRDc2MpKHJlc3VsdC52YWx1ZSk7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlIGNvdFxuY29uc3QgY290QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3RcIik7XG5jb3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXRDb3QpKHJlc3VsdC52YWx1ZSk7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIGdlbmVyYXRlIHJhbmRvbSBudW1iZXJzXG5jb25zdCByYW5kQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYW5kXCIpO1xucmFuZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldFJhbmQpKHJlc3VsdCk7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIGdldCBkZWdyZWVcbmNvbnN0IGRlZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuRGVnXCIpO1xuZGVnQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0RGVnKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciBmb3IgZG1zXG5jb25zdCBkbXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rtc1wiKTtcbmRtc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldERlZ3JlZXNUb0RNUykocmVzdWx0LnZhbHVlKTtcbn0pO1xuLy8gYWRkIEV2ZW50TGlzdGVuZXIgZm9yIGYtZVxuY29uc3QgZml4ZWR0b0V4cG9uZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmZVwiKTtcbmZpeGVkdG9FeHBvbmVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldEZlKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBNZW1vcnkgYnV0dG9ucyBFdmVudGxpc3RlbmVyXG5jb25zdCBtZW1vcnlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW1vcnktYnV0dG9uXCIpO1xubWVtb3J5QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uSWQgPSBidXR0b24uaWQ7XG4gICAgICAgIHN3aXRjaCAoYnV0dG9uSWQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJtZW1vcnlTdG9yZVwiOlxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5tZW1vcnlTdG9yZSkocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVtb3J5Q2xlYXJcIjpcbiAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5tZW1vcnlDbGVhcikoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZW1vcnlSZWNhbGxcIjpcbiAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS5tZW1vcnlSZWNhbGwpKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVtb3J5UGx1c1wiOlxuICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLm1lbW9yeU9wZXJhdGlvbikocmVzdWx0LCBcImFkZFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZW1vcnlNaW51c1wiOlxuICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLm1lbW9yeU9wZXJhdGlvbikocmVzdWx0LCBcInN1YnRyYWN0XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=