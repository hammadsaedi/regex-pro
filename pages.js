const validationForms = [
    {
        "title": "Four-digit number",
        "explanation": "This regular expression should match a 4-digit number.",
        "regexPattern": "^\\d{4}$"
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

    }
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