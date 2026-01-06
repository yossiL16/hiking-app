import test from "node:test";
import assert from "node:assert/strict";
import {caloriesBurned} from './calories.js'

test("Test: test to heve result good 70, 5", () => {assert.equal(caloriesBurned(70, 5), 362.6);});
test("Test:  test to heve result good 1 1", () => {assert.equal(caloriesBurned(1,1), 1.036);});
test("Test: ERROR becous string", () => {assert.throws(caloriesBurned('50', 3));});
test("Test:  ERROR becous under merge", () => {assert.throws(caloriesBurned(0));});