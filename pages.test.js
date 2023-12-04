/**
 * @jest-environment node
 */
import { TextEncoder, TextDecoder } from 'util';
Object.assign(global, { TextDecoder, TextEncoder });
import { JSDOM } from "jsdom";
import { createFormWithRegex, createExtractionForm, createSanitizationForm } from "./factory.js";
import pages from "./pages";

// Set up JSDOM
const dom = new JSDOM();
global.document = dom.window.document;

// Mock event listener to simulate UI interactions
const mockInputEvent = new Event('input');

describe('Validation Forms', () => {
  pages.validation.forEach((validationForm) => {
    test(`it should create a validation form for ${validationForm.title}`, () => {
      const form = createFormWithRegex(validationForm.title, validationForm.explanation, validationForm.regexPattern);
      
      // Assertions for form structure
      expect(form.tagName).toBe('FORM');
      expect(form.querySelector('h3').textContent).toBe(validationForm.title);
      expect(form.querySelector('p').textContent).toBe(validationForm.explanation);

      // Input elements assertions
      const textInput = form.querySelector('input[type="text"]');
      const regexTextarea = form.querySelector('textarea');
      expect(textInput).toBeDefined();
      expect(regexTextarea).toBeDefined();

      // Initial input values and attributes
      expect(textInput.placeholder).toBe('Enter text...');
      expect(regexTextarea.placeholder).toBe('Enter a regular expression...');
      expect(regexTextarea.value).toBe(validationForm.regexPattern);

      // TODO: Add more test cases for UI interactions
    });
  });
});

describe('Extraction Forms', () => {
  pages.extraction.forEach((extractionForm) => {
    test(`it should create an extraction form for ${extractionForm.title}`, () => {
      const form = createExtractionForm(extractionForm.title, extractionForm.explanation, extractionForm.regexPattern);
      
      // Assertions for form structure
      expect(form.tagName).toBe('FORM');
      expect(form.querySelector('h3').textContent).toBe(extractionForm.title);
      expect(form.querySelector('p').textContent).toBe(extractionForm.explanation);

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
      expect(regexTextarea.value).toBe(extractionForm.regexPattern);

      // TODO: Add more test cases for extraction functionality and UI interactions
    });
  });
});

describe('Sanitization Forms', () => {
  pages.sanitization.forEach((sanitizationForm) => {
    test(`it should create a sanitization form for ${sanitizationForm.title}`, () => {
      const form = createSanitizationForm(sanitizationForm.title, sanitizationForm.explanation, sanitizationForm.regexPattern);
      
      // Assertions for form structure
      expect(form.tagName).toBe('FORM');
      expect(form.querySelector('h3').textContent).toBe(sanitizationForm.title);
      expect(form.querySelector('p').textContent).toBe(sanitizationForm.explanation);

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
      expect(regexTextarea.value).toBe(sanitizationForm.regexPattern);

      // TODO: Add more test cases for sanitization functionality and UI interactions
    });
  });
});