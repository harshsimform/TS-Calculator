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
            //   input = input.replaceAll(/(^|[-+*/])π/g, "$13.14159265359");
            //   input = input.replaceAll(/(^|[-+*/])e/g, "$12.71828182846");
            //   input = input.replaceAll(/π(?=\d)/g, "3.14159265359*");
            //   input = input.replaceAll(/e(?=\d)/g, "2.71828182846*");
            //   input = input.replaceAll(/(?<=\d|\.)π/g, "*3.14159265359");
            //   input = input.replaceAll(/(?<=\d|\.)e/g, "*2.71828182846");
            //   input = input.replaceAll(/π$/g, "*3.14159265359");
            //   input = input.replaceAll(/e$/g, "*2.71828182846");
            //---------------------------
            input = input.replaceAll(/(^|[-+*/()])π/g, "$13.14159265359");
            input = input.replaceAll(/(^|[-+*/()])e/g, "$12.71828182846");
            input = input.replaceAll(/π(?=\d|\.|\()|π$/g, "3.14159265359*");
            input = input.replaceAll(/e(?=\d|\.|\()|e$/g, "2.71828182846*");
            input = input.replaceAll(/(?<=\d|\.)π|(?<=\))π/g, "*3.14159265359");
            input = input.replaceAll(/(?<=\d|\.)e|(?<=\))e/g, "*2.71828182846");
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
            //   input = input.replace(/--/g, "+");
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
    let showResult = (getMemoryValue() + parseInt(input.value)).toString();
    document.getElementById("memoryShow").innerHTML = showResult;
}
exports.memoryAddition = memoryAddition;
// function for memory subtraction
function memorySubtraction(input) {
    let showResult = (getMemoryValue() - parseInt(input.value)).toString();
    document.getElementById("memoryShow").innerHTML = showResult;
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
// event listener to solve e power x
const ePowx = document.querySelector("#e_power_x");
ePowx.addEventListener("click", function () {
    const userIp = document.getElementById("result").value;
    const output = `e**${userIp}`;
    result.value = output;
});
// event listener to solve exp
const ePow = document.querySelector("#exp");
ePow.addEventListener("click", function () {
    const userIp = document.getElementById("result").value;
    const output = `e**${userIp}`;
    result.value = output;
});
// event listener to solve 1/x
const oneByX = document.querySelector("#one_by_x");
oneByX.addEventListener("click", function () {
    const userIp = document.getElementById("result").value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixHQUFHLHlCQUF5QixHQUFHLHNCQUFzQixHQUFHLG1CQUFtQixHQUFHLG1CQUFtQixHQUFHLGFBQWEsR0FBRyx1QkFBdUIsR0FBRyxjQUFjLEdBQUcsZUFBZSxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsY0FBYyxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsZUFBZSxHQUFHLHNCQUFzQixHQUFHLGVBQWUsR0FBRyxnQkFBZ0IsR0FBRyxtQkFBbUIsR0FBRyx5QkFBeUIsR0FBRyxxQkFBcUIsR0FBRyxpQkFBaUI7QUFDcmM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLHNEQUFzRCxNQUFFO0FBQ3hEO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7Ozs7OztVQy9XcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixtQkFBTyxDQUFDLDJDQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMEJBQTBCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1jYWxjdWxhdG9yLy4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL3RzLWNhbGN1bGF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtY2FsY3VsYXRvci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWVtb3J5UmVjYWxsID0gZXhwb3J0cy5tZW1vcnlTdWJ0cmFjdGlvbiA9IGV4cG9ydHMubWVtb3J5QWRkaXRpb24gPSBleHBvcnRzLm1lbW9yeUNsZWFyID0gZXhwb3J0cy5tZW1vcnlTdG9yZSA9IGV4cG9ydHMuZ2V0RmUgPSBleHBvcnRzLmdldERlZ3JlZXNUb0RNUyA9IGV4cG9ydHMuZ2V0RGVnID0gZXhwb3J0cy5nZXRSYW5kID0gZXhwb3J0cy5nZXRDb3QgPSBleHBvcnRzLmdldENzYyA9IGV4cG9ydHMuZ2V0U2VjID0gZXhwb3J0cy5nZXRUYW4gPSBleHBvcnRzLmdldENvcyA9IGV4cG9ydHMuZ2V0U2luZSA9IGV4cG9ydHMuZ2V0UGx1c2J5TWludXMgPSBleHBvcnRzLmdldENlaWwgPSBleHBvcnRzLmdldEZsb29yID0gZXhwb3J0cy5nZXRBYnNvbHV0ZSA9IGV4cG9ydHMuY2FsY3VsYXRlQ3ViZVNxcnQgPSBleHBvcnRzLmNhbGN1bGF0ZVNxcnQgPSBleHBvcnRzLmNhbGN1bGF0ZSA9IHZvaWQgMDtcbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBmYWN0b3JpYWwgYW5kIG5vcm1hbCBjYWxjdWxhdGlvblxuZnVuY3Rpb24gY2FsY3VsYXRlKGlucHV0KSB7XG4gICAgbGV0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdWx0XCIpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGlucHV0IGluY2x1ZGVzIHRoZSBcIiFcIiBzeW1ib2wgdGhlbiBwZXJmb3JtIGZhY3RvcmlhbCBmdW5jdGlvblxuICAgICAgICBpZiAoaW5wdXQuaW5jbHVkZXMoXCIhXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUludChpbnB1dC5zbGljZSgwLCAtMSkpO1xuICAgICAgICAgICAgLy8gbmVlZCBmb3IgdGhlIHR5cGUgZ3VhcmQgb24gcmVzdWx0RmFjdCwgc2luY2Ugd2UgYXJlIGltbWVkaWF0ZWx5IGNvbnZlcnRpbmcgaXQgdG8gYSBzdHJpbmcgdXNpbmcgdGhlIHRvU3RyaW5nKCkgbWV0aG9kXG4gICAgICAgICAgICBjb25zdCByZXN1bHRGYWN0ID0gZmFjdG9yaWFsKG51bSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIC8vIGFzc2lnbiB0aGUgY2FsY3VsYXRlZCBmYWN0b3JpYWwgdmFsdWUgYmFjayB0byB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3VsdFwiKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHRFbGVtKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0RWxlbS52YWx1ZSA9IHJlc3VsdEZhY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXQuaW5jbHVkZXMoXCLPgFwiKSB8fCBpbnB1dC5pbmNsdWRlcyhcImVcIikpIHtcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgJ8+AJyBhbmQgJ2UnIHdpdGggdGhlaXIgY29ycmVzcG9uZGluZyBudW1lcmljYWwgdmFsdWVzXG4gICAgICAgICAgICAvLyAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvKF58Wy0rKi9dKc+AL2csIFwiJDEzLjE0MTU5MjY1MzU5XCIpO1xuICAgICAgICAgICAgLy8gICBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoLyhefFstKyovXSllL2csIFwiJDEyLjcxODI4MTgyODQ2XCIpO1xuICAgICAgICAgICAgLy8gICBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoL8+AKD89XFxkKS9nLCBcIjMuMTQxNTkyNjUzNTkqXCIpO1xuICAgICAgICAgICAgLy8gICBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoL2UoPz1cXGQpL2csIFwiMi43MTgyODE4Mjg0NipcIik7XG4gICAgICAgICAgICAvLyAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvKD88PVxcZHxcXC4pz4AvZywgXCIqMy4xNDE1OTI2NTM1OVwiKTtcbiAgICAgICAgICAgIC8vICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC8oPzw9XFxkfFxcLillL2csIFwiKjIuNzE4MjgxODI4NDZcIik7XG4gICAgICAgICAgICAvLyAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvz4AkL2csIFwiKjMuMTQxNTkyNjUzNTlcIik7XG4gICAgICAgICAgICAvLyAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvZSQvZywgXCIqMi43MTgyODE4Mjg0NlwiKTtcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoLyhefFstKyovKCldKc+AL2csIFwiJDEzLjE0MTU5MjY1MzU5XCIpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC8oXnxbLSsqLygpXSllL2csIFwiJDEyLjcxODI4MTgyODQ2XCIpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC/PgCg/PVxcZHxcXC58XFwoKXzPgCQvZywgXCIzLjE0MTU5MjY1MzU5KlwiKTtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvZSg/PVxcZHxcXC58XFwoKXxlJC9nLCBcIjIuNzE4MjgxODI4NDYqXCIpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC8oPzw9XFxkfFxcLinPgHwoPzw9XFwpKc+AL2csIFwiKjMuMTQxNTkyNjUzNTlcIik7XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoLyg/PD1cXGR8XFwuKWV8KD88PVxcKSllL2csIFwiKjIuNzE4MjgxODI4NDZcIik7XG4gICAgICAgICAgICAvLyBFdmFsdWF0ZSB0aGUgZXhwcmVzc2lvblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRFdmFsID0gZXZhbChpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gcmVzdWx0RXZhbC50b0ZpeGVkKDExKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gXCJJbnZhbGlkIGV4cHJlc3Npb25cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBpZiBpbnB1dCBpbmNsdWRlcyBsb2dcbiAgICAgICAgZWxzZSBpZiAoaW5wdXQuaW5jbHVkZXMoXCJsb2dcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvZ1Jlc3VsdCA9IGV2YWx1YXRlTG9nKGlucHV0KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9nUmVzdWx0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gbG9nUmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSBsb2dSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgYW5kIGV2YWx1YXRlIGlmIGlucHV0IGluY2x1ZGVzIGxuXG4gICAgICAgIGVsc2UgaWYgKGlucHV0LmluY2x1ZGVzKFwibG5cIikpIHtcbiAgICAgICAgICAgIGxldCBuYXR1cmFsTG9nUmVzdWx0ID0gZXZhbHVhdGVOYXR1cmFsTG9nKGlucHV0KTtcbiAgICAgICAgICAgIC8vIHVzZWQgdHlwZSBndWFyZFxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuYXR1cmFsTG9nUmVzdWx0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgbmF0dXJhbExvZ1Jlc3VsdCA9IG5hdHVyYWxMb2dSZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IG5hdHVyYWxMb2dSZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgYW5kIGV2YWx1YXRlIHJvb3RcbiAgICAgICAgZWxzZSBpZiAoaW5wdXQuaW5jbHVkZXMoXCLiiJpcIikpIHtcbiAgICAgICAgICAgIGxldCByb290UmVzdWx0ID0gY2FsY3VsYXRlUm9vdChpbnB1dCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3RSZXN1bHQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICByb290UmVzdWx0ID0gcm9vdFJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHJvb3RSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZSBldmFsdWF0ZSB0aGUgaW5wdXQgdXNpbmcgdGhlIGV2YWwgZnVuY3Rpb25cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXBsYWNlIGRvdWJsZSBuZWdhdGl2ZSBzaWducyB3aXRoIGEgc2luZ2xlIHBvc2l0aXZlIHNpZ25cbiAgICAgICAgICAgIC8vICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC8tLS9nLCBcIitcIik7XG4gICAgICAgICAgICAvLyBFdmFsdWF0ZSBleHByZXNzaW9uIHVzaW5nIGV2YWwoKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHByUmVzdWx0ID0gZXZhbChpbnB1dCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gZXhwclJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmNhbGN1bGF0ZSA9IGNhbGN1bGF0ZTtcbmNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdWx0XCIpO1xuLy8gZmFjdG9yaWFsIGZ1bmN0aW9uXG5mdW5jdGlvbiBmYWN0b3JpYWwobnVtKSB7XG4gICAgaWYgKHR5cGVvZiBudW0gIT09IFwibnVtYmVyXCIgfHwgbnVtIDwgMCB8fCBNYXRoLmZsb29yKG51bSkgIT09IG51bSkge1xuICAgICAgICByZXR1cm4gXCJNYWxmb3JtZWQgRXhwcmVzc2lvblwiO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gMTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW07IGkrKykge1xuICAgICAgICByZXN1bHQgKj0gaTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBsb2dcbmZ1bmN0aW9uIGV2YWx1YXRlTG9nKGlucHV0KSB7XG4gICAgLy8gc3BsaXQgdGhlIGlucHV0IHZhbHVlIGludG8gdGhlIG51bWJlciBiZWZvcmUgYW5kIGFmdGVyICdsb2cnXG4gICAgY29uc3QgW2Jhc2UsIG51bWJlcl0gPSBpbnB1dC5zcGxpdChcImxvZ1wiKTtcbiAgICAvLyBjb252ZXJ0IHRoZSBiYXNlIGFuZCBudW1iZXIgdG8gbnVtYmVycyB1c2luZyB0aGUgTnVtYmVyKCkgbWV0aG9kXG4gICAgY29uc3QgYmFzZU51bSA9IE51bWJlcihiYXNlKSB8fCAxMDtcbiAgICBjb25zdCBudW1iZXJOdW0gPSBOdW1iZXIobnVtYmVyKTtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIGxvZ2FyaXRobSB3aXRoIHRoZSBzcGVjaWZpZWQgYmFzZSB1c2luZyB0aGUgTWF0aC5sb2coKSBtZXRob2QgYW5kIGRpc3BsYXkgdGhlIHJlc3VsdFxuICAgIGNvbnN0IHRlbXBBbnN3ZXIgPSBNYXRoLmxvZyhudW1iZXJOdW0pIC8gTWF0aC5sb2coYmFzZU51bSk7XG4gICAgY29uc3QgcmVzdWx0TG9nID0gdGVtcEFuc3dlci50b1N0cmluZygpO1xuICAgIGNvbnN0IGRlY2ltYWxJbmRleCA9IHJlc3VsdExvZy5pbmRleE9mKFwiLlwiKTtcbiAgICBjb25zdCBtdWx0aXBsaWVkTnVtID0gZGVjaW1hbEluZGV4ID4gMCAmJiByZXN1bHRMb2dbZGVjaW1hbEluZGV4IC0gMV0gPT09IFwiMFwiXG4gICAgICAgID8gTnVtYmVyKHJlc3VsdExvZylcbiAgICAgICAgOiB0ZW1wQW5zd2VyO1xuICAgIHJldHVybiBtdWx0aXBsaWVkTnVtO1xufVxuLy8gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIE5hdHVyYWwgTG9nXG5mdW5jdGlvbiBldmFsdWF0ZU5hdHVyYWxMb2coaW5wdXQpIHtcbiAgICBjb25zdCBtYXRjaCA9IGlucHV0Lm1hdGNoKC9eKFxcZCopbG4oLispJC8pO1xuICAgIGxldCBjb2VmZmljaWVudCA9IDE7XG4gICAgbGV0IHggPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIGxldCByZXN1bHROYXR1cmFsTG9nID0gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgICAgIHJldHVybiByZXN1bHROYXR1cmFsTG9nO1xuICAgIH1cbiAgICBjb2VmZmljaWVudCA9IG1hdGNoWzFdID8gcGFyc2VJbnQobWF0Y2hbMV0pIDogMTtcbiAgICAvLyBhZGQgbnVsbCBjaGVjayBhbmQgZGVmYXVsdCB2YWx1ZSBvZiAwXG4gICAgeCA9IHBhcnNlRmxvYXQobWF0Y2hbMl0gfHwgXCIwXCIpO1xuICAgIGxldCByZXN1bHROYXR1cmFsTG9nID0gY29lZmZpY2llbnQgKiBNYXRoLmxvZyh4KTtcbiAgICByZXR1cm4gcmVzdWx0TmF0dXJhbExvZztcbn1cbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSByb290XG5mdW5jdGlvbiBjYWxjdWxhdGVSb290KGlucHV0KSB7XG4gICAgY29uc3QgcGFydHMgPSBpbnB1dC5zcGxpdChcIuKImlwiKTtcbiAgICAvLyBhZGQgbnVsbCBjaGVjayBhbmQgZGVmYXVsdCB2YWx1ZSBvZiAwXG4gICAgY29uc3QgeCA9IHBhcnNlRmxvYXQocGFydHNbMV0gfHwgXCIwXCIpO1xuICAgIGlmIChpc05hTih4KSkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gYWRkIG51bGwgY2hlY2sgYW5kIGRlZmF1bHQgdmFsdWUgb2YgMFxuICAgICAgICBjb25zdCB5ID0gcGFyc2VGbG9hdChwYXJ0c1swXSB8fCBcIjBcIik7XG4gICAgICAgIGlmIChpc05hTih5KSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHgsIDEgLyB5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBpbnB1dFwiO1xuICAgIH1cbn1cbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBTcXVhcmUgcm9vdFxuZnVuY3Rpb24gY2FsY3VsYXRlU3FydChpbnB1dCkge1xuICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoaW5wdXQpO1xuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChudW0pLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5jYWxjdWxhdGVTcXJ0ID0gY2FsY3VsYXRlU3FydDtcbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBjdWJlIHJvb3RcbmZ1bmN0aW9uIGNhbGN1bGF0ZUN1YmVTcXJ0KGlucHV0KSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdChpbnB1dCk7XG4gICAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5jYnJ0KG51bSkudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLmNhbGN1bGF0ZUN1YmVTcXJ0ID0gY2FsY3VsYXRlQ3ViZVNxcnQ7XG4vLyBmdW5jdGlvbiB0byBnZW5lcmF0ZSBhYnNvbHV0ZSB2YWx1ZVxuZnVuY3Rpb24gZ2V0QWJzb2x1dGUoaW5wdXQpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICBpZiAoaXNOYU4obnVtKSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhudW0pLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRBYnNvbHV0ZSA9IGdldEFic29sdXRlO1xuLy8gZnVuY3Rpb24gdG8gZ2VuZXJhdGUgRmxvb3IgdmFsdWVcbmZ1bmN0aW9uIGdldEZsb29yKGlucHV0KSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdChpbnB1dCk7XG4gICAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW0pLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRGbG9vciA9IGdldEZsb29yO1xuLy8gZnVuY3Rpb24gdG8gZ2VuZXJhdGUgQ2VpbCB2YWx1ZVxuZnVuY3Rpb24gZ2V0Q2VpbChpbnB1dCkge1xuICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoaW5wdXQpO1xuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChudW0pLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRDZWlsID0gZ2V0Q2VpbDtcbi8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSBvcGVyYW5kIHNpZ25cbmZ1bmN0aW9uIGdldFBsdXNieU1pbnVzKGlucHV0KSB7XG4gICAgbGV0IHVzZXJTdHIgPSBpbnB1dC52YWx1ZS50b1N0cmluZygpO1xuICAgIGlmICh1c2VyU3RyLmNoYXJBdCgwKSA9PT0gXCItXCIpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZS5zdWJzdHJpbmcoMSwgaW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gXCItXCIgKyBpbnB1dC52YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLmdldFBsdXNieU1pbnVzID0gZ2V0UGx1c2J5TWludXM7XG4vLyBjaGVjayB3aGljaCB1bml0IG9mIGFuZ2xlIGlzIHNlbGVjdGVkIGJ5IHVzZXJcbmxldCB1bml0T2ZBbmdsZSA9IFwiREVHXCI7XG5jb25zdCBidXR0b25PZlVuaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZ1wiKTtcbmJ1dHRvbk9mVW5pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHVuaXRPZkFuZ2xlID0gdW5pdE9mQW5nbGUgPT09IFwiREVHXCIgPyBcIlJBRFwiIDogXCJERUdcIjtcbiAgICBidXR0b25PZlVuaXQuaW5uZXJIVE1MID0gdW5pdE9mQW5nbGU7XG59KTtcbi8vIGNvbW1vbiBmdW5jdGlvbiB0byBjYWxjdWxhdGUgYWxsIFRyaWdvbm9tZXRyeSBmdW5jdGlvbnNcbmZ1bmN0aW9uIGNhbGN1bGF0ZVRyaWdWYWx1ZShpbnB1dCwgdHJpZ0Z1bmMpIHtcbiAgICBpZiAodW5pdE9mQW5nbGUgPT09IFwiUkFEXCIpIHtcbiAgICAgICAgbGV0IHJhZGlhbnMgPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gdHJpZ0Z1bmMocmFkaWFucykudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodW5pdE9mQW5nbGUgPT09IFwiREVHXCIpIHtcbiAgICAgICAgbGV0IGRlZ3JlZSA9IHBhcnNlRmxvYXQoaW5wdXQpICogKE1hdGguUEkgLyAxODApO1xuICAgICAgICByZXN1bHQudmFsdWUgPSB0cmlnRnVuYyhkZWdyZWUpLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuLy8gZnVuY3Rpb24gZm9yIGdldCBzaW5lIHZhbHVlXG5mdW5jdGlvbiBnZXRTaW5lKGlucHV0KSB7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgfVxuICAgIHJldHVybiBjYWxjdWxhdGVUcmlnVmFsdWUoaW5wdXQsIE1hdGguc2luKTtcbn1cbmV4cG9ydHMuZ2V0U2luZSA9IGdldFNpbmU7XG4vLyBmdW5jdGlvbiBmb3IgZ2V0IGNvcyB2YWx1ZVxuZnVuY3Rpb24gZ2V0Q29zKGlucHV0KSB7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGlucHV0XCI7XG4gICAgfVxuICAgIHJldHVybiBjYWxjdWxhdGVUcmlnVmFsdWUoaW5wdXQsIE1hdGguY29zKTtcbn1cbmV4cG9ydHMuZ2V0Q29zID0gZ2V0Q29zO1xuLy8gZnVuY3Rpb24gZm9yIGdldCB0YW4gdmFsdWVcbmZ1bmN0aW9uIGdldFRhbihpbnB1dCkge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBpbnB1dFwiO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY3VsYXRlVHJpZ1ZhbHVlKGlucHV0LCBNYXRoLnRhbik7XG59XG5leHBvcnRzLmdldFRhbiA9IGdldFRhbjtcbi8vIGZ1bmN0aW9uIGZvciBnZXQgc2VjIHZhbHVlXG5mdW5jdGlvbiBnZXRTZWMoaW5wdXQpIHtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiBcIkludmFsaWQgaW5wdXRcIjtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGN1bGF0ZVRyaWdWYWx1ZShpbnB1dCwgKHJhZGlhbnMpID0+IDEgLyBNYXRoLmNvcyhyYWRpYW5zKSk7XG59XG5leHBvcnRzLmdldFNlYyA9IGdldFNlYztcbi8vIGZ1bmN0aW9uIGZvciBnZXQgY29zZWMgdmFsdWVcbmZ1bmN0aW9uIGdldENzYyhpbnB1dCkge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBpbnB1dFwiO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY3VsYXRlVHJpZ1ZhbHVlKGlucHV0LCAocmFkaWFucykgPT4gMSAvIE1hdGguc2luKHJhZGlhbnMpKTtcbn1cbmV4cG9ydHMuZ2V0Q3NjID0gZ2V0Q3NjO1xuLy8gZnVuY3Rpb24gZm9yIGdldCBjb3QgdmFsdWVcbmZ1bmN0aW9uIGdldENvdChpbnB1dCkge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBpbnB1dFwiO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY3VsYXRlVHJpZ1ZhbHVlKGlucHV0LCAocmFkaWFucykgPT4gMSAvIE1hdGgudGFuKHJhZGlhbnMpKTtcbn1cbmV4cG9ydHMuZ2V0Q290ID0gZ2V0Q290O1xuLy8gZnVuY3Rpb24gdG8gZ2VuZXJhdGUgcmFuZG9tIG51bWJlcnNcbmZ1bmN0aW9uIGdldFJhbmQoaW5wdXQpIHtcbiAgICBpbnB1dC52YWx1ZSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKTtcbn1cbmV4cG9ydHMuZ2V0UmFuZCA9IGdldFJhbmQ7XG4vLyBmdW5jdGlvbiB0byBnZXQgZGVncmVlXG5mdW5jdGlvbiBnZXREZWcoaW5wdXQpIHtcbiAgICBpZiAodW5pdE9mQW5nbGUgPT09IFwiUkFEXCIpIHtcbiAgICAgICAgbGV0IGRlZyA9IE51bWJlcihpbnB1dCkgKiAoMTgwIC8gTWF0aC5QSSk7XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGRlZy50b1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gKE51bWJlcihyZXN1bHQudmFsdWUpIC8gMC4wMTQ3KS50b1N0cmluZygpO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0RGVnID0gZ2V0RGVnO1xuLy8gZnVuY3Rpb24gdG8gZ2V0IERlZ3JlZSB0byBETVNcbmZ1bmN0aW9uIGdldERlZ3JlZXNUb0RNUyhpbnB1dCkge1xuICAgIGlmICh1bml0T2ZBbmdsZSA9PT0gXCJERUdcIikge1xuICAgICAgICBsZXQgZCA9IE1hdGguZmxvb3IoTnVtYmVyKGlucHV0KSk7XG4gICAgICAgIGxldCBtID0gTWF0aC5mbG9vcigoTnVtYmVyKGlucHV0KSAtIGQpICogNjApO1xuICAgICAgICBsZXQgcyA9ICgoTnVtYmVyKGlucHV0KSAtIGQgLSBtIC8gNjApICogMzYwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHMgPT0gXCI2MFwiKSB7XG4gICAgICAgICAgICBtKys7XG4gICAgICAgICAgICBzID0gXCIwXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG0gPT0gNjApIHtcbiAgICAgICAgICAgIGQrKztcbiAgICAgICAgICAgIG0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGAke2R9wrAgJHttfScgJHtzfVwiYDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBERUcgb3B0aW9uIGZpcnN0XCIpO1xuICAgICAgICByZXN1bHQudmFsdWUgPSBcIlwiO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0RGVncmVlc1RvRE1TID0gZ2V0RGVncmVlc1RvRE1TO1xuLy8gZnVuY3Rpb24gdG8gZ2V0IGZpeGVkIHRvIGV4cG9uZW50XG5mdW5jdGlvbiBnZXRGZShpbnB1dCkge1xuICAgIGlmIChpbnB1dCA9PSBcIlwiIHx8IGlucHV0ID09IFwiMFwiKSB7XG4gICAgICAgIGlucHV0ID0gXCIwXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbnB1dCA9IGAke2lucHV0fWUrMGA7XG4gICAgfVxuICAgIHJlc3VsdC52YWx1ZSA9IGlucHV0O1xufVxuZXhwb3J0cy5nZXRGZSA9IGdldEZlO1xuLy8gZnVuY3Rpb24gdG8gc3RvcmUgbWVtb3J5XG5mdW5jdGlvbiBtZW1vcnlTdG9yZShpbnB1dCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtb3J5U2hvd1wiKS5pbm5lckhUTUwgPSBpbnB1dC52YWx1ZSB8fCBcIjBcIjtcbn1cbmV4cG9ydHMubWVtb3J5U3RvcmUgPSBtZW1vcnlTdG9yZTtcbi8vIGZ1bmN0aW9uIHRvIGNsZWFyIG1lbW9yeVxuZnVuY3Rpb24gbWVtb3J5Q2xlYXIoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1vcnlTaG93XCIpLmlubmVySFRNTCA9IFwiXCIgfHwgXCIwXCI7XG59XG5leHBvcnRzLm1lbW9yeUNsZWFyID0gbWVtb3J5Q2xlYXI7XG5mdW5jdGlvbiBnZXRNZW1vcnlWYWx1ZSgpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1vcnlTaG93XCIpLmlubmVySFRNTCk7XG59XG4vLyBmdW5jdGlvbiBmb3IgbWVtb3J5IGFkZGl0aW9uXG5mdW5jdGlvbiBtZW1vcnlBZGRpdGlvbihpbnB1dCkge1xuICAgIGxldCBzaG93UmVzdWx0ID0gKGdldE1lbW9yeVZhbHVlKCkgKyBwYXJzZUludChpbnB1dC52YWx1ZSkpLnRvU3RyaW5nKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1vcnlTaG93XCIpLmlubmVySFRNTCA9IHNob3dSZXN1bHQ7XG59XG5leHBvcnRzLm1lbW9yeUFkZGl0aW9uID0gbWVtb3J5QWRkaXRpb247XG4vLyBmdW5jdGlvbiBmb3IgbWVtb3J5IHN1YnRyYWN0aW9uXG5mdW5jdGlvbiBtZW1vcnlTdWJ0cmFjdGlvbihpbnB1dCkge1xuICAgIGxldCBzaG93UmVzdWx0ID0gKGdldE1lbW9yeVZhbHVlKCkgLSBwYXJzZUludChpbnB1dC52YWx1ZSkpLnRvU3RyaW5nKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1vcnlTaG93XCIpLmlubmVySFRNTCA9IHNob3dSZXN1bHQ7XG59XG5leHBvcnRzLm1lbW9yeVN1YnRyYWN0aW9uID0gbWVtb3J5U3VidHJhY3Rpb247XG4vLyBmdW5jdGlvbiBmb3IgbWVtb3J5IHJlY2FsbFxuZnVuY3Rpb24gbWVtb3J5UmVjYWxsKGlucHV0KSB7XG4gICAgaW5wdXQudmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbW9yeVNob3dcIikuaW5uZXJIVE1MO1xufVxuZXhwb3J0cy5tZW1vcnlSZWNhbGwgPSBtZW1vcnlSZWNhbGw7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2EsIF9iLCBfYztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlscy91dGlsc1wiKTtcbi8vIHRvZ2dsZSBidXR0b25cbmNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLWJ1dHRvblwiKTtcbmNvbnN0IGJ1dHRvbnMxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24xXCIpO1xuY29uc3QgYnV0dG9uczIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbjJcIik7XG4vLyB0b2dnbGUgYnV0dG9uIGV2ZW50IGxpc3RlbmVyXG50b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidXR0b25zMS5mb3JFYWNoKChidXR0b24xKSA9PiB7XG4gICAgICAgIGJ1dHRvbjEuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgICBidXR0b25zMi5mb3JFYWNoKChidXR0b24yKSA9PiB7XG4gICAgICAgIGJ1dHRvbjIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9KTtcbn0pO1xuLy8gc2hvdyBkcm9wZG93biBtZW51IG9uIFRyaWdvbmltZXRyeSBidXR0b24gY2xpY2tcbmNvbnN0IGRyb3BidG5UcmlnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkJ0blRyaWdcIik7XG5jb25zdCBkcm9wZG93bkNvbnRlbnRUcmlnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteURyb3Bkb3duVHJpZ1wiKTtcbi8vIHNob3cgZHJvcGRvd24gbWVudSBvbiBGdW5jdGlvbiBidXR0b24gY2xpY2tcbmNvbnN0IGRyb3BidG5GdW5jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bkJ0bkZ1bmNcIik7XG5jb25zdCBkcm9wZG93bkNvbnRlbnRGdW5jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteURyb3Bkb3duRnVuY1wiKTtcbmlmIChkcm9wYnRuVHJpZyAmJiBkcm9wZG93bkNvbnRlbnRUcmlnKSB7XG4gICAgZHJvcGJ0blRyaWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZHJvcGRvd25Db250ZW50VHJpZy5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudFRyaWcuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcbiAgICB9KTtcbiAgICBpZiAoZHJvcGJ0bkZ1bmMgJiYgZHJvcGRvd25Db250ZW50RnVuYykge1xuICAgICAgICBkcm9wYnRuRnVuYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50RnVuYy5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRGdW5jLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgYm90aCBkcm9wZG93biwgZGlzcGxheSBub25lIHdoZW4gdXNlciBjbGlja3Mgb3V0c2lkZSBkcm9wZG93biBidXR0b25zXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghZHJvcGJ0blRyaWcuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICAgICAgICAgICFkcm9wZG93bkNvbnRlbnRUcmlnLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRUcmlnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZHJvcGJ0bkZ1bmMuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICAgICAgICAgICFkcm9wZG93bkNvbnRlbnRGdW5jLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRGdW5jLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuY29uc3QgYXJyID0gW1xuICAgIFwiMFwiLFxuICAgIFwiMVwiLFxuICAgIFwiMlwiLFxuICAgIFwiM1wiLFxuICAgIFwiNFwiLFxuICAgIFwiNVwiLFxuICAgIFwiNlwiLFxuICAgIFwiN1wiLFxuICAgIFwiOFwiLFxuICAgIFwiOVwiLFxuICAgIFwiK1wiLFxuICAgIFwiLVwiLFxuICAgIFwiL1wiLFxuICAgIFwiKlwiLFxuICAgIFwiJVwiLFxuICAgIFwiKFwiLFxuICAgIFwiKVwiLFxuICAgIFwiLlwiLFxuICAgIFwiz4BcIixcbiAgICBcImVcIixcbiAgICBcIiFcIixcbl07XG4vLyBkaXNwbGF5IGtleWJvYXJkIGtleSBvbiBzY3JlZW4gd2hlbiBrZXlib2FyZCBudW1iZXJzIG9yIG9wZXJhdG9ycyBjbGlja1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xuICAgIGlmIChhcnIuaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKTtcbiAgICAgICAgcmVzdWx0LnZhbHVlICs9IGV2ZW50LmtleTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCI9XCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpO1xuICAgICAgICAgICAgKDAsIHV0aWxzXzEuY2FsY3VsYXRlKShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKTtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IFwiTWFsZm9ybWVkIEV4cHJlc3Npb25cIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpO1xuICAgICAgICByZXN1bHQudmFsdWUgPSByZXN1bHQudmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgICAvLyBwcmV2ZW50IGZyb20gRW50ZXIga2V5IHByZXNzaW5nXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufSk7XG4vLyBHZXQgYWxsIHRoZSBudW1iZXIgYnV0dG9uc1xubGV0IG51bWJlckJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FsY0J0blwiKTtcbi8vIEFkZCBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggYnV0dG9uXG5mb3IgKGxldCBpID0gMDsgaSA8IG51bWJlckJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBudW1iZXJCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEdldCB0aGUgdmFsdWUgb2YgdGhlIGNsaWNrZWQgYnV0dG9uXG4gICAgICAgIGNvbnN0IGJ1dHRvblZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcbiAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBpbnB1dCBmaWVsZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKVxuICAgICAgICAgICAgLnZhbHVlO1xuICAgICAgICAvLyBBZGQgdGhlIGJ1dHRvbiB2YWx1ZSB0byB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIikudmFsdWUgPVxuICAgICAgICAgICAgcmVzdWx0ICsgYnV0dG9uVmFsdWU7XG4gICAgfSk7XG59XG4vLyB0byBnZXQgcmVzdWx0IG9uIHNjcmVlbiB3aGVuIGVxdWFsIGJ1dHRvbiBwcmVzc2VkIGJ5IHVzZXJcbmNvbnN0IGVxdWFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJldmFsXCIpO1xuaWYgKGVxdWFsQnRuKSB7XG4gICAgZXF1YWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpXG4gICAgICAgICAgICAgICAgLnZhbHVlO1xuICAgICAgICAgICAgKDAsIHV0aWxzXzEuY2FsY3VsYXRlKShyZXN1bHQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLnZhbHVlID1cbiAgICAgICAgICAgICAgICBcIk1hbGZvcm1lZCBFeHByZXNzaW9uXCI7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdWx0XCIpO1xuLy8gZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgdHdvIHBvd2VyIHhcbmNvbnN0IHR3b1Bvd3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R3b19wb3dlcl9YXCIpO1xudHdvUG93eC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVzZXJJcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLnZhbHVlO1xuICAgIGNvbnN0IG91dHB1dCA9IGAyKioke3VzZXJJcH1gO1xuICAgIHJlc3VsdC52YWx1ZSA9IG91dHB1dDtcbn0pO1xuLy8gZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgdGVuIHBvd2VyIHhcbmNvbnN0IHRlblBvd3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rlbl9wb3dlcl94XCIpO1xudGVuUG93eC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVzZXJJcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLnZhbHVlO1xuICAgIGNvbnN0IG91dHB1dCA9IGAxMCoqJHt1c2VySXB9YDtcbiAgICByZXN1bHQudmFsdWUgPSBvdXRwdXQ7XG59KTtcbi8vIGV2ZW50IGxpc3RlbmVyIHRvIHNvbHZlIGUgcG93ZXIgeFxuY29uc3QgZVBvd3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VfcG93ZXJfeFwiKTtcbmVQb3d4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXNlcklwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIikudmFsdWU7XG4gICAgY29uc3Qgb3V0cHV0ID0gYGUqKiR7dXNlcklwfWA7XG4gICAgcmVzdWx0LnZhbHVlID0gb3V0cHV0O1xufSk7XG4vLyBldmVudCBsaXN0ZW5lciB0byBzb2x2ZSBleHBcbmNvbnN0IGVQb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V4cFwiKTtcbmVQb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB1c2VySXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdFwiKS52YWx1ZTtcbiAgICBjb25zdCBvdXRwdXQgPSBgZSoqJHt1c2VySXB9YDtcbiAgICByZXN1bHQudmFsdWUgPSBvdXRwdXQ7XG59KTtcbi8vIGV2ZW50IGxpc3RlbmVyIHRvIHNvbHZlIDEveFxuY29uc3Qgb25lQnlYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvbmVfYnlfeFwiKTtcbm9uZUJ5WC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVzZXJJcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0XCIpLnZhbHVlO1xuICAgIGNvbnN0IG91dHB1dCA9IGAxLyR7dXNlcklwfWA7XG4gICAgcmVzdWx0LnZhbHVlID0gb3V0cHV0O1xufSk7XG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgc3F1YXJlIHJvb3Qgb2YgeFxuY29uc3Qgcm9vdFhidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RfeFwiKTtcbnJvb3RYYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9ICgwLCB1dGlsc18xLmNhbGN1bGF0ZVNxcnQpKHVzZXJJbnB1dCk7XG4gICAgcmVzdWx0LnZhbHVlID0gY2FsY3VsYXRlZFZhbHVlO1xufSk7XG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgY3ViZSByb290IG9mIHhcbmNvbnN0IHRocmVlUm9vdFhidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1YmVfcm9vdF94XCIpO1xudGhyZWVSb290WGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5jYWxjdWxhdGVDdWJlU3FydCkodXNlcklucHV0KTtcbiAgICByZXN1bHQudmFsdWUgPSBjYWxjdWxhdGVkVmFsdWU7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlICcrLy0nXG5jb25zdCBQbHVzYnlNaW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkaXRpb25fYnlfc3VidHJhY3Rpb25cIik7XG5QbHVzYnlNaW51cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldFBsdXNieU1pbnVzKShyZXN1bHQpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBhYnNvbHV0ZVxuKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN4X2Fic1wiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9ICgwLCB1dGlsc18xLmdldEFic29sdXRlKSh1c2VySW5wdXQpO1xuICAgIHJlc3VsdC52YWx1ZSA9IGNhbGN1bGF0ZWRWYWx1ZTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgZmxvb3JcbihfYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeF9mbG9vclwiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9ICgwLCB1dGlsc18xLmdldEZsb29yKSh1c2VySW5wdXQpO1xuICAgIHJlc3VsdC52YWx1ZSA9IGNhbGN1bGF0ZWRWYWx1ZTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgY2VpbFxuKF9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN4X2NlaWxcIikpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5nZXRDZWlsKSh1c2VySW5wdXQpO1xuICAgIHJlc3VsdC52YWx1ZSA9IGNhbGN1bGF0ZWRWYWx1ZTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgcm91bmRcbmNvbnN0IHJvdW5keCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeF9yb3VuZFwiKTtcbnJvdW5keC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5nZXRBYnNvbHV0ZSkodXNlcklucHV0KTtcbiAgICByZXN1bHQudmFsdWUgPSBjYWxjdWxhdGVkVmFsdWU7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlIHNpblxuY29uc3Qgc2luQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW5cIik7XG5zaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXRTaW5lKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBjb3NcbmNvbnN0IGNvc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29zXCIpO1xuY29zQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0Q29zKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSB0YW5cbmNvbnN0IHRhbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFuXCIpO1xudGFuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0VGFuKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBzZWNcbmNvbnN0IHNlY0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VjXCIpO1xuc2VjQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0U2VjKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBjb3NlY1xuY29uc3QgY3NjQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjc2NcIik7XG5jc2NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXRDc2MpKHJlc3VsdC52YWx1ZSk7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlIGNvdFxuY29uc3QgY290QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3RcIik7XG5jb3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXRDb3QpKHJlc3VsdC52YWx1ZSk7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIGdlbmVyYXRlIHJhbmRvbSBudW1iZXJzXG5jb25zdCByYW5kQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kXCIpO1xucmFuZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldFJhbmQpKHJlc3VsdCk7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIGdldCBkZWdyZWVcbmNvbnN0IGRlZ0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuRGVnXCIpO1xuZGVnQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0RGVnKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciBmb3IgZG1zXG5jb25zdCBkbXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRtc1wiKTtcbmRtc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldERlZ3JlZXNUb0RNUykocmVzdWx0LnZhbHVlKTtcbn0pO1xuLy8gYWRkIEV2ZW50TGlzdGVuZXIgZm9yIGYtZVxuY29uc3QgZml4ZWR0b0V4cG9uZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZVwiKTtcbmZpeGVkdG9FeHBvbmVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldEZlKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBNZW1vcnkgYnV0dG9ucyBFdmVudGxpc3RlbmVyXG4vLyBNZW1vcnkgc3RvcmUgZnVuY3Rpb25hbGl0eVxubGV0IG1lbW9yeVN0b3JlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1vcnlTdG9yZVwiKTtcbm1lbW9yeVN0b3JlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHJlc3VsdC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtb3J5Q2xlYXJcIikuZGlzYWJsZWQgPVxuICAgICAgICAgICAgZmFsc2U7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtb3J5UmVjYWxsXCIpLmRpc2FibGVkID1cbiAgICAgICAgICAgIGZhbHNlO1xuICAgIH1cbiAgICAoMCwgdXRpbHNfMS5tZW1vcnlTdG9yZSkocmVzdWx0KTtcbn0pO1xuLy8gTWVtb3J5IGNsZWFyIGZ1bmN0aW9uYWxpdHlcbmxldCBtZW1vcnlDbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVtb3J5Q2xlYXJcIik7XG5tZW1vcnlDbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtb3J5Q2xlYXJcIikuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtb3J5UmVjYWxsXCIpLmRpc2FibGVkID1cbiAgICAgICAgdHJ1ZTtcbiAgICAoMCwgdXRpbHNfMS5tZW1vcnlDbGVhcikoKTtcbn0pO1xuLy8gTWVtb3J5IHJlY2FsbCBmdW5jdGlvbmFsaXR5XG5sZXQgbWVtb3J5UmVjYWxsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1vcnlSZWNhbGxcIik7XG5tZW1vcnlSZWNhbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5tZW1vcnlSZWNhbGwpKHJlc3VsdCk7XG59KTtcbi8vIE1lbW9yeSBhZGRpdGlvbiBmdW5jdGlvbmFsaXR5XG5sZXQgbWVtb3J5QWRkaXRpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbW9yeVBsdXNcIik7XG5tZW1vcnlBZGRpdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLm1lbW9yeUFkZGl0aW9uKShyZXN1bHQpO1xufSk7XG4vLyBNZW1vcnkgc3VidHJhY3Rpb24gZnVuY3Rpb25hbGl0eVxubGV0IG1lbW9yeVN1YnRyYWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW1vcnlNaW51c1wiKTtcbm1lbW9yeVN1YnRyYWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEubWVtb3J5U3VidHJhY3Rpb24pKHJlc3VsdCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==