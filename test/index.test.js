import test from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/index.js";

test("greet uses default name", () => {
  assert.equal(greet(), "Hello, world! (from sample-npm-package)");
});

test("greet uses provided name", () => {
  assert.equal(greet("shuk"), "Hello, shuk! (from sample-npm-package)");
});
