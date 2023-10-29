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
    {
        "title": "Phone Number",
        "explanation": "Extract 10-12 Digit Phone Number from text",
        "regexPattern": "^[\+]?[(]?[0-9]{3}[)]?\s*[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
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