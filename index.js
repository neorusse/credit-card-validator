// Function to display result
const displayResult = () => {
  // Get specified class and assign to variable
  let enteredNumber = document.querySelector('.js-creditcardnumber');
  let validationResult = document.querySelector('.js-validationResult');

  // If no number is entered into the card input field, Validation Result should output empty
  if (enteredNumber.value === '') {
    return (validationResult.innerHTML = '');
  }

  // Conditional to check cardValidator() function
  if (cardValidator(enteredNumber.value) === true) {
    validationResult.innerHTML = 'Credit Card is Valid!';
  } else {
    validationResult.innerHTML = 'Invalid Credit Card!';
  }
};

// Function to Validate Card Number
const cardValidator = str => {
  // Accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(str)) return false;

  let doubleUp = false;
  let sum = 0;

  // Loop through the length of str
  for (let i = str.length - 1; i >= 0; i--) {
    // Parse str into integer
    let digit = parseInt(str.charAt(i));
    // from the right to left, double every other digit starting with the second to last digit.
    if (doubleUp) {
      if ((digit * 2) > 9) {
        sum += (digit * 2) - 9;
      } else {
        sum += (digit * 2);
      }
    } else {
      sum += digit;
    }
    doubleUp = !doubleUp;
  }

  // sum divide by 10, if the remainder equals zero, the original credit card number is valid.
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
};
