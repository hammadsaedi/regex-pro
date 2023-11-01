const validationForms = [
    {
        "title": "Four-digit number",
        "explanation": "This regular expression should match a 4-digit number.",
        "regexPattern": "^\\d{4}$"
    },
    {
        "title": "Credit card number",
        "explanation": "This regular expression should match a credit card number. It should match Visa, MasterCard, American Express, Diners Club, Discover, and JCB cards.",
        "regexPattern": "(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)"
    },
    {
        "title": "Password Validation",
        "explanation": "This regular expression should match passwords that adhere to security best practices.",
        "regexPattern": "^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$"
    },
    {
        "title": "Global Phone Number Validation",
        "explanation": "This regular expression allows a wide range of phone number formats.",
        "regexPattern": "^(\\+[0-9]{1,2}\\s?)?1?[-.]?\\s?\\(?[0-9]{3}\\)?[\\s.-]?[0-9]{3}[\\s.-]?[0-9]{4}$"
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
    {
        "title": "Phone Number",
        "explanation": "Extract Phone Number from text (International number must begin with `+`)",
        "regexPattern": "^(\\+[0-9]{2,3}\\s?)?1?[-.]?\\s?\\(?[0-9]{3}\\)?[\\s.-]?[0-9]{3}[\\s.-]?[0-9]{4}$"
    },
];

const sanitizationForm = [
    {
        "title": "Remove HTML",
        "explanation": "Remove all HTML tags from text",
        "regexPattern": "<.*?>"
    },
    {
        "title": "Remove SQL",
        "explanation": "Remove all SQL keywords and statements",
        "regexPattern": "\\b(INSERT|SELECT|UPDATE|DELETE|DROP|ALTER|CREATE)\\b",
        "flags": "i"
    }
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
