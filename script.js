import pages from './pages.js';
import { createFormWithRegex, createExtractionForm, createSanitizationForm } from './factory.js';

const mainElement = document.querySelector("main");

populateHome();

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const regexLink = document.querySelector("a[href='#']");
    regexLink.addEventListener("click", function () {
        populateHome();
    });
    // Add an event listener to the "Validation" link in the navigation menu
    const validationLink = document.querySelector("a[href='#validation']");
    validationLink.addEventListener("click", function () {
        populateValidationForms();
    });
    // Add an event listener to the "Extraction" link in the navigation menu
    const extractionLink = document.querySelector("a[href='#extraction']");
    extractionLink.addEventListener("click", function () {
        populateExtractionForms();
    });
    const sanitizationLink = document.querySelector("a[href='#sanitization']");
    sanitizationLink.addEventListener("click", function () {
        populateSanitizationForm();
    });
});

function populateHome() {
    // Clear the existing content in the <main> element
    mainElement.innerHTML = '';

    if (pages.regex) {
        // Create a heading for the home page
        const homeHeading = document.createElement("h2");
        homeHeading.textContent = pages.regex.title;
        mainElement.appendChild(homeHeading);

        // Create a paragraph for the home page
        const homePara = document.createElement("p");
        homePara.textContent = pages.regex.explanation;
        mainElement.appendChild(homePara);
    }
}

function populateValidationForms() {
    // Check if validation data exists in the pages object
    if (pages.validation && pages.validation.length > 0) {
        // Clear the existing content in the <main> element
        const mainElement = document.querySelector("main");
        mainElement.innerHTML = '';

        // Loop through the validation data in the pages object and create forms
        pages.validation.forEach((validationData, index) => {
            const form = createFormWithRegex(
                validationData.title,
                validationData.explanation,
                validationData.regexPattern
            );
            // Add an identifier to the form to distinguish it from others
            form.dataset.formId = index;
            mainElement.appendChild(form);
        });
    }
}

function populateExtractionForms() {
    // Check if extraction data exists in the pages object
    if (pages.extraction && pages.extraction.length > 0) {
        // Clear the existing content in the <main> element
        mainElement.innerHTML = '';

        // Loop through the extraction data in the pages object and create forms
        pages.extraction.forEach((extractionData, index) => {
            const form = createExtractionForm(
                extractionData.title,
                extractionData.explanation,
                extractionData.regexPattern
            );
            // Add an identifier to the form to distinguish it from others
            form.dataset.formId = index;
            mainElement.appendChild(form);
        });
    }
}

function populateSanitizationForm(){
    if (pages.sanitization && pages.sanitization.length > 0) {
        // Clear the existing content in the <main> element
        mainElement.innerHTML = '';

        // Loop through the extraction data in the pages object and create forms
        pages.sanitization.forEach((sanitizationData, index) => {
            const form = createSanitizationForm(
                sanitizationData.title,
                sanitizationData.explanation,
                sanitizationData.regexPattern
            );
            // Add an identifier to the form to distinguish it from others
            form.dataset.formId = index;
            mainElement.appendChild(form);
        });
    }
}