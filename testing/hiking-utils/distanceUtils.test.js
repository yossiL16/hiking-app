import test from "node:test";
import assert from "node:assert/strict";
import {kmToMeters} from './distanceUtils.js'


// test("Test: Converting 2 kilometers to 2000 meters", () => {assert.equal(kmToMeters(2), 2000);});
// test("Test:  Converting 0 kilometers to 0 meters", () => {assert.equal(kmToMeters(0), 0);});
// test("Test: ERROR Converting 5 STRING kilometers to 5 NUMBER meters", () => {assert.throws(kmToMeters('5'), 5);});
// test("Test:  ERROR Converting -5 kilometers to meters", () => {assert.throws(kmToMeters(-5));});