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