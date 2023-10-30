const validationForms = [
    {
        "title": "Four-digit number",
        "explanation": "This regular expression should match a 4-digit number.",
        "regexPattern": "^\\d{4}$"
    },
    {
        "title": "Password Validation",
        "explanation": "This regular expression should match passwords that adhere to security best practices.",
        "regexPattern": "^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$"
    },
    {
        "title": "Credit Card Validation",
        "explanation": "This regular expression should match common credit cards such as Visa, Mastercard, AMEX, etc."
        "regexPattern": "^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$"
    },
    {
        "title": "US Zip Code Validation",
        "explanation": "This regular expression should match zip codes in the United States"
        "regexPattern": "/(^\d{5}$)|(^\d{5}-\d{4}$)/"
    }
];

// extraction form 
const extractionForms = [
    {
        "title": "Capital letters",
        "explanation": "Extract all capital letters from text",
        "regexPattern": "[A-Z]"
    },
    {
        "title": "Extract URL Code",
        "explanation": "Extract URL using regular expression",
        "regexPattern": "(https?://www\.|http://www\.|https://|http://)?[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
    },
    {

        "title": "Extract Date",
        "explanation": "Extract Date from text",
        "regexPattern": "(\b\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\b|\b\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\b|\b\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\b|\b\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\b|\b\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\b|\b\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\b|\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+(0[1-9]|[12]\d|3[01]),\s+\d{4}\b|\b\d{1,2}\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}\b|\b\d{1,2}\s+(?:January|February|March|April|May|June|July|August|September|October|November|December),(0[1-9]|[12]\d|3[01]),\d{4}\b)"

    },
    {
        "title": "IP Address",
        "explanation": "Extract all IP Address from text",
        "regexPattern": "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?(\.|$)){4}"
    },
];

const sanitizationForm = [
    {
        "title": "Remove HTML",
        "explanation": "Remove all HTML tags from text",
        "regexPattern": "<.*?>"
    },
];

const pages = {
    "regex": {
        "title": "Regular Expressions",
        "explanation": "Testing regular expressions.",
    },
    "validation": validationForms,
    "extraction": extractionForms,
    "sanitization": sanitizationForm,
};

export default pages;
