const productNameInputElement = document.getElementById("product-name");
const remainingCharselement = document.getElementById("remaining-chars");

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharselement.textContent = remainingCharacters;

  if (remainingCharacters === 0) {
    remainingCharselement.classList.add("error");
    productNameInputElement.classList.add("error");
  } else if(remainingCharacters <=10) {
    remainingCharselement.classList.add("warning");
    productNameInputElement.classList.add("warning");

  } else {
    remainingCharselement.classList.remove("error", "warning");
    productNameInputElement.classList.remove("error", "warning");
    
  }
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
