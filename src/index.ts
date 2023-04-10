import {
  calculate,
  calculateSqrt,
  calculateCubeSqrt,
  getAbsolute,
  getCeil,
  getFloor,
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
const dropbtnTrig: HTMLElement | null =
  document.querySelector("#dropdownBtnTrig");
const dropdownContentTrig: HTMLElement | null =
  document.querySelector("#myDropdownTrig");

// show dropdown menu on Function button click
const dropbtnFunc: HTMLElement | null =
  document.querySelector("#dropdownBtnFunc");
const dropdownContentFunc: HTMLElement | null =
  document.querySelector("#myDropdownFunc");

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

// display keyboard key on screen when keyboard numbers or operators click
document.addEventListener("keydown", (event: KeyboardEvent) => {
  // console.log(event);
  if (arr.includes(event.key)) {
    const result = document.getElementById("result") as HTMLInputElement;
    result.value += event.key;
  }
  if (event.key === "=") {
    try {
      const result = document.getElementById("result") as HTMLInputElement;
      calculate(result.value);
      if (result.value === "") {
        result.value = "";
      }
    } catch (error) {
      const result = document.getElementById("result") as HTMLInputElement;
      result.value = "Malformed Expression";
    }
  }
  if (event.key === "Backspace") {
    const result = document.getElementById("result") as HTMLInputElement;
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
      const buttonValue = this.getAttribute("value");

      // Get the current value of the input field
      const result = (document.getElementById("result") as HTMLInputElement)
        .value;

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
      const result = (document.getElementById("result") as HTMLInputElement)
        .value;
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

const result: HTMLInputElement = document.querySelector("#result")!;

// event listener to solve two power x
const twoPowx: HTMLButtonElement = document.querySelector("#two_power_X")!;
twoPowx.addEventListener("click", function () {
  const userIp = (document.getElementById("result") as HTMLInputElement).value;
  const output = `2**${userIp}`;
  result.value = output;
});

// event listener to solve ten power x
const tenPowx: HTMLButtonElement = document.querySelector("#ten_power_x")!;
tenPowx.addEventListener("click", function () {
  const userIp = (document.getElementById("result") as HTMLInputElement).value;
  const output = `10**${userIp}`;
  result.value = output;
});

// event listener to solve ten power x
const ePowx: HTMLButtonElement = document.querySelector("#e_power_x")!;
ePowx.addEventListener("click", function () {
  const userIp = (document.getElementById("result") as HTMLInputElement).value;
  const output = `e**${userIp}`;
  result.value = output;
});

// add event listener to solve square root of x
const rootXbtn: HTMLButtonElement = document.querySelector("#root_x")!;
rootXbtn.addEventListener("click", () => {
  const userInput = result.value;
  const calculatedValue = calculateSqrt(userInput);
  result.value = calculatedValue;
});

// add event listener to solve cube root of x
const threeRootXbtn: HTMLButtonElement =
  document.querySelector("#cube_root_x")!;
threeRootXbtn.addEventListener("click", () => {
  const userInput = result.value;
  const calculatedValue = calculateCubeSqrt(userInput);
  result.value = calculatedValue;
});

// add Eventlistener to solve absolute
document.querySelector("#x_abs")?.addEventListener("click", () => {
  const userInput = result.value;
  const calculatedValue = getAbsolute(userInput);
  result.value = calculatedValue;
});

// add Eventlistener to solve floor
document.querySelector("#x_floor")?.addEventListener("click", () => {
  const userInput = result.value;
  const calculatedValue = getFloor(userInput);
  result.value = calculatedValue;
});

// add Eventlistener to solve ceil
document.querySelector("#x_ceil")?.addEventListener("click", () => {
  const userInput = result.value;
  const calculatedValue = getCeil(userInput);
  result.value = calculatedValue;
});

// add Eventlistener to solve round
const roundx: HTMLButtonElement = document.querySelector("#x_round")!;
roundx.addEventListener("click", () => {
  const userInput = result.value;
  const calculatedValue = getAbsolute(userInput);
  result.value = calculatedValue;
});
