#!/usr/bin/env node
import { greet } from "../src/index.js";

const name = process.argv[2];
console.log(greet(name));
