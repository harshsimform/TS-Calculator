// function to calculate factorial and normal calculation
export function calculate(input: string): void {
  let result: HTMLInputElement = document.querySelector("#result")!;
  if (result) {
    // check if the input includes the "!" symbol then perform factorial function
    if (input.includes("!")) {
      const num: number = parseInt(input.slice(0, -1));
      // need for the type guard on resultFact, since we are immediately converting it to a string using the toString() method
      const resultFact: string = factorial(num).toString();
      // assign the calculated factorial value back to the input field
      const resultElem: HTMLInputElement = document.querySelector("#result")!;
      if (resultElem) {
        resultElem.value = resultFact;
      }
    } else if (input.includes("π") || input.includes("e")) {
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
      input = input.replace(/--/g, "+");
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
function factorial(num: number): number | never {
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
function evaluateLog(input: string): number {
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
function evaluateNaturalLog(input: string): number | never {
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
function calculateRoot(input: string): number | never {
  const parts: string[] = input.split("√");
  // add null check and default value of 0
  const x: number = parseFloat(parts[1] || "0");

  if (isNaN(x)) {
    throw new Error("Invalid input");
  } else if (parts.length === 1) {
    return Math.sqrt(x);
  } else if (parts.length === 2) {
    // add null check and default value of 0
    const y: number = parseFloat(parts[0] || "0");
    if (isNaN(y)) {
      throw new Error("Invalid input");
    } else {
      return Math.pow(x, 1 / y);
    }
  } else {
    throw new Error("Invalid input");
  }
}

// function to calculate Square root
export function calculateSqrt(input: string): string {
  const num: number = parseFloat(input);
  if (isNaN(num)) {
    return "";
  } else {
    return Math.sqrt(num).toString();
  }
}

// function to calculate cube root
export function calculateCubeSqrt(input: string): string {
  const num: number = parseFloat(input);
  if (isNaN(num)) {
    return "";
  } else {
    return Math.cbrt(num).toString();
  }
}

// function to generate absolute value
export function getAbsolute(input: string): string {
  const num: number = parseFloat(input);
  if (isNaN(num)) {
    return "";
  } else {
    return Math.abs(num).toString();
  }
}

// function to generate Floor value
export function getFloor(input: string): string {
  const num: number = parseFloat(input);
  if (isNaN(num)) {
    return "";
  } else {
    return Math.floor(num).toString();
  }
}

// function to generate Ceil value
export function getCeil(input: string): string {
  const num: number = parseFloat(input);
  if (isNaN(num)) {
    return "";
  } else {
    return Math.ceil(num).toString();
  }
}

// function to toggle operand sign
export function getPlusbyMinus(input: HTMLInputElement) {
  let userStr: string = input.value.toString();
  if (userStr.charAt(0) === "-") {
    input.value = input.value.substring(1, input.value.length);
  } else {
    input.value = "-" + input.value;
  }
}

// check which unit of angle is selected by user
let unitOfAngle: string = "DEG";
const buttonOfUnit: HTMLElement = document.getElementById("deg")!;
buttonOfUnit.addEventListener("click", () => {
  unitOfAngle = unitOfAngle === "DEG" ? "RAD" : "DEG";
  buttonOfUnit.innerHTML = unitOfAngle;
});

// common function to calculate all Trigonometry functions
function calculateTrigValue(input: string, trigFunc: (x: number) => number) {
  if (unitOfAngle === "RAD") {
    let radians: number = parseFloat(input);
    result.value = trigFunc(radians).toString();
  } else if (unitOfAngle === "DEG") {
    let degree: number = parseFloat(input) * (Math.PI / 180);
    result.value = trigFunc(degree).toString();
  }
}

// function for get sine value
export function getSine(input: string): void | never {
  if (!input) {
    throw new Error("Invalid input");
  }
  return calculateTrigValue(input, Math.sin);
}

// function for get cos value
export function getCos(input: string): void | never {
  if (!input) {
    throw new Error("Invalid input");
  }
  return calculateTrigValue(input, Math.cos);
}

// function for get tan value
export function getTan(input: string): void | never {
  if (!input) {
    throw new Error("Invalid input");
  }
  return calculateTrigValue(input, Math.tan);
}

// function for get sec value
export function getSec(input: string): void | never {
  if (!input) {
    throw new Error("Invalid input");
  }
  return calculateTrigValue(input, (radians) => 1 / Math.cos(radians));
}

// function for get cosec value
export function getCsc(input: string): void | never {
  if (!input) {
    throw new Error("Invalid input");
  }
  return calculateTrigValue(input, (radians) => 1 / Math.sin(radians));
}

// function for get cot value
export function getCot(input: string): void | never {
  if (!input) {
    throw new Error("Invalid input");
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
    let deg: number = Number(input) * (180 / Math.PI);
    result.value = deg.toString();
  } else {
    result.value = (Number(result.value) / 0.0147).toString();
  }
}

// function to get Degree to DMS
export function getDegreesToDMS(input: string) {
  if (unitOfAngle === "DEG") {
    let d: number = Math.floor(Number(input));
    let m: number = Math.floor((Number(input) - d) * 60);
    let s: string = ((Number(input) - d - m / 60) * 3600).toFixed(2);
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

function getMemoryValue(): number {
  return parseInt(document.getElementById("memoryShow")!.innerHTML);
}

// function for memory addition and subtraction
export function memoryOperation(
  input: HTMLInputElement,
  operation: "add" | "subtract"
) {
  const inputVal: number = parseInt(input.value);
  if (!isNaN(inputVal)) {
    let memoryVal: number = getMemoryValue();
    if (operation === "add") {
      memoryVal += inputVal;
    } else if (operation === "subtract") {
      memoryVal -= inputVal;
    }
    document.getElementById("memoryShow")!.innerHTML = memoryVal.toString();
  }
  let memoryVal: HTMLElement = document.querySelector("#memoryShow")!;

  if (memoryVal.innerHTML >= "1" || memoryVal.innerHTML <= "1") {
    (document.getElementById("memoryClear") as HTMLButtonElement).disabled =
      false;
    (document.getElementById("memoryRecall") as HTMLButtonElement).disabled =
      false;
  }
}

function updateMemoryButtons() {
  let memoryVal: HTMLElement = document.querySelector("#memoryShow")!;
  (document.getElementById("memoryClear") as HTMLButtonElement).disabled =
    memoryVal.innerHTML === "0";
  (document.getElementById("memoryRecall") as HTMLButtonElement).disabled =
    memoryVal.innerHTML === "0";
}

// function to store memory
export function memoryStore(input: HTMLInputElement) {
  document.getElementById("memoryShow")!.innerHTML = input.value || "0";
  updateMemoryButtons();
}

// function to clear memory
export function memoryClear() {
  document.getElementById("memoryShow")!.innerHTML = "" || "0";
  updateMemoryButtons();
}

// function for memory recall
export function memoryRecall(input: HTMLInputElement) {
  input.value = document.getElementById("memoryShow")!.innerHTML;
}
