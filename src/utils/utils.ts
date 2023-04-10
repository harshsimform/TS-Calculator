// function to calculate factorial and normal calculation
export function calculate(input: string): void {
  let result: HTMLInputElement | null = document.querySelector("#result");
  if (result) {
    // check if the input includes the "!" symbol then perform factorial function
    if (input.includes("!")) {
      const num: number = parseInt(input.slice(0, -1));
      // need for the type guard on resultFact, since we are immediately converting it to a string using the toString() method
      const resultFact = factorial(num).toString();
      // assign the calculated factorial value back to the input field
      const resultElem: HTMLInputElement | null =
        document.querySelector("#result");
      if (resultElem) {
        resultElem.value = resultFact;
      }
    } else if (input.includes("π") || input.includes("e")) {
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
        const resultEval: number = eval(input);
        if (result) result.value = resultEval.toFixed(11).toString();
      } catch (error) {
        if (result) result.value = "Invalid expression";
      }
    }
    // check if input includes log
    else if (input.includes("log")) {
      const logResult = evaluateLog(input);

      if (typeof logResult === "number") {
        result.value = logResult.toString();
      } else {
        result.value = logResult;
      }
    }

    // check and evaluate if input includes ln
    else if (input.includes("ln")) {
      let naturalLogResult: number | string = evaluateNaturalLog(input);
      // used type guard
      if (typeof naturalLogResult === "number") {
        naturalLogResult = naturalLogResult.toString();
      }
      result.value = naturalLogResult;
    }
    // check and evaluate root
    else if (input.includes("√")) {
      let rootResult: number | string = calculateRoot(input);
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
        const exprResult: number = eval(input);
        result.value = exprResult.toString();
      } catch {
        result.value = "Invalid input";
      }
    }
  }
}

const result: HTMLInputElement = document.querySelector("#result")!;

// factorial function
function factorial(num: number): number | string {
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
function evaluateLog(input: string): number | string {
  // split the input value into the number before and after 'log'
  const [base, number] = input.split("log");

  // convert the base and number to numbers using the Number() method
  const baseNum = Number(base) || 10;
  const numberNum = Number(number);

  // calculate the logarithm with the specified base using the Math.log() method and display the result
  const tempAnswer = Math.log(numberNum) / Math.log(baseNum);
  const resultLog = tempAnswer.toString();
  const decimalIndex = resultLog.indexOf(".");
  const multipliedNum =
    decimalIndex > 0 && resultLog[decimalIndex - 1] === "0"
      ? Number(resultLog)
      : tempAnswer;
  return multipliedNum;
}

// function to calculate Natural Log
function evaluateNaturalLog(input: string): number | string {
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
function calculateRoot(input: string): number | string {
  const parts: string[] = input.split("√");
  // add null check and default value of 0
  const x: number = parseFloat(parts[1] || "0");

  if (isNaN(x)) {
    return "Invalid input";
  } else if (parts.length === 1) {
    return Math.sqrt(x);
  } else if (parts.length === 2) {
    // add null check and default value of 0
    const y: number = parseFloat(parts[0] || "0");
    if (isNaN(y)) {
      return "Invalid input";
    } else {
      return Math.pow(x, 1 / y);
    }
  } else {
    return "Invalid input";
  }
}

// function to calculate Square root
export function calculateSqrt(input: string): string {
  const num = parseFloat(input);
  if (isNaN(num)) {
    return "";
  } else {
    return Math.sqrt(num).toString();
  }
}

// function to calculate cube root
export function calculateCubeSqrt(input: string): string {
  const num = parseFloat(input);
  if (isNaN(num)) {
    return "";
  } else {
    return Math.cbrt(num).toString();
  }
}

// function to generate absolute value
export function getAbsolute(input: string): string {
  const num = parseFloat(input);
  if (isNaN(num)) {
    return "";
  } else {
    return Math.abs(num).toString();
  }
}

// function to generate Floor value
export function getFloor(input: string): string {
  const num = parseFloat(input);
  if (isNaN(num)) {
    return "";
  } else {
    return Math.floor(num).toString();
  }
}

// function to generate Ceil value
export function getCeil(input: string): string {
  const num = parseFloat(input);
  if (isNaN(num)) {
    return "";
  } else {
    return Math.ceil(num).toString();
  }
}

// function to toggle operand sign
export function getPlusbyMinus(input: HTMLInputElement) {
  let userStr = input.value.toString();
  if (userStr.charAt(0) === "-") {
    input.value = input.value.substring(1, input.value.length);
  } else {
    input.value = "-" + input.value;
  }
}

// check which unit of angle is selected by user
let unitOfAngle: string = "DEG";
const buttonOfUnit = document.getElementById("deg")!;
buttonOfUnit.addEventListener("click", () => {
  unitOfAngle = unitOfAngle === "DEG" ? "RAD" : "DEG";
  buttonOfUnit.innerHTML = unitOfAngle;
});

// common function to calculate all Trigonometry functions
function calculateTrigValue(input: string, trigFunc: (x: number) => number) {
  if (unitOfAngle === "RAD") {
    let radians = parseFloat(input);
    result.value = trigFunc(radians).toString();
  } else if (unitOfAngle === "DEG") {
    let degree = parseFloat(input) * (Math.PI / 180);
    result.value = trigFunc(degree).toString();
  }
}

// function for get sine value
export function getSine(input: string) {
  if (!input) {
    return "Invalid input";
  }
  return calculateTrigValue(input, Math.sin);
}

// function for get cos value
export function getCos(input: string) {
  if (!input) {
    return "Invalid input";
  }
  return calculateTrigValue(input, Math.cos);
}

// function for get tan value
export function getTan(input: string) {
  if (!input) {
    return "Invalid input";
  }
  return calculateTrigValue(input, Math.tan);
}

// function for get sec value
export function getSec(input: string) {
  if (!input) {
    return "Invalid input";
  }
  return calculateTrigValue(input, (radians) => 1 / Math.cos(radians));
}

// function for get cosec value
export function getCsc(input: string) {
  if (!input) {
    return "Invalid input";
  }
  return calculateTrigValue(input, (radians) => 1 / Math.sin(radians));
}

// function for get cot value
export function getCot(input: string) {
  if (!input) {
    return "Invalid input";
  }
  return calculateTrigValue(input, (radians) => 1 / Math.tan(radians));
}

// function to generate random numbers
export function getRand(input: HTMLInputElement) {
  input.value = Math.random().toString();
}

// function to get degree
export function getDeg(input: string) {
  if (unitOfAngle === "RAD") {
    let deg = Number(input) * (180 / Math.PI);
    result.value = deg.toString();
  } else {
    result.value = (Number(result.value) / 0.0147).toString();
  }
}

// function to get Degree to DMS
export function getDegreesToDMS(input: string) {
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
  } else {
    alert("Please select DEG option first");
    result.value = "";
  }
}

// function to get fixed to exponent
export function getFe(input: string) {
  if (input == "" || input == "0") {
    input = "0";
  } else {
    input = `${input}e+0`;
  }
  result.value = input;
}

// function to store memory
export function memoryStore(input: HTMLInputElement) {
  document.getElementById("memoryShow")!.innerHTML = input.value || "0";
}

// function to clear memory
export function memoryClear() {
  document.getElementById("memoryShow")!.innerHTML = "" || "0";
}

function getMemoryValue() {
  return parseInt(document.getElementById("memoryShow")!.innerHTML);
}

// function for memory addition
export function memoryAddition(input: HTMLInputElement) {
  let showResult = (getMemoryValue() + parseInt(input.value)).toString();
  document.getElementById("memoryShow")!.innerHTML = showResult;
}

// function for memory subtraction
export function memorySubtraction(input: HTMLInputElement) {
  let showResult = (getMemoryValue() - parseInt(input.value)).toString();
  document.getElementById("memoryShow")!.innerHTML = showResult;
}

// function for memory recall
export function memoryRecall(input: HTMLInputElement) {
  input.value = document.getElementById("memoryShow")!.innerHTML;
}
