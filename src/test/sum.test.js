import sum from "./Sum";
import { describe, expect, test } from "vitest";
import {render,screen}  from '@testing-library/react';

describe('sum function', () => {
    test('should return the sum of two numbers', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test('should return the sum of negative numbers', () => {
        expect(sum(-1, -2)).toBe(-3);
    });
    test('should return the sum of a positive and a negative number', () => {
        expect(sum(5, -3)).toBe(2);
    });
});

