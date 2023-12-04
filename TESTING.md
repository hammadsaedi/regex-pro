# Testing RegEx Pro Code
As you work on your code, run the [Jest](https://jestjs.io/docs/getting-started) test suites associated with the files and functions you are contributing to.

## Test Environment Configuration
Regex Pro utilizes the Jest testing framework, which requires Node.js and NPM to install and configure dependencies. 

1. Ensure you have a current version of Node.JS and NPM installed:
`node -v` and `npm -v`
If needed, download and install [Node.js](https://nodejs.org/).
•	Follow the installation instructions for your operating system.

2. Run the following command to install project dependencies:
`npm install`

## Running the Jest Test Suite
- Run All Tests:
`npm test`

- Run a Specific Test File:
`npm test ./tests/test_filename.test.js`

- Run Tests in Watch Mode (test real-time changes):
`npm test ./tests/test_filename.test.js --watch` 

- Jest will run all/selected tests and display the results in the terminal.

## Adding New Tests
1.	Locate Test Files:
- Test files are  located in the ./tests directory.
- Regex Pro test files use the naming convention of the "filename to be tested" + .test.js
2.	Create a New Test File:
- If you need to add a new test file, create a file with a .test.js extension in the appropriate directory.
3.	Write Tests:
- Use the Jest testing framework to write your tests. Refer to existing tests for examples.
4.	Run Tests Locally:
- Run your tests locally to ensure they pass:
`npm test ./tests/test_filename.test.js` 


## RegEx Pro Test Suites 

## factory.test.js

### createFormWithRegex Tests:

#### Test: 'Creates a form with regex inputs'
Purpose: Checks if the createFormWithRegex function creates a form with the correct structure, input elements, and initial values.

Assertions:
- Checks if the form is a FORM element.
- Verifies the presence and content of the h3 (form title) and p (explanation) elements.
- Ensures the existence of a text input and a textarea for regex input.
- Verifies the placeholder values for the text input and textarea.
- Checks if the initial value of the textarea is set correctly.
- Validates that the text input has the 'required' class for styling.

#### Test: 'Valid inputs'
Purpose: Checks if the form is correctly created with valid input patterns.

Assertions:
- Creates two forms with numeric and alphabetic regex patterns and validates that the text input is empty initially.

#### Test: 'Empty input'
Purpose: Checks how the form handles an empty regex pattern.

Assertions:
- Creates a form with an empty regex pattern and ensures that the text input does not have the 'valid' class.

### createExtractionForm Test:

#### Test: 'Creates an extraction form with regex inputs'
Purpose: Checks if the createExtractionForm function creates a form for extracting matches with the correct structure and initial values.

Assertions:
- Verifies the form structure, including the h3 (form title), p (explanation), text input, textarea, and an unordered list.
- Validates the placeholder values and initial regex pattern value.
- Ensures the existence of an unordered list for displaying extracted matches.

### createSanitizationForm Test:

#### Test: 'Creates a sanitization form with regex inputs'
Purpose: Checks if the createSanitizationForm function creates a form for sanitizing matches with the correct structure and initial values.

Assertions:
- Verifies the form structure, including the h3 (form title), p (explanation), text input, textarea for regex, and a readonly textarea for displaying sanitized text.
- Validates the placeholder values and initial regex pattern value.
- Ensures the existence of a readonly textarea for displaying sanitized text.

### factory.test.js Notes:
- The tests cover a range of cases, including empty regex patterns, and the correct initialization of form elements.
- The associated JavaScript file (factory.js) contains functions for creating forms with regex inputs, including validation, extraction, and sanitization functionalities.


## pages.test.js

### Validation Forms Tests:
#### Test: 'Creates a validation form for Four-digit number'
Purpose: Tests the creation of a validation form for a four-digit number.

Assertions:
- Checks form structure, title, and explanation.
- Verifies the presence of text input and textarea.
- Validates initial values and attributes.

#### Test: 'Creates a validation form for Credit card number'
Purpose: Tests the creation of a validation form for a credit card number.

Assertions:
- Checks similar structure and content assertions.

#### Test: 'Creates a validation form for Password Validation'
Purpose: Tests the creation of a validation form for password validation.

Assertions:
- Checks structure and content assertions.

#### Test: 'Creates a validation form for Global Phone Number Validation'
Purpose: Tests the creation of a validation form for global phone number validation.

Assertions:
- Checks structure and content assertions. 

### Extraction Forms Tests:
#### Test: 'Creates an extraction form for Capital letters'
Purpose: Tests the creation of an extraction form for capital letters.

Assertions:
- Checks form structure, title, explanation, and the presence of text input, textarea, and unordered list.
- Validates initial values and attributes.

#### Test: 'Creates an extraction form for Extract URL Code'
Purpose: Tests the creation of an extraction form for extracting URL codes.

Assertions:
- Checks structure and content assertions.

#### Test: 'Creates an extraction form for Extract Date'
Purpose: Tests the creation of an extraction form for extracting dates.

Assertions:
- Checks structure and content assertions.

#### Test: 'Create an extraction form for IP Address'
Purpose: Tests the creation of an extraction form for extracting IP addresses.

Assertions:
- Checks structure and content assertions.

#### Test: 'Creates an extraction form for Phone Number'
Purpose: Tests the creation of an extraction form for extracting phone numbers.

Assertions:
- Checks structure and content assertions.

### Sanitization Forms Tests:
#### Test: 'Creates a sanitization form for Remove HTML'
Purpose: Tests the creation of a sanitization form for removing HTML tags.

Assertions:
- Checks form structure, title, explanation, and the presence of text input, textarea, and readonly textarea.
- Validates initial values and attributes.

#### Test: 'Creates a sanitization form for Remove SQL'
Purpose: Tests the creation of a sanitization form for removing SQL keywords and statements.

Assertions:
- Checks structure and content assertions.

### pages.test.js Notes:
- The associated JavaScript file (pages.js) containsP definitions for different types of regex forms categorized under validationForms, extractionForms, and sanitizationForm.
- These definitions include title, explanation, and regexPattern.
- The pages object combines these forms for use in testing.

## Additional Notes:
- TODO comments suggest adding more test cases for valid data, edge cases and UI interactions and specific assertions for placeholder and value properties.
