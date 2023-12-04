import test from "node:test";
import assert from "node:assert";
import { JSDOM } from "jsdom";
import { createFormWithRegex, createExtractionForm, createSanitizationForm } from "./factory.js";

// // Load the HTML file containing the script
// const html = '<html><body><main></main></body></html>';
// const jsdom = new JSDOM(html);
// const { window } = jsdom;

// // Mock the global document and window objects
// global.document = window.document;
// global.window = window;

test("initialization test", async () => {
    let { document } = await load("index.html");

    // Check if the main element exists
    assert.ok(document.querySelector("main"));
    const mainElement = document.querySelector("main");

    assert.ok(mainElement, "Main element should be present in the document");

    // Check if the DOMContentLoaded event listener is added
   // assert.ok(document.listeners); // Check if listeners object exists
    // Check if the DOMContentLoaded event listener is added
    //assert.strictEqual(document.listeners["DOMContentLoaded"].length, 1);
});

test("Test regexLink click event", async () => {
    const { document } = await load("index.html");

    // Trigger a click on the regexLink
    const regexLink = document.querySelector("a[href='#']");
    regexLink.click();

    // Check if populateHome function is called
    const h2Element = document.querySelector("section#features h2");
    
    if (!h2Element) {
        console.error("Debug Info: Entire HTML", document.documentElement.outerHTML);
        console.error("Debug Info: Section#features", document.querySelector("section#features"));
    }

    assert.ok(h2Element, "Expected h2 element to be present");
    
    // Test if the content is as expected
    assert.strictEqual(h2Element?.textContent, "Discover the Power of Regular Expressions");

});

async function load(file) {
    let dom = await JSDOM.fromFile(file, {
        runScripts: "dangerously",
        resources: "usable",
    });
    return new Promise((resolve) => {
    dom.window.addEventListener("load", () => {
        resolve({
            window: dom.window,
            document: dom.window.document,
        });
    });
});
}