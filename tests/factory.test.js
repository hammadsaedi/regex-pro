/**
 * @jest-environment node
 */
import { TextEncoder, TextDecoder } from 'util';
Object.assign(global, { TextDecoder, TextEncoder });
import { JSDOM } from "jsdom";
import { createFormWithRegex, createExtractionForm, createSanitizationForm } from "../factory.js";

// Set up JSDOM
const dom = new JSDOM();
global.document = dom.window.document;

describe('createFormWithRegex', () => {
  test('Creates a form with regex inputs', () => {
    const form = createFormWithRegex('Test Form', 'Test Explanation', '\\d+');

    // Assertions for form structure
    expect(form.tagName).toBe('FORM');
    expect(form.querySelector('h3').textContent).toBe('Test Form');
    expect(form.querySelector('p').textContent).toBe('Test Explanation');

    // Input elements assertions
    const textInput = form.querySelector('input[type="text"]');
    const regexTextarea = form.querySelector('textarea');
    expect(textInput).toBeDefined();
    expect(regexTextarea).toBeDefined();

    // Initial input values and attributes
    expect(textInput.placeholder).toBe('Enter text...');
    expect(regexTextarea.placeholder).toBe('Enter a regular expression...');
    expect(regexTextarea.value).toBe('\\d+');

    // Class validation for styling
    expect(textInput.classList.contains('required')).toBe(true);
  });

  test('Valid inputs', () => {
    // Test case: Valid input with a numeric regex pattern
    const formNumeric = createFormWithRegex('Numeric Form', 'Only digits allowed', '\\d+');
    const textInputNumeric = formNumeric.querySelector('input[type="text"]');
    expect(textInputNumeric.placeholder).toBe('Enter text...');
    expect(textInputNumeric.value).toBe('');
    
    // Test case: Valid input with an alphabetic regex pattern
    const formAlphabetic = createFormWithRegex('Alphabetic Form', 'Only letters allowed', '[a-zA-Z]+');
    const textInputAlphabetic = formAlphabetic.querySelector('input[type="text"]');
    expect(textInputAlphabetic.placeholder).toBe('Enter text...');
    expect(textInputAlphabetic.value).toBe('');
  });

  test('Empty input', () => {
    // Edge case: Empty regex pattern
    const formEmptyRegex = createFormWithRegex('Form with Empty Regex', 'Explanation', '');
    const textInputEmptyRegex = formEmptyRegex.querySelector('input[type="text"]');
    const regexTextareaEmptyRegex = formEmptyRegex.querySelector('textarea');
    expect(textInputEmptyRegex.classList.contains('valid')).toBe(false);
  });

});

describe('createExtractionForm', () => {
  test('Creates an extraction form with regex inputs', () => {
    // Test case for extraction form
    const form = createExtractionForm('Extraction Form', 'Extracts matches', '\\d+');

    // Assertions for form structure
    expect(form.tagName).toBe('FORM');
    expect(form.querySelector('h3').textContent).toBe('Extraction Form');
    expect(form.querySelector('p').textContent).toBe('Extracts matches');

    // Input elements assertions
    const textInput = form.querySelector('input[type="text"]');
    const regexTextarea = form.querySelector('textarea');
    const unorderedList = form.querySelector('ul');
    expect(textInput).toBeDefined();
    expect(regexTextarea).toBeDefined();
    expect(unorderedList).toBeDefined();

    // Initial input values and attributes
    expect(textInput.placeholder).toBe('Enter text...');
    expect(regexTextarea.placeholder).toBe('Enter a regular expression...');
    expect(regexTextarea.value).toBe('\\d+');
  });
});

describe('createSanitizationForm', () => {
  test('Creates a sanitization form with regex inputs', () => {
    // Test case for sanitization form
    const form = createSanitizationForm('Sanitization Form', 'Sanitizes matches', '\\d+');

    // Assertions for form structure
    expect(form.tagName).toBe('FORM');
    expect(form.querySelector('h3').textContent).toBe('Sanitization Form');
    expect(form.querySelector('p').textContent).toBe('Sanitizes matches');

    // Input elements assertions
    const textInput = form.querySelector('input[type="text"]');
    const regexTextarea = form.querySelector('textarea');
    const sanitizedTextarea = form.querySelector('textarea[readonly]');
    expect(textInput).toBeDefined();
    expect(regexTextarea).toBeDefined();
    expect(sanitizedTextarea).toBeDefined();

    // Initial input values and attributes
    expect(textInput.placeholder).toBe('Enter text...');
    expect(regexTextarea.placeholder).toBe('Enter a regular expression...');
    expect(regexTextarea.value).toBe('\\d+');

  });

    // TODO: Add more test cases for sanitization functionality and UI interactions

});