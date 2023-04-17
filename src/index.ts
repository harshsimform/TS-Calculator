import {
  calculate,
  calculateSqrt,
  calculateCubeSqrt,
  getAbsolute,
  getCeil,
  getFloor,
  getCos,
  getCot,
  getCsc,
  getSec,
  getSine,
  getTan,
  getDeg,
  getRand,
  getPlusbyMinus,
  getDegreesToDMS,
  getFe,
  memoryClear,
  memoryOperation,
  memoryRecall,
  memoryStore,
} from "./utils/utils";

// toggle button
const toggleButton: HTMLButtonElement =
  document.querySelector("#toggle-button")!;
const buttons1: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".button1")!;
const buttons2: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".button2")!;

// toggle button event listener
toggleButton.addEventListener("click", () => {
  buttons1.forEach((button1: HTMLButtonElement) => {
    button1.classList.toggle("hidden");
  });
  buttons2.forEach((button2: HTMLButtonElement) => {
    button2.classList.toggle("hidden");
  });
});

// show dropdown menu on Trigonimetry button click
const dropbtnTrig: HTMLButtonElement =
  document.querySelector("#dropdownBtnTrig")!;
const dropdownContentTrig: HTMLButtonElement =
  document.querySelector("#myDropdownTrig")!;

// show dropdown menu on Function button click
const dropbtnFunc: HTMLButtonElement =
  document.querySelector("#dropdownBtnFunc")!;
const dropdownContentFunc: HTMLButtonElement =
  document.querySelector("#myDropdownFunc")!;

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
    document.addEventListener("click", (event: MouseEvent) => {
      if (
        !dropbtnTrig.contains(event.target as Node) &&
        !dropdownContentTrig.contains(event.target as Node)
      ) {
        dropdownContentTrig.style.display = "none";
      }
      if (
        !dropbtnFunc.contains(event.target as Node) &&
        !dropdownContentFunc.contains(event.target as Node)
      ) {
        dropdownContentFunc.style.display = "none";
      }
    });
  }
}

const arr: string[] = [
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

const result: HTMLInputElement = document.querySelector("#result")!;

// display keyboard key on screen when keyboard numbers or operators click
document.addEventListener("keydown", (event: KeyboardEvent) => {
  // console.log(event);
  if (arr.includes(event.key)) {
    result.value += event.key;
  }
  if (event.key === "=") {
    try {
      calculate(result.value);
      if (result.value === "") {
        result.value = "";
      }
    } catch (error) {
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
let numberButtons: HTMLCollectionOf<Element> =
  document.getElementsByClassName("calcBtn");
// Add a click event listener to each button
for (let i = 0; i < numberButtons.length; i++) {
  (<HTMLButtonElement>numberButtons[i]).addEventListener(
    "click",
    function (this: HTMLElement) {
      // Get the value of the clicked button
      const buttonValue: string | null = this.getAttribute("value");

      // Get the current value of the input field
      const result: string = (
        document.getElementById("result") as HTMLInputElement
      ).value;

      // Add the button value to the input field
      (document.getElementById("result") as HTMLInputElement).value =
        result + buttonValue;
    }
  );
}

// to get result on screen when equal button pressed by user
const equalBtn = document.getElementById("eval");
if (equalBtn) {
  equalBtn.addEventListener("click", () => {
    try {
      const result: string = (
        document.getElementById("result") as HTMLInputElement
      ).value;
      calculate(result);
      if (result === "") {
        (document.getElementById("result") as HTMLInputElement).value = "";
      }
    } catch (error) {
      (document.getElementById("result") as HTMLInputElement).value =
        "Malformed Expression";
    }
  });
}

// event listener to solve two power x
const twoPowx: HTMLButtonElement = document.querySelector("#two_power_X")!;
twoPowx.addEventListener("click", function () {
  const userIp: string = result.value;
  const output: string = `2**${userIp}`;
  result.value = output;
});

// event listener to solve ten power x
const tenPowx: HTMLButtonElement = document.querySelector("#ten_power_x")!;
tenPowx.addEventListener("click", function () {
  const userIp: string = result.value;
  const output: string = `10**${userIp}`;
  result.value = output;
});

// event listener to solve e power x
const ePowx: HTMLButtonElement = document.querySelector("#e_power_x")!;
ePowx.addEventListener("click", function () {
  const userIp: string = result.value;
  const output: string = `e**${userIp}`;
  result.value = output;
});

// event listener to solve exp
const ePow: HTMLButtonElement = document.querySelector("#exp")!;
ePow.addEventListener("click", function () {
  const userIp: string = result.value;
  const output: string = `e**${userIp}`;
  result.value = output;
});

// event listener to solve 1/x
const oneByX: HTMLButtonElement = document.querySelector("#one_by_x")!;
oneByX.addEventListener("click", function () {
  const userIp: string = result.value;
  const output: string = `1/${userIp}`;
  result.value = output;
});

// add event listener to solve square root of x
const rootXbtn: HTMLButtonElement = document.querySelector("#root_x")!;
rootXbtn.addEventListener("click", () => {
  const userInput: string = result.value;
  const calculatedValue: string = calculateSqrt(userInput);
  result.value = calculatedValue;
});

// add event listener to solve cube root of x
const threeRootXbtn: HTMLButtonElement =
  document.querySelector("#cube_root_x")!;
threeRootXbtn.addEventListener("click", () => {
  const userInput: string = result.value;
  const calculatedValue: string = calculateCubeSqrt(userInput);
  result.value = calculatedValue;
});

// add Eventlistener to solve '+/-'
const PlusbyMinus: HTMLButtonElement = document.querySelector(
  "#addition_by_subtraction"
)!;
PlusbyMinus.addEventListener("click", () => {
  getPlusbyMinus(result);
});

// add Eventlistener to solve absolute
document.querySelector("#x_abs")?.addEventListener("click", () => {
  const userInput: string = result.value;
  const calculatedValue: string = getAbsolute(userInput);
  result.value = calculatedValue;
});

// add Eventlistener to solve floor
document.querySelector("#x_floor")?.addEventListener("click", () => {
  const userInput: string = result.value;
  const calculatedValue: string = getFloor(userInput);
  result.value = calculatedValue;
});

// add Eventlistener to solve ceil
document.querySelector("#x_ceil")?.addEventListener("click", () => {
  const userInput: string = result.value;
  const calculatedValue: string = getCeil(userInput);
  result.value = calculatedValue;
});

// add Eventlistener to solve round
const roundx: HTMLButtonElement = document.querySelector("#x_round")!;
roundx.addEventListener("click", () => {
  const userInput: string = result.value;
  const calculatedValue: string = getAbsolute(userInput);
  result.value = calculatedValue;
});

// add Eventlistener to solve sin
const sinBtn: HTMLButtonElement = document.querySelector("#sin")!;
sinBtn.addEventListener("click", () => {
  getSine(result.value);
});

// add Eventlistener to solve cos
const cosBtn: HTMLButtonElement = document.querySelector("#cos")!;
cosBtn.addEventListener("click", () => {
  getCos(result.value);
});

// add Eventlistener to solve tan
const tanBtn: HTMLButtonElement = document.querySelector("#tan")!;
tanBtn.addEventListener("click", () => {
  getTan(result.value);
});

// add Eventlistener to solve sec
const secBtn: HTMLButtonElement = document.querySelector("#sec")!;
secBtn.addEventListener("click", () => {
  getSec(result.value);
});

// add Eventlistener to solve cosec
const cscBtn: HTMLButtonElement = document.querySelector("#csc")!;
cscBtn.addEventListener("click", () => {
  getCsc(result.value);
});

// add Eventlistener to solve cot
const cotBtn: HTMLButtonElement = document.querySelector("#cot")!;
cotBtn.addEventListener("click", () => {
  getCot(result.value);
});

// add Eventlistener to generate random numbers
const randBtn: HTMLButtonElement = document.querySelector("#rand")!;
randBtn.addEventListener("click", () => {
  getRand(result);
});

// add Eventlistener to get degree
const degBtn: HTMLButtonElement = document.querySelector("#btnDeg")!;
degBtn.addEventListener("click", () => {
  getDeg(result.value);
});

// add Eventlistener for dms
const dmsBtn: HTMLButtonElement = document.querySelector("#dms")!;
dmsBtn.addEventListener("click", () => {
  getDegreesToDMS(result.value);
});

// add EventListener for f-e
const fixedtoExponent: HTMLButtonElement = document.querySelector("#fe")!;
fixedtoExponent.addEventListener("click", () => {
  getFe(result.value);
});

// Memory buttons Eventlistener
const memoryButtons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".memory-button");
memoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonId: string = button.id;
    switch (buttonId) {
      case "memoryStore":
        if (result.value != "") {
          memoryStore(result);
        }
        break;
      case "memoryClear":
        memoryClear();
        break;
      case "memoryRecall":
        memoryRecall(result);
        break;
      case "memoryPlus":
        memoryOperation(result, "add");
        break;
      case "memoryMinus":
        memoryOperation(result, "subtract");
        break;
      default:
        break;
    }
  });
});
