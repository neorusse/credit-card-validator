// Function to display result
const displayResult = () => {

    // Get specified class and assign to variable
    let enteredNumber = document.querySelector('.js-creditcardnumber');
    let validationResult = document.querySelector('.js-validationResult');

    if (enteredNumber.value === '') {
        return validationResult.innerHTML = "";
    }

    // Conditional to check cardValidator() function
    if (cardValidator(enteredNumber.value) === true) {
        validationResult.innerHTML = 'Credit Card is Valid!';
    } else {
        validationResult.innerHTML = 'Invalid Credit Card!';
    }

}

// Function to Validate Card Number
const cardValidator = str => {

    // Use RegExp.test(str) to check if str contains the pattern
    if (/[^0-9-\s]+/.test(str)) {
        return false;
    } else {
        let even = false;
        let sum = 0;

        // Loop through the length of str
        for (let i = str.length - 1; i >= 0; i--) {
            // Returns the last character of the str as the loop runs
            let digit = str.charAt(i);
            // Parse digit into integer
            digit = parseInt(digit);

            if (even) {

                if (digit * 2 > 9) {
                    sum += (digit * 2) % 10 + 1;
                } else {
                    sum += digit * 2;
                }

            } else
                sum += digit;
            even = !even;
        }

        if (sum % 10 === 0) {
            return true;
        } else {
            return false;
        }
    }
}
