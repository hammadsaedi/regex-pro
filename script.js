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
    mainElement.innerHTML = `
        <section id="features">
            <h2>Discover the Power of Regular Expressions</h2>
            <p>Regex Pro is your all-in-one solution for working with regular expressions. Whether you're a developer or just curious about regex, we've got you covered.</p>
            <div class="feature-card">
                <h3>Regular Expression Testing</h3>
                <p>Test your regular expressions against sample text and see instant results. Debug and perfect your regex patterns effortlessly.</p>
            </div>
            <div class="feature-card">
                <h3>Data Validation</h3>
                <p>Use our pre-built validation forms to check data types like dates, URLs, and more. Ensure your input data meets your criteria.</p>
            </div>
            <div class="feature-card">
                <h3>Data Extraction</h3>
                <p>Effortlessly extract information from text using regular expressions. Extract emails, phone numbers, and more with ease.</p>
            </div>
            <div class="feature-card">
                <h3>Data Sanitization</h3>
                <p>Cleanse your data by removing unwanted content, such as HTML or SQL code. Keep your data safe and tidy.</p>
            </div>
        </section>`;
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
        dynamicTextarea()
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
        dynamicTextarea()
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
        dynamicTextarea()
    }
}

const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

function dynamicTextarea(){
    const textareas = document.querySelectorAll('textarea')
    textareas.forEach((textarea) => {
        textarea.addEventListener('input', () => {
            textarea.style.height = "auto"
            textarea.style.height = textarea.scrollHeight + "px"
        })
    })
}
