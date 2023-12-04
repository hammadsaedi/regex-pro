/**
 * @jest-environment node
 */
import { TextEncoder, TextDecoder } from 'util';
Object.assign(global, { TextDecoder, TextEncoder });

import { JSDOM } from "jsdom";
import { createFormWithRegex, createExtractionForm, createSanitizationForm } from "./factory.js";
// import test from "node:test";
// import assert from "node:assert";

// Set up JSDOM
const dom = new JSDOM();
global.document = dom.window.document;
//describe('createFormWithRegex', () => {
    test('it should create a form with regex inputs', () => {
        
      const form = createFormWithRegex('Test Form', 'Test Explanation', '\\d+');
      // console.log(form.querySelector("h3").textContent)
      // assert.strictEqual(form.querySelector("h3").textContent=='Test Form');
      // Add assertions based on your expectations
      expect(form.querySelector('h3').textContent).toBe('Test Form');
      expect(form.querySelector('p').textContent).toBe('Test Explanation');
      // Add more assertions as needed
    });
 // });