import {fizzbuzz} from './fizzbuzz';

describe('basic tests', () => {
    test("returns Fizz if a number is multiple of three", () => {
        expect(fizzbuzz(3)).toBe('Fizz')
        expect(fizzbuzz(33)).toBe('Fizz')
    })

    test("returns Buzz if a number is multiple of five", () => {
        expect(fizzbuzz(5)).toBe('Buzz')
        expect(fizzbuzz(25)).toBe('Buzz')
    })

    test("returns FizzBuzz if a number is multiple of 15", () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz')
        expect(fizzbuzz(45)).toBe('FizzBuzz')
    })

    test("returns a number in other cases", () => {
        expect(fizzbuzz(11)).toBe('11')
    })
})