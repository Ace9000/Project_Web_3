// first Example: Sum Numbers.

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputresultElement = document.getElementById("calculated-sum");

  outputresultElement.textContent = sumUpToNumber;
  outputresultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);

//Highlight Links

const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

//Display user data

const dummyUserData = {
  firstName: "Anastas",
  lastName: "Acevski",
  age: 32,
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = "";

  for (const key in dummyUserData) {
    const newUserDataListItemelement = document.createElement("li");
    const outputText = key.toUpperCase() + ":" + dummyUserData[key];
    newUserDataListItemelement.textContent = outputText;
    outputDataElement.append(newUserDataListItemelement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

//Statistics / Roll the Dice

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputelement =
    document.getElementById("user-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");

  const enteredNumber = targetNumberInputelement.value;
  diceRollsListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberofRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //      hasRolledTargetNumber == true;
    //  }
    numberofRolls = numberofRolls + 1; //numberofRolls ++
    const newRollListItemElement = document.createElement("li");
    const outputText = "Roll" + numberofRolls + ":" + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberofRolls;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);
