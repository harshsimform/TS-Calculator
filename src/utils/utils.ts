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

// add Eventlistener to toggle operand sign
const PlusbyMinus: HTMLButtonElement = document.querySelector(
  "#addition_by_subtraction"
)!;
PlusbyMinus.addEventListener("click", () => {
  const userInput: string = result.value;
  lastOperandSign = lastOperandSign === "-" ? "+" : "-"; // toggle the last operand sign every time the button is clicked
  const calculatedValue: string = toggleLastOperandSign(userInput);
  result.value = calculatedValue;
});
let lastOperandSign = "+"; // initialize lastOperandSign to "+" when the page loads

// function to toggle operand sign
function toggleLastOperandSign(input: string): string {
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
      } else {
        newString += `${num}`;
      }
    } else {
      newString += `${num}`;
    }
    let opRegex = /[-+/*]/g;
    let opMatch = opRegex.exec(input);
    while (
      opMatch !== null &&
      opMatch.index < input.indexOf(nums[i + 1] || "")
    ) {
      newString += `${opMatch[0]}`;
      opMatch = opRegex.exec(input);
    }
  }
  return newString;
}
