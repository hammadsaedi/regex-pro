import test from "node:test";
import assert from "node:assert";
import { JSDOM } from "jsdom";
import { createFormWithRegex, createExtractionForm, createSanitizationForm } from "./factory.js";

test("createFormWithRegex should create a form with input and textarea", () => {
    const form = createFormWithRegex("Title", "Explanation", "\\d+");
    
    assert.ok(form instanceof HTMLFormElement);
    assert.ok(form.querySelector("h3").textContent === "Title");
    assert.ok(form.querySelector("p").textContent === "Explanation");
    assert.ok(form.querySelector("input[type='text']"));
    assert.ok(form.querySelector("textarea[placeholder='Enter a regular expression...']"));
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