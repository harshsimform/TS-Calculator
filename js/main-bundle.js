/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.memoryRecall = exports.memorySubtraction = exports.memoryAddition = exports.memoryClear = exports.memoryStore = exports.getFe = exports.getDegreesToDMS = exports.getDeg = exports.getRand = exports.getCot = exports.getCsc = exports.getSec = exports.getTan = exports.getCos = exports.getSine = exports.getPlusbyMinus = exports.getCeil = exports.getFloor = exports.getAbsolute = exports.calculateCubeSqrt = exports.calculateSqrt = exports.calculate = void 0;
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
        return "Invalid input";
    }
    return calculateTrigValue(input, Math.sin);
}
exports.getSine = getSine;
// function for get cos value
function getCos(input) {
    if (!input) {
        return "Invalid input";
    }
    return calculateTrigValue(input, Math.cos);
}
exports.getCos = getCos;
// function for get tan value
function getTan(input) {
    if (!input) {
        return "Invalid input";
    }
    return calculateTrigValue(input, Math.tan);
}
exports.getTan = getTan;
// function for get sec value
function getSec(input) {
    if (!input) {
        return "Invalid input";
    }
    return calculateTrigValue(input, (radians) => 1 / Math.cos(radians));
}
exports.getSec = getSec;
// function for get cosec value
function getCsc(input) {
    if (!input) {
        return "Invalid input";
    }
    return calculateTrigValue(input, (radians) => 1 / Math.sin(radians));
}
exports.getCsc = getCsc;
// function for get cot value
function getCot(input) {
    if (!input) {
        return "Invalid input";
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
// function to store memory
function memoryStore(input) {
    document.getElementById("memoryShow").innerHTML = input.value || "0";
}
exports.memoryStore = memoryStore;
// function to clear memory
function memoryClear() {
    document.getElementById("memoryShow").innerHTML =  false || "0";
}
exports.memoryClear = memoryClear;
function getMemoryValue() {
    return parseInt(document.getElementById("memoryShow").innerHTML);
}
// function for memory addition
function memoryAddition(input) {
    const inputVal = parseInt(input.value);
    if (!isNaN(inputVal)) {
        let showResult = (getMemoryValue() + inputVal).toString();
        document.getElementById("memoryShow").innerHTML = showResult;
    }
}
exports.memoryAddition = memoryAddition;
// function for memory subtraction
function memorySubtraction(input) {
    const inputVal = parseInt(input.value);
    if (!isNaN(inputVal)) {
        let showResult = (getMemoryValue() - inputVal).toString();
        document.getElementById("memoryShow").innerHTML = showResult;
    }
}
exports.memorySubtraction = memorySubtraction;
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
const sinBtn = document.getElementById("sin");
sinBtn.addEventListener("click", () => {
    (0, utils_1.getSine)(result.value);
});
// add Eventlistener to solve cos
const cosBtn = document.getElementById("cos");
cosBtn.addEventListener("click", () => {
    (0, utils_1.getCos)(result.value);
});
// add Eventlistener to solve tan
const tanBtn = document.getElementById("tan");
tanBtn.addEventListener("click", () => {
    (0, utils_1.getTan)(result.value);
});
// add Eventlistener to solve sec
const secBtn = document.getElementById("sec");
secBtn.addEventListener("click", () => {
    (0, utils_1.getSec)(result.value);
});
// add Eventlistener to solve cosec
const cscBtn = document.getElementById("csc");
cscBtn.addEventListener("click", () => {
    (0, utils_1.getCsc)(result.value);
});
// add Eventlistener to solve cot
const cotBtn = document.getElementById("cot");
cotBtn.addEventListener("click", () => {
    (0, utils_1.getCot)(result.value);
});
// add Eventlistener to generate random numbers
const randBtn = document.getElementById("rand");
randBtn.addEventListener("click", () => {
    (0, utils_1.getRand)(result);
});
// add Eventlistener to get degree
const degBtn = document.getElementById("btnDeg");
degBtn.addEventListener("click", () => {
    (0, utils_1.getDeg)(result.value);
});
// add Eventlistener for dms
const dmsBtn = document.getElementById("dms");
dmsBtn.addEventListener("click", () => {
    (0, utils_1.getDegreesToDMS)(result.value);
});
// add EventListener for f-e
const fixedtoExponent = document.getElementById("fe");
fixedtoExponent.addEventListener("click", () => {
    (0, utils_1.getFe)(result.value);
});
// Memory buttons Eventlistener
// Memory store functionality
let memoryStoreBtn = document.getElementById("memoryStore");
memoryStoreBtn.addEventListener("click", () => {
    if (result.value != "") {
        document.getElementById("memoryClear").disabled =
            false;
        document.getElementById("memoryRecall").disabled =
            false;
    }
    (0, utils_1.memoryStore)(result);
});
// Memory clear functionality
let memoryClearBtn = document.querySelector("#memoryClear");
memoryClearBtn.addEventListener("click", () => {
    document.getElementById("memoryClear").disabled = true;
    document.getElementById("memoryRecall").disabled =
        true;
    (0, utils_1.memoryClear)();
});
// Memory recall functionality
let memoryRecallBtn = document.getElementById("memoryRecall");
memoryRecallBtn.addEventListener("click", () => {
    (0, utils_1.memoryRecall)(result);
});
// Memory addition functionality
let memoryAdditionBtn = document.getElementById("memoryPlus");
memoryAdditionBtn.addEventListener("click", () => {
    (0, utils_1.memoryAddition)(result);
});
// Memory subtraction functionality
let memorySubtractBtn = document.getElementById("memoryMinus");
memorySubtractBtn.addEventListener("click", () => {
    (0, utils_1.memorySubtraction)(result);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixHQUFHLHlCQUF5QixHQUFHLHNCQUFzQixHQUFHLG1CQUFtQixHQUFHLG1CQUFtQixHQUFHLGFBQWEsR0FBRyx1QkFBdUIsR0FBRyxjQUFjLEdBQUcsZUFBZSxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsY0FBYyxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsZUFBZSxHQUFHLHNCQUFzQixHQUFHLGVBQWUsR0FBRyxnQkFBZ0IsR0FBRyxtQkFBbUIsR0FBRyx5QkFBeUIsR0FBRyxxQkFBcUIsR0FBRyxpQkFBaUI7QUFDcmM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxzREFBc0QsTUFBRTtBQUN4RDtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7Ozs7Ozs7VUM5V3BCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYjtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0IsbUJBQU8sQ0FBQywyQ0FBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBCQUEwQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtY2FsY3VsYXRvci8uL3NyYy91dGlscy91dGlscy50cyIsIndlYnBhY2s6Ly90cy1jYWxjdWxhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWNhbGN1bGF0b3IvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm1lbW9yeVJlY2FsbCA9IGV4cG9ydHMubWVtb3J5U3VidHJhY3Rpb24gPSBleHBvcnRzLm1lbW9yeUFkZGl0aW9uID0gZXhwb3J0cy5tZW1vcnlDbGVhciA9IGV4cG9ydHMubWVtb3J5U3RvcmUgPSBleHBvcnRzLmdldEZlID0gZXhwb3J0cy5nZXREZWdyZWVzVG9ETVMgPSBleHBvcnRzLmdldERlZyA9IGV4cG9ydHMuZ2V0UmFuZCA9IGV4cG9ydHMuZ2V0Q290ID0gZXhwb3J0cy5nZXRDc2MgPSBleHBvcnRzLmdldFNlYyA9IGV4cG9ydHMuZ2V0VGFuID0gZXhwb3J0cy5nZXRDb3MgPSBleHBvcnRzLmdldFNpbmUgPSBleHBvcnRzLmdldFBsdXNieU1pbnVzID0gZXhwb3J0cy5nZXRDZWlsID0gZXhwb3J0cy5nZXRGbG9vciA9IGV4cG9ydHMuZ2V0QWJzb2x1dGUgPSBleHBvcnRzLmNhbGN1bGF0ZUN1YmVTcXJ0ID0gZXhwb3J0cy5jYWxjdWxhdGVTcXJ0ID0gZXhwb3J0cy5jYWxjdWxhdGUgPSB2b2lkIDA7XG4vLyBmdW5jdGlvbiB0byBjYWxjdWxhdGUgZmFjdG9yaWFsIGFuZCBub3JtYWwgY2FsY3VsYXRpb25cbmZ1bmN0aW9uIGNhbGN1bGF0ZShpbnB1dCkge1xuICAgIGxldCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3VsdFwiKTtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBpbnB1dCBpbmNsdWRlcyB0aGUgXCIhXCIgc3ltYm9sIHRoZW4gcGVyZm9ybSBmYWN0b3JpYWwgZnVuY3Rpb25cbiAgICAgICAgaWYgKGlucHV0LmluY2x1ZGVzKFwiIVwiKSkge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQoaW5wdXQuc2xpY2UoMCwgLTEpKTtcbiAgICAgICAgICAgIC8vIG5lZWQgZm9yIHRoZSB0eXBlIGd1YXJkIG9uIHJlc3VsdEZhY3QsIHNpbmNlIHdlIGFyZSBpbW1lZGlhdGVseSBjb252ZXJ0aW5nIGl0IHRvIGEgc3RyaW5nIHVzaW5nIHRoZSB0b1N0cmluZygpIG1ldGhvZFxuICAgICAgICAgICAgY29uc3QgcmVzdWx0RmFjdCA9IGZhY3RvcmlhbChudW0pLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAvLyBhc3NpZ24gdGhlIGNhbGN1bGF0ZWQgZmFjdG9yaWFsIHZhbHVlIGJhY2sgdG8gdGhlIGlucHV0IGZpZWxkXG4gICAgICAgICAgICBjb25zdCByZXN1bHRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXN1bHRcIik7XG4gICAgICAgICAgICBpZiAocmVzdWx0RWxlbSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdEVsZW0udmFsdWUgPSByZXN1bHRGYWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlucHV0LmluY2x1ZGVzKFwiz4BcIikgfHwgaW5wdXQuaW5jbHVkZXMoXCJlXCIpKSB7XG4gICAgICAgICAgICAvLyBSZXBsYWNlICfPgCcgYW5kICdlJyB3aXRoIHRoZWlyIGNvcnJlc3BvbmRpbmcgbnVtZXJpY2FsIHZhbHVlc1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC8oXnxbLSsqL10pz4AvZywgXCIkMTMuMTQxNTkyNjUzNTlcIik7XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoLyhefFstKyovXSllL2csIFwiJDEyLjcxODI4MTgyODQ2XCIpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC/PgCg/PVxcZCkvZywgXCIzLjE0MTU5MjY1MzU5KlwiKTtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvZSg/PVxcZCkvZywgXCIyLjcxODI4MTgyODQ2KlwiKTtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvKD88PVxcZHxcXC4pz4AvZywgXCIqMy4xNDE1OTI2NTM1OVwiKTtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvKD88PVxcZHxcXC4pZS9nLCBcIioyLjcxODI4MTgyODQ2XCIpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC/PgCQvZywgXCIqMy4xNDE1OTI2NTM1OVwiKTtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvZSQvZywgXCIqMi43MTgyODE4Mjg0NlwiKTtcbiAgICAgICAgICAgIC8vIEV2YWx1YXRlIHRoZSBleHByZXNzaW9uXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdEV2YWwgPSBldmFsKGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSByZXN1bHRFdmFsLnRvRml4ZWQoMTEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSBcIkludmFsaWQgZXhwcmVzc2lvblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGlmIGlucHV0IGluY2x1ZGVzIGxvZ1xuICAgICAgICBlbHNlIGlmIChpbnB1dC5pbmNsdWRlcyhcImxvZ1wiKSkge1xuICAgICAgICAgICAgY29uc3QgbG9nUmVzdWx0ID0gZXZhbHVhdGVMb2coaW5wdXQpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb2dSZXN1bHQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSBsb2dSZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IGxvZ1Jlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBhbmQgZXZhbHVhdGUgaWYgaW5wdXQgaW5jbHVkZXMgbG5cbiAgICAgICAgZWxzZSBpZiAoaW5wdXQuaW5jbHVkZXMoXCJsblwiKSkge1xuICAgICAgICAgICAgbGV0IG5hdHVyYWxMb2dSZXN1bHQgPSBldmFsdWF0ZU5hdHVyYWxMb2coaW5wdXQpO1xuICAgICAgICAgICAgLy8gdXNlZCB0eXBlIGd1YXJkXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5hdHVyYWxMb2dSZXN1bHQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBuYXR1cmFsTG9nUmVzdWx0ID0gbmF0dXJhbExvZ1Jlc3VsdC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gbmF0dXJhbExvZ1Jlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBhbmQgZXZhbHVhdGUgcm9vdFxuICAgICAgICBlbHNlIGlmIChpbnB1dC5pbmNsdWRlcyhcIuKImlwiKSkge1xuICAgICAgICAgICAgbGV0IHJvb3RSZXN1bHQgPSBjYWxjdWxhdGVSb290KGlucHV0KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcm9vdFJlc3VsdCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHJvb3RSZXN1bHQgPSByb290UmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gcm9vdFJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBlbHNlIGV2YWx1YXRlIHRoZSBpbnB1dCB1c2luZyB0aGUgZXZhbCBmdW5jdGlvblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgZG91YmxlIG5lZ2F0aXZlIHNpZ25zIHdpdGggYSBzaW5nbGUgcG9zaXRpdmUgc2lnblxuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC8tLS9nLCBcIitcIik7XG4gICAgICAgICAgICAvLyBFdmFsdWF0ZSBleHByZXNzaW9uIHVzaW5nIGV2YWwoKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHByUmVzdWx0ID0gZXZhbChpbnB1dCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gZXhwclJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmNhbGN1bGF0ZSA9IGNhbGN1bGF0ZTtcbmNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdWx0XCIpO1xuLy8gZmFjdG9yaWFsIGZ1bmN0aW9uXG5mdW5jdGlvbiBmYWN0b3JpYWwobnVtKSB7XG4gICAgaWYgKHR5cGVvZiBudW0gIT09IFwibnVtYmVyXCIgfHwgbnVtIDwgMCB8fCBNYXRoLmZsb29yKG51bSkgIT09IG51bSkge1xuICAgICAgICByZXR1cm4gXCJNYWxmb3JtZWQgRXhwcmVzc2lvblwiO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gMTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW07IGkrKykge1xuICAgICAgICByZXN1bHQgKj0gaTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBsb2dcbmZ1bmN0aW9uIGV2YWx1YXRlTG9nKGlucHV0KSB7XG4gICAgLy8gc3BsaXQgdGhlIGlucHV0IHZhbHVlIGludG8gdGhlIG51bWJlciBiZWZvcmUgYW5kIGFmdGVyICdsb2cnXG4gICAgY29uc3QgW2Jhc2UsIG51bWJlcl0gPSBpbnB1dC5zcGxpdChcImxvZ1wiKTtcbiAgICAvLyBjb252ZXJ0IHRoZSBiYXNlIGFuZCBudW1iZXIgdG8gbnVtYmVycyB1c2luZyB0aGUgTnVtYmVyKCkgbWV0aG9kXG4gICAgY29uc3QgYmFzZU51bSA9IE51bWJlcihiYXNlKSB8fCAxMDtcbiAgICBjb25zdCBudW1iZXJOdW0gPSBOdW1iZXIobnVtYmVyKTtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIGxvZ2FyaXRobSB3aXRoIHRoZSBzcGVjaWZpZWQgYmFzZSB1c2luZyB0aGUgTWF0aC5sb2coKSBtZXRob2QgYW5kIGRpc3BsYXkgdGhlIHJlc3VsdFxuICAgIGNvbnN0IHRlbXBBbnN3ZXIgPSBNYXRoLmxvZyhudW1iZXJOdW0pIC8gTWF0aC5sb2coYmFzZU51bSk7XG4gICAgY29uc3QgcmVzdWx0TG9nID0gdGVtcEFuc3dlci50b1N0cmluZygpO1xuICAgIGNvbnN0IGRlY2ltYWxJbmRleCA9IHJlc3VsdExvZy5pbmRleE9mKFwiLlwiKTtcbiAgICBjb25zdCBtdWx0aXBsaWVkTnVtID0gZGVjaW1hbEluZGV4ID4gMCAmJiByZXN1bHRMb2dbZGVjaW1hbEluZGV4IC0gMV0gPT09IFwiMFwiXG4gICAgICAgID8gTnVtYmVyKHJlc3VsdExvZylcbiAgICAgICAgOiB0ZW1wQW5zd2VyO1xuICAgIHJldHVybiBtdWx0aXBsaWVkTnVtO1xufVxuLy8gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIE5hdHVyYWwgTG9nXG5mdW5jdGlvbiBldmFsdWF0ZU5hdHVyYWxMb2coaW5wdXQpIHtcbiAgICBjb25zdCBtYXRjaCA9IGlucHV0Lm1hdGNoKC9eKFxcZCopbG4oLispJC8pO1xuICAgIGxldCBjb2VmZmljaWVudCA9IDE7XG4gICAgbGV0IHggPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIGxldCByZXN1bHROYXR1cmFsTG9nID0gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgICAgIHJldHVybiByZXN1bHROYXR1cmFsTG9nO1xuICAgIH1cbiAgICBjb2VmZmljaWVudCA9IG1hdGNoWzFdID8gcGFyc2VJbnQobWF0Y2hbMV0pIDogMTtcbiAgICAvLyBhZGQgbnVsbCBjaGVjayBhbmQgZGVmYXVsdCB2YWx1ZSBvZiAwXG4gICAgeCA9IHBhcnNlRmxvYXQobWF0Y2hbMl0gfHwgXCIwXCIpO1xuICAgIGxldCByZXN1bHROYXR1cmFsTG9nID0gY29lZmZpY2llbnQgKiBNYXRoLmxvZyh4KTtcbiAgICByZXR1cm4gcmVzdWx0TmF0dXJhbExvZztcbn1cbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSByb290XG5mdW5jdGlvbiBjYWxjdWxhdGVSb290KGlucHV0KSB7XG4gICAgY29uc3QgcGFydHMgPSBpbnB1dC5zcGxpdChcIuKImlwiKTtcbiAgICAvLyBhZGQgbnVsbCBjaGVjayBhbmQgZGVmYXVsdCB2YWx1ZSBvZiAwXG4gICAgY29uc3QgeCA9IHBhcnNlRmxvYXQocGFydHNbMV0gfHwgXCIwXCIpO1xuICAgIGlmIChpc05hTih4KSkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gYWRkIG51bGwgY2hlY2sgYW5kIGRlZmF1bHQgdmFsdWUgb2YgMFxuICAgICAgICBjb25zdCB5ID0gcGFyc2VGbG9hdChwYXJ0c1swXSB8fCBcIjBcIik7XG4gICAgICAgIGlmIChpc05hTih5KSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHgsIDEgLyB5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBpbnB1dFwiO1xuICAgIH1cbn1cbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBTcXVhcmUgcm9vdFxuZnVuY3Rpb24gY2FsY3VsYXRlU3FydChpbnB1dCkge1xuICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoaW5wdXQpO1xuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChudW0pLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5jYWxjdWxhdGVTcXJ0ID0gY2FsY3VsYXRlU3FydDtcbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBjdWJlIHJvb3RcbmZ1bmN0aW9uIGNhbGN1bGF0ZUN1YmVTcXJ0KGlucHV0KSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdChpbnB1dCk7XG4gICAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5jYnJ0KG51bSkudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLmNhbGN1bGF0ZUN1YmVTcXJ0ID0gY2FsY3VsYXRlQ3ViZVNxcnQ7XG4vLyBmdW5jdGlvbiB0byBnZW5lcmF0ZSBhYnNvbHV0ZSB2YWx1ZVxuZnVuY3Rpb24gZ2V0QWJzb2x1dGUoaW5wdXQpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICBpZiAoaXNOYU4obnVtKSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhudW0pLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRBYnNvbHV0ZSA9IGdldEFic29sdXRlO1xuLy8gZnVuY3Rpb24gdG8gZ2VuZXJhdGUgRmxvb3IgdmFsdWVcbmZ1bmN0aW9uIGdldEZsb29yKGlucHV0KSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdChpbnB1dCk7XG4gICAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW0pLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRGbG9vciA9IGdldEZsb29yO1xuLy8gZnVuY3Rpb24gdG8gZ2VuZXJhdGUgQ2VpbCB2YWx1ZVxuZnVuY3Rpb24gZ2V0Q2VpbChpbnB1dCkge1xuICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoaW5wdXQpO1xuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChudW0pLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRDZWlsID0gZ2V0Q2VpbDtcbi8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSBvcGVyYW5kIHNpZ25cbmZ1bmN0aW9uIGdldFBsdXNieU1pbnVzKGlucHV0KSB7XG4gICAgbGV0IHVzZXJTdHIgPSBpbnB1dC52YWx1ZS50b1N0cmluZygpO1xuICAgIGlmICh1c2VyU3RyLmNoYXJBdCgwKSA9PT0gXCItXCIpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZS5zdWJzdHJpbmcoMSwgaW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gXCItXCIgKyBpbnB1dC52YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLmdldFBsdXNieU1pbnVzID0gZ2V0UGx1c2J5TWludXM7XG4vLyBjaGVjayB3aGljaCB1bml0IG9mIGFuZ2xlIGlzIHNlbGVjdGVkIGJ5IHVzZXJcbmxldCB1bml0T2ZBbmdsZSA9IFwiREVHXCI7XG5jb25zdCBidXR0b25PZlVuaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZ1wiKTtcbmJ1dHRvbk9mVW5pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHVuaXRPZkFuZ2xlID0gdW5pdE9mQW5nbGUgPT09IFwiREVHXCIgPyBcIlJBRFwiIDogXCJERUdcIjtcbiAgICBidXR0b25PZlVuaXQuaW5uZXJIVE1MID0gdW5pdE9mQW5nbGU7XG59KTtcbi8vIGNvbW1vbiBmdW5jdGlvbiB0byBjYWxjdWxhdGUgYWxsIFRyaWdvbm9tZXRyeSBmdW5jdGlvbnNcbmZ1bmN0aW9uIGNhbGN1bGF0ZVRyaWdWYWx1ZShpbnB1dCwgdHJpZ0Z1bmMpIHtcbiAgICBpZiAodW5pdE9mQW5nbGUgPT09IFwiUkFEXCIpIHtcbiAgICAgICAgbGV0IHJhZGlhbnMgPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gdHJpZ0Z1bmMocmFkaWFucykudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodW5pdE9mQW5nbGUgPT09IFwiREVHXCIpIHtcbiAgICAgICAgbGV0IGRlZ3JlZSA9IHBhcnNlRmxvYXQoaW5wdXQpICogKE1hdGguUEkgLyAxODApO1xuICAgICAgICByZXN1bHQudmFsdWUgPSB0cmlnRnVuYyhkZWdyZWUpLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuLy8gZnVuY3Rpb24gZm9yIGdldCBzaW5lIHZhbHVlXG5mdW5jdGlvbiBnZXRTaW5lKGlucHV0KSB7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgfVxuICAgIHJldHVybiBjYWxjdWxhdGVUcmlnVmFsdWUoaW5wdXQsIE1hdGguc2luKTtcbn1cbmV4cG9ydHMuZ2V0U2luZSA9IGdldFNpbmU7XG4vLyBmdW5jdGlvbiBmb3IgZ2V0IGNvcyB2YWx1ZVxuZnVuY3Rpb24gZ2V0Q29zKGlucHV0KSB7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgfVxuICAgIHJldHVybiBjYWxjdWxhdGVUcmlnVmFsdWUoaW5wdXQsIE1hdGguY29zKTtcbn1cbmV4cG9ydHMuZ2V0Q29zID0gZ2V0Q29zO1xuLy8gZnVuY3Rpb24gZm9yIGdldCB0YW4gdmFsdWVcbmZ1bmN0aW9uIGdldFRhbihpbnB1dCkge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBpbnB1dFwiO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY3VsYXRlVHJpZ1ZhbHVlKGlucHV0LCBNYXRoLnRhbik7XG59XG5leHBvcnRzLmdldFRhbiA9IGdldFRhbjtcbi8vIGZ1bmN0aW9uIGZvciBnZXQgc2VjIHZhbHVlXG5mdW5jdGlvbiBnZXRTZWMoaW5wdXQpIHtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiBcIkludmFsaWQgaW5wdXRcIjtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGN1bGF0ZVRyaWdWYWx1ZShpbnB1dCwgKHJhZGlhbnMpID0+IDEgLyBNYXRoLmNvcyhyYWRpYW5zKSk7XG59XG5leHBvcnRzLmdldFNlYyA9IGdldFNlYztcbi8vIGZ1bmN0aW9uIGZvciBnZXQgY29zZWMgdmFsdWVcbmZ1bmN0aW9uIGdldENzYyhpbnB1dCkge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBpbnB1dFwiO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY3VsYXRlVHJpZ1ZhbHVlKGlucHV0LCAocmFkaWFucykgPT4gMSAvIE1hdGguc2luKHJhZGlhbnMpKTtcbn1cbmV4cG9ydHMuZ2V0Q3NjID0gZ2V0Q3NjO1xuLy8gZnVuY3Rpb24gZm9yIGdldCBjb3QgdmFsdWVcbmZ1bmN0aW9uIGdldENvdChpbnB1dCkge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBpbnB1dFwiO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY3VsYXRlVHJpZ1ZhbHVlKGlucHV0LCAocmFkaWFucykgPT4gMSAvIE1hdGgudGFuKHJhZGlhbnMpKTtcbn1cbmV4cG9ydHMuZ2V0Q290ID0gZ2V0Q290O1xuLy8gZnVuY3Rpb24gdG8gZ2VuZXJhdGUgcmFuZG9tIG51bWJlcnNcbmZ1bmN0aW9uIGdldFJhbmQoaW5wdXQpIHtcbiAgICBpbnB1dC52YWx1ZSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKTtcbn1cbmV4cG9ydHMuZ2V0UmFuZCA9IGdldFJhbmQ7XG4vLyBmdW5jdGlvbiB0byBnZXQgZGVncmVlXG5mdW5jdGlvbiBnZXREZWcoaW5wdXQpIHtcbiAgICBpZiAodW5pdE9mQW5nbGUgPT09IFwiUkFEXCIpIHtcbiAgICAgICAgbGV0IGRlZyA9IE51bWJlcihpbnB1dCkgKiAoMTgwIC8gTWF0aC5QSSk7XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGRlZy50b1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gKE51bWJlcihyZXN1bHQudmFsdWUpIC8gMC4wMTQ3KS50b1N0cmluZygpO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0RGVnID0gZ2V0RGVnO1xuLy8gZnVuY3Rpb24gdG8gZ2V0IERlZ3JlZSB0byBETVNcbmZ1bmN0aW9uIGdldERlZ3JlZXNUb0RNUyhpbnB1dCkge1xuICAgIGlmICh1bml0T2ZBbmdsZSA9PT0gXCJERUdcIikge1xuICAgICAgICBsZXQgZCA9IE1hdGguZmxvb3IoTnVtYmVyKGlucHV0KSk7XG4gICAgICAgIGxldCBtID0gTWF0aC5mbG9vcigoTnVtYmVyKGlucHV0KSAtIGQpICogNjApO1xuICAgICAgICBsZXQgcyA9ICgoTnVtYmVyKGlucHV0KSAtIGQgLSBtIC8gNjApICogMzYwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHMgPT0gXCI2MFwiKSB7XG4gICAgICAgICAgICBtKys7XG4gICAgICAgICAgICBzID0gXCIwXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG0gPT0gNjApIHtcbiAgICAgICAgICAgIGQrKztcbiAgICAgICAgICAgIG0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGAke2R9wrAgJHttfScgJHtzfVwiYDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBERUcgb3B0aW9uIGZpcnN0XCIpO1xuICAgICAgICByZXN1bHQudmFsdWUgPSBcIlwiO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0RGVncmVlc1RvRE1TID0gZ2V0RGVncmVlc1RvRE1TO1xuLy8gZnVuY3Rpb24gdG8gZ2V0IGZpeGVkIHRvIGV4cG9uZW50XG5mdW5jdGlvbiBnZXRGZShpbnB1dCkge1xuICAgIGlmIChpbnB1dCA9PSBcIlwiIHx8IGlucHV0ID09IFwiMFwiKSB7XG4gICAgICAgIGlucHV0ID0gXCIwXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbnB1dCA9IGAke2lucHV0fWUrMGA7XG4gICAgfVxuICAgIHJlc3VsdC52YWx1ZSA9IGlucHV0O1xufVxuZXhwb3J0cy5nZXRGZSA9IGdldEZlO1xuLy8gZnVuY3Rpb24gdG8gc3RvcmUgbWVtb3J5XG5mdW5jdGlvbiBtZW1vcnlTdG9yZShpbnB1dCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtb3J5U2hvd1wiKS5pbm5lckhUTUwgPSBpbnB1dC52YWx1ZSB8fCBcIjBcIjtcbn1cbmV4cG9ydHMubWVtb3J5U3RvcmUgPSBtZW1vcnlTdG9yZTtcbi8vIGZ1bmN0aW9uIHRvIGNsZWFyIG1lbW9yeVxuZnVuY3Rpb24gbWVtb3J5Q2xlYXIoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1vcnlTaG93XCIpLmlubmVySFRNTCA9IFwiXCIgfHwgXCIwXCI7XG59XG5leHBvcnRzLm1lbW9yeUNsZWFyID0gbWVtb3J5Q2xlYXI7XG5mdW5jdGlvbiBnZXRNZW1vcnlWYWx1ZSgpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1vcnlTaG93XCIpLmlubmVySFRNTCk7XG59XG4vLyBmdW5jdGlvbiBmb3IgbWVtb3J5IGFkZGl0aW9uXG5mdW5jdGlvbiBtZW1vcnlBZGRpdGlvbihpbnB1dCkge1xuICAgIGNvbnN0IGlucHV0VmFsID0gcGFyc2VJbnQoaW5wdXQudmFsdWUpO1xuICAgIGlmICghaXNOYU4oaW5wdXRWYWwpKSB7XG4gICAgICAgIGxldCBzaG93UmVzdWx0ID0gKGdldE1lbW9yeVZhbHVlKCkgKyBpbnB1dFZhbCkudG9TdHJpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1vcnlTaG93XCIpLmlubmVySFRNTCA9IHNob3dSZXN1bHQ7XG4gICAgfVxufVxuZXhwb3J0cy5tZW1vcnlBZGRpdGlvbiA9IG1lbW9yeUFkZGl0aW9uO1xuLy8gZnVuY3Rpb24gZm9yIG1lbW9yeSBzdWJ0cmFjdGlvblxuZnVuY3Rpb24gbWVtb3J5U3VidHJhY3Rpb24oaW5wdXQpIHtcbiAgICBjb25zdCBpbnB1dFZhbCA9IHBhcnNlSW50KGlucHV0LnZhbHVlKTtcbiAgICBpZiAoIWlzTmFOKGlucHV0VmFsKSkge1xuICAgICAgICBsZXQgc2hvd1Jlc3VsdCA9IChnZXRNZW1vcnlWYWx1ZSgpIC0gaW5wdXRWYWwpLnRvU3RyaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtb3J5U2hvd1wiKS5pbm5lckhUTUwgPSBzaG93UmVzdWx0O1xuICAgIH1cbn1cbmV4cG9ydHMubWVtb3J5U3VidHJhY3Rpb24gPSBtZW1vcnlTdWJ0cmFjdGlvbjtcbi8vIGZ1bmN0aW9uIGZvciBtZW1vcnkgcmVjYWxsXG5mdW5jdGlvbiBtZW1vcnlSZWNhbGwoaW5wdXQpIHtcbiAgICBpbnB1dC52YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtb3J5U2hvd1wiKS5pbm5lckhUTUw7XG59XG5leHBvcnRzLm1lbW9yeVJlY2FsbCA9IG1lbW9yeVJlY2FsbDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfYSwgX2IsIF9jO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3V0aWxzXCIpO1xuLy8gdG9nZ2xlIGJ1dHRvblxuY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtYnV0dG9uXCIpO1xuY29uc3QgYnV0dG9uczEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbjFcIik7XG5jb25zdCBidXR0b25zMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uMlwiKTtcbi8vIHRvZ2dsZSBidXR0b24gZXZlbnQgbGlzdGVuZXJcbnRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ1dHRvbnMxLmZvckVhY2goKGJ1dHRvbjEpID0+IHtcbiAgICAgICAgYnV0dG9uMS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuICAgIGJ1dHRvbnMyLmZvckVhY2goKGJ1dHRvbjIpID0+IHtcbiAgICAgICAgYnV0dG9uMi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xufSk7XG4vLyBzaG93IGRyb3Bkb3duIG1lbnUgb24gVHJpZ29uaW1ldHJ5IGJ1dHRvbiBjbGlja1xuY29uc3QgZHJvcGJ0blRyaWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duQnRuVHJpZ1wiKTtcbmNvbnN0IGRyb3Bkb3duQ29udGVudFRyaWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215RHJvcGRvd25UcmlnXCIpO1xuLy8gc2hvdyBkcm9wZG93biBtZW51IG9uIEZ1bmN0aW9uIGJ1dHRvbiBjbGlja1xuY29uc3QgZHJvcGJ0bkZ1bmMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duQnRuRnVuY1wiKTtcbmNvbnN0IGRyb3Bkb3duQ29udGVudEZ1bmMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215RHJvcGRvd25GdW5jXCIpO1xuaWYgKGRyb3BidG5UcmlnICYmIGRyb3Bkb3duQ29udGVudFRyaWcpIHtcbiAgICBkcm9wYnRuVHJpZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkcm9wZG93bkNvbnRlbnRUcmlnLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50VHJpZy5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICAgIH0pO1xuICAgIGlmIChkcm9wYnRuRnVuYyAmJiBkcm9wZG93bkNvbnRlbnRGdW5jKSB7XG4gICAgICAgIGRyb3BidG5GdW5jLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRGdW5jLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudEZ1bmMuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBib3RoIGRyb3Bkb3duLCBkaXNwbGF5IG5vbmUgd2hlbiB1c2VyIGNsaWNrcyBvdXRzaWRlIGRyb3Bkb3duIGJ1dHRvbnNcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFkcm9wYnRuVHJpZy5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICAgICAgICAgICAgIWRyb3Bkb3duQ29udGVudFRyaWcuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudFRyaWcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFkcm9wYnRuRnVuYy5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICAgICAgICAgICAgIWRyb3Bkb3duQ29udGVudEZ1bmMuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudEZ1bmMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5jb25zdCBhcnIgPSBbXG4gICAgXCIwXCIsXG4gICAgXCIxXCIsXG4gICAgXCIyXCIsXG4gICAgXCIzXCIsXG4gICAgXCI0XCIsXG4gICAgXCI1XCIsXG4gICAgXCI2XCIsXG4gICAgXCI3XCIsXG4gICAgXCI4XCIsXG4gICAgXCI5XCIsXG4gICAgXCIrXCIsXG4gICAgXCItXCIsXG4gICAgXCIvXCIsXG4gICAgXCIqXCIsXG4gICAgXCIlXCIsXG4gICAgXCIoXCIsXG4gICAgXCIpXCIsXG4gICAgXCIuXCIsXG4gICAgXCLPgFwiLFxuICAgIFwiZVwiLFxuICAgIFwiIVwiLFxuXTtcbi8vIGRpc3BsYXkga2V5Ym9hcmQga2V5IG9uIHNjcmVlbiB3aGVuIGtleWJvYXJkIG51bWJlcnMgb3Igb3BlcmF0b3JzIGNsaWNrXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgaWYgKGFyci5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpO1xuICAgICAgICByZXN1bHQudmFsdWUgKz0gZXZlbnQua2V5O1xuICAgIH1cbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIj1cIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIik7XG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5jYWxjdWxhdGUpKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpO1xuICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gXCJNYWxmb3JtZWQgRXhwcmVzc2lvblwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIik7XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IHJlc3VsdC52YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIC8vIHByZXZlbnQgZnJvbSBFbnRlciBrZXkgcHJlc3NpbmdcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59KTtcbi8vIEdldCBhbGwgdGhlIG51bWJlciBidXR0b25zXG5sZXQgbnVtYmVyQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYWxjQnRuXCIpO1xuLy8gQWRkIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBidXR0b25cbmZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgIG51bWJlckJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gR2V0IHRoZSB2YWx1ZSBvZiB0aGUgY2xpY2tlZCBidXR0b25cbiAgICAgICAgY29uc3QgYnV0dG9uVmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGlucHV0IGZpZWxkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpXG4gICAgICAgICAgICAudmFsdWU7XG4gICAgICAgIC8vIEFkZCB0aGUgYnV0dG9uIHZhbHVlIHRvIHRoZSBpbnB1dCBmaWVsZFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKS52YWx1ZSA9XG4gICAgICAgICAgICByZXN1bHQgKyBidXR0b25WYWx1ZTtcbiAgICB9KTtcbn1cbi8vIHRvIGdldCByZXN1bHQgb24gc2NyZWVuIHdoZW4gZXF1YWwgYnV0dG9uIHByZXNzZWQgYnkgdXNlclxuY29uc3QgZXF1YWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV2YWxcIik7XG5pZiAoZXF1YWxCdG4pIHtcbiAgICBlcXVhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIilcbiAgICAgICAgICAgICAgICAudmFsdWU7XG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5jYWxjdWxhdGUpKHJlc3VsdCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIikudmFsdWUgPVxuICAgICAgICAgICAgICAgIFwiTWFsZm9ybWVkIEV4cHJlc3Npb25cIjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXN1bHRcIik7XG4vLyBldmVudCBsaXN0ZW5lciB0byBzb2x2ZSB0d28gcG93ZXIgeFxuY29uc3QgdHdvUG93eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHdvX3Bvd2VyX1hcIik7XG50d29Qb3d4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXNlcklwID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IG91dHB1dCA9IGAyKioke3VzZXJJcH1gO1xuICAgIHJlc3VsdC52YWx1ZSA9IG91dHB1dDtcbn0pO1xuLy8gZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgdGVuIHBvd2VyIHhcbmNvbnN0IHRlblBvd3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rlbl9wb3dlcl94XCIpO1xudGVuUG93eC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVzZXJJcCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBvdXRwdXQgPSBgMTAqKiR7dXNlcklwfWA7XG4gICAgcmVzdWx0LnZhbHVlID0gb3V0cHV0O1xufSk7XG4vLyBldmVudCBsaXN0ZW5lciB0byBzb2x2ZSBlIHBvd2VyIHhcbmNvbnN0IGVQb3d4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlX3Bvd2VyX3hcIik7XG5lUG93eC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVzZXJJcCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBvdXRwdXQgPSBgZSoqJHt1c2VySXB9YDtcbiAgICByZXN1bHQudmFsdWUgPSBvdXRwdXQ7XG59KTtcbi8vIGV2ZW50IGxpc3RlbmVyIHRvIHNvbHZlIGV4cFxuY29uc3QgZVBvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXhwXCIpO1xuZVBvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVzZXJJcCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBvdXRwdXQgPSBgZSoqJHt1c2VySXB9YDtcbiAgICByZXN1bHQudmFsdWUgPSBvdXRwdXQ7XG59KTtcbi8vIGV2ZW50IGxpc3RlbmVyIHRvIHNvbHZlIDEveFxuY29uc3Qgb25lQnlYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvbmVfYnlfeFwiKTtcbm9uZUJ5WC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVzZXJJcCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBvdXRwdXQgPSBgMS8ke3VzZXJJcH1gO1xuICAgIHJlc3VsdC52YWx1ZSA9IG91dHB1dDtcbn0pO1xuLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHNvbHZlIHNxdWFyZSByb290IG9mIHhcbmNvbnN0IHJvb3RYYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290X3hcIik7XG5yb290WGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5jYWxjdWxhdGVTcXJ0KSh1c2VySW5wdXQpO1xuICAgIHJlc3VsdC52YWx1ZSA9IGNhbGN1bGF0ZWRWYWx1ZTtcbn0pO1xuLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHNvbHZlIGN1YmUgcm9vdCBvZiB4XG5jb25zdCB0aHJlZVJvb3RYYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdWJlX3Jvb3RfeFwiKTtcbnRocmVlUm9vdFhidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSByZXN1bHQudmFsdWU7XG4gICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gKDAsIHV0aWxzXzEuY2FsY3VsYXRlQ3ViZVNxcnQpKHVzZXJJbnB1dCk7XG4gICAgcmVzdWx0LnZhbHVlID0gY2FsY3VsYXRlZFZhbHVlO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSAnKy8tJ1xuY29uc3QgUGx1c2J5TWludXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZGl0aW9uX2J5X3N1YnRyYWN0aW9uXCIpO1xuUGx1c2J5TWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXRQbHVzYnlNaW51cykocmVzdWx0KTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgYWJzb2x1dGVcbihfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeF9hYnNcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5nZXRBYnNvbHV0ZSkodXNlcklucHV0KTtcbiAgICByZXN1bHQudmFsdWUgPSBjYWxjdWxhdGVkVmFsdWU7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlIGZsb29yXG4oX2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3hfZmxvb3JcIikpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5nZXRGbG9vcikodXNlcklucHV0KTtcbiAgICByZXN1bHQudmFsdWUgPSBjYWxjdWxhdGVkVmFsdWU7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlIGNlaWxcbihfYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeF9jZWlsXCIpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSByZXN1bHQudmFsdWU7XG4gICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gKDAsIHV0aWxzXzEuZ2V0Q2VpbCkodXNlcklucHV0KTtcbiAgICByZXN1bHQudmFsdWUgPSBjYWxjdWxhdGVkVmFsdWU7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlIHJvdW5kXG5jb25zdCByb3VuZHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3hfcm91bmRcIik7XG5yb3VuZHguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSByZXN1bHQudmFsdWU7XG4gICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gKDAsIHV0aWxzXzEuZ2V0QWJzb2x1dGUpKHVzZXJJbnB1dCk7XG4gICAgcmVzdWx0LnZhbHVlID0gY2FsY3VsYXRlZFZhbHVlO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBzaW5cbmNvbnN0IHNpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2luXCIpO1xuc2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0U2luZSkocmVzdWx0LnZhbHVlKTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgY29zXG5jb25zdCBjb3NCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvc1wiKTtcbmNvc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldENvcykocmVzdWx0LnZhbHVlKTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgdGFuXG5jb25zdCB0YW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhblwiKTtcbnRhbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldFRhbikocmVzdWx0LnZhbHVlKTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgc2VjXG5jb25zdCBzZWNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY1wiKTtcbnNlY0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldFNlYykocmVzdWx0LnZhbHVlKTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgY29zZWNcbmNvbnN0IGNzY0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3NjXCIpO1xuY3NjQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0Q3NjKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBjb3RcbmNvbnN0IGNvdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY290XCIpO1xuY290QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0Q290KShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBnZW5lcmF0ZSByYW5kb20gbnVtYmVyc1xuY29uc3QgcmFuZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZFwiKTtcbnJhbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXRSYW5kKShyZXN1bHQpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBnZXQgZGVncmVlXG5jb25zdCBkZWdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkRlZ1wiKTtcbmRlZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldERlZykocmVzdWx0LnZhbHVlKTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgZm9yIGRtc1xuY29uc3QgZG1zQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkbXNcIik7XG5kbXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXREZWdyZWVzVG9ETVMpKHJlc3VsdC52YWx1ZSk7XG59KTtcbi8vIGFkZCBFdmVudExpc3RlbmVyIGZvciBmLWVcbmNvbnN0IGZpeGVkdG9FeHBvbmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVcIik7XG5maXhlZHRvRXhwb25lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXRGZSkocmVzdWx0LnZhbHVlKTtcbn0pO1xuLy8gTWVtb3J5IGJ1dHRvbnMgRXZlbnRsaXN0ZW5lclxuLy8gTWVtb3J5IHN0b3JlIGZ1bmN0aW9uYWxpdHlcbmxldCBtZW1vcnlTdG9yZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtb3J5U3RvcmVcIik7XG5tZW1vcnlTdG9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChyZXN1bHQudmFsdWUgIT0gXCJcIikge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbW9yeUNsZWFyXCIpLmRpc2FibGVkID1cbiAgICAgICAgICAgIGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbW9yeVJlY2FsbFwiKS5kaXNhYmxlZCA9XG4gICAgICAgICAgICBmYWxzZTtcbiAgICB9XG4gICAgKDAsIHV0aWxzXzEubWVtb3J5U3RvcmUpKHJlc3VsdCk7XG59KTtcbi8vIE1lbW9yeSBjbGVhciBmdW5jdGlvbmFsaXR5XG5sZXQgbWVtb3J5Q2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbW9yeUNsZWFyXCIpO1xubWVtb3J5Q2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbW9yeUNsZWFyXCIpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbW9yeVJlY2FsbFwiKS5kaXNhYmxlZCA9XG4gICAgICAgIHRydWU7XG4gICAgKDAsIHV0aWxzXzEubWVtb3J5Q2xlYXIpKCk7XG59KTtcbi8vIE1lbW9yeSByZWNhbGwgZnVuY3Rpb25hbGl0eVxubGV0IG1lbW9yeVJlY2FsbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtb3J5UmVjYWxsXCIpO1xubWVtb3J5UmVjYWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEubWVtb3J5UmVjYWxsKShyZXN1bHQpO1xufSk7XG4vLyBNZW1vcnkgYWRkaXRpb24gZnVuY3Rpb25hbGl0eVxubGV0IG1lbW9yeUFkZGl0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1vcnlQbHVzXCIpO1xubWVtb3J5QWRkaXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5tZW1vcnlBZGRpdGlvbikocmVzdWx0KTtcbn0pO1xuLy8gTWVtb3J5IHN1YnRyYWN0aW9uIGZ1bmN0aW9uYWxpdHlcbmxldCBtZW1vcnlTdWJ0cmFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtb3J5TWludXNcIik7XG5tZW1vcnlTdWJ0cmFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLm1lbW9yeVN1YnRyYWN0aW9uKShyZXN1bHQpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=