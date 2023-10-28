function createFormWithRegex(title, explanation, regexPattern ) {
    // Create the form element
    const form = document.createElement("form");

    // Function to check the regular expression against the input text
    function checkRegex() {
        const userText = textInput.value;
        const regexPattern = regexTextarea.value;

        if (regexPattern.trim() !== "") {
            const regex = new RegExp(regexPattern);

            if (regex.test(userText)) {
                textInput.classList.remove("invalid");
                textInput.classList.add("valid");
            } else {
                textInput.classList.remove("valid");
                textInput.classList.add("invalid");
            }
        }
    }

    // Add a title for the form
    if (title) {
        const formTitle = document.createElement("h3");
        formTitle.textContent = title;
        form.appendChild(formTitle);
    }

    // Add a paragraph for explaining the regular expression
    if (explanation) {
        const explanationPara = document.createElement("p");
        explanationPara.textContent = explanation;
        form.appendChild(explanationPara);
    }

    // Add a text input for user input
    const textInput = document.createElement("input");
    textInput.setAttribute("type", "text");
    textInput.setAttribute("placeholder", "Enter text...");
    textInput.classList.add("required"); // Added class for styling and validation
    textInput.addEventListener("input", checkRegex); // Moved input event listener

    // Add a textarea for regex input
    const regexTextarea = document.createElement("textarea");
    regexTextarea.setAttribute("placeholder", "Enter a regular expression...");
    regexTextarea.value = regexPattern; // Set the initial regex pattern if provided
    regexTextarea.addEventListener("input", checkRegex); // Moved input event listener

    // Append the form elements to the form
    form.appendChild(textInput);
    form.appendChild(regexTextarea);

    return form; // Return the form element
}

function createExtractionForm(title, explanation, regexPattern) {
    // Create the form element
    const form = document.createElement("form");

    const unorderedList = document.createElement("ul");

    // Function to extract content based on the provided regex
    function addListItems(matches) {
        console.log(matches);
        unorderedList.innerHTML = ""; // Clear the existing list items
        matches.forEach(match => {
            const listItem = document.createElement("li");
            listItem.textContent = match;
            unorderedList.appendChild(listItem);
        });
    }

    function extractContentWithRegex(text, regex) {
        const regexObj = new RegExp(regex, "g");
        let matches = [];
        let match = regexObj.exec(String(text));
        while (match !== null) {
            matches.push(match[0]);
            match = regexObj.exec(String(text));
        }        
        return matches;
    }

    // Create a title for the form
    if (title) {
        const formTitle = document.createElement("h3");
        formTitle.textContent = title;
        form.appendChild(formTitle);
    }

    // Add a paragraph for explaining the regular expression
    if (explanation) {
        const explanationPara = document.createElement("p");
        explanationPara.textContent = explanation;
        form.appendChild(explanationPara);
    }

    // Add a text input for user input
    const textInput = document.createElement("input");
    textInput.setAttribute("type", "text");
    textInput.setAttribute("placeholder", "Enter text...");
    textInput.classList.add("required"); // Added class for styling and validation
    textInput.addEventListener("input", function () {
        addListItems(extractContentWithRegex(textInput.value, regexTextarea.textContent));
    });

    // Add a textarea for regex input
    const regexTextarea = document.createElement("textarea");
    regexTextarea.setAttribute("placeholder", "Enter a regular expression...");
    regexTextarea.textContent = regexPattern; // Set the initial regex pattern if provided
    regexTextarea.addEventListener("input", function () {
        addListItems(extractContentWithRegex(textInput.value, regexTextarea.textContent));
    });

    // Append the form elements to the form
    form.appendChild(textInput);
    form.appendChild(regexTextarea);
    form.appendChild(unorderedList);

    return form;
}

function createSanitizationForm(title, explanation, regexPattern) {
    // Create the form element
    const form = document.createElement("form");

    function sanitization(text, regex) {
        const regexObj = new RegExp(regex, "g");
        return text.replace(regexObj, '');
    }

    // Create a title for the form
    if (title) {
        const formTitle = document.createElement("h3");
        formTitle.textContent = title;
        form.appendChild(formTitle);
    }

    // Add a paragraph for explaining the regular expression
    if (explanation) {
        const explanationPara = document.createElement("p");
        explanationPara.textContent = explanation;
        form.appendChild(explanationPara);
    }

    // Add a textarea for sanitized input
    const sanitizedTextarea = document.createElement("textarea");
    sanitizedTextarea.setAttribute("readonly", "true");
    
       
    // Add a text input for user input
    const textInput = document.createElement("input");
    textInput.setAttribute("type", "text");
    textInput.setAttribute("placeholder", "Enter text...");
    textInput.classList.add("required"); // Added class for styling and validation
    textInput.addEventListener("input", function () {
        sanitizedTextarea.value = sanitization(textInput.value, regexTextarea.textContent);
    });

    // Add a textarea for regex input
    const regexTextarea = document.createElement("textarea");
    regexTextarea.setAttribute("placeholder", "Enter a regular expression...");
    regexTextarea.textContent = regexPattern; // Set the initial regex pattern if provided
    regexTextarea.addEventListener("input",function () {
        sanitizedTextarea.value = sanitization(textInput.value, regexTextarea.textContent);
    });

 

    // Append the form elements to the form
    form.appendChild(textInput);
    form.appendChild(regexTextarea);
    form.appendChild(sanitizedTextarea);

    return form;
}
export { createFormWithRegex, createExtractionForm, createSanitizationForm}; 