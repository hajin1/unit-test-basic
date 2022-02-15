const { test } = require("@jest/globals");

const Calculator = require('../calculator.js');

describe('Calculator', () => {
    // 각각의 테스트는 서로 독립적으로 동작하는 것이 중요
    let calculator;
    beforeEach(() => {
        calculator = new Calculator();
    });

    afterEach(() => {
        calculator.clear();
    });

    it('inits with 0', () => {
        expect(calculator.value).toBe(0);
    });

    it('sets', () => {
        calculator.set(9);
        expect(calculator.value).toBe(9);
    });

    it('clear', () => {
        calculator.set(9);
        calculator.clear();
        expect(calculator.value).toBe(0);
    });

    test('add', () => {
        calculator.set(1);
        calculator.add(2)
        expect(calculator.value).toBe(3);
    });

    test('add 함수는 결과값이 100 이상이면 에러를 발생시킵니다.', () => {
        calculator.set(10);
        expect(() => calculator.add(91)).toThrow(Error);
    });

    test('subtract', () => {
        calculator.set(1);
        calculator.subtract(2)
        expect(calculator.value).toBe(-1);
    });

    test('multiply', () => {
        calculator.set(3);
        calculator.multiply(6)
        expect(calculator.value).toBe(18);
    });

    describe('divides', () => {
        it('0 / 0 === NaN', () => {
            calculator.divide(0);
            expect(calculator.value).toBe(NaN);
        });

        it('1 / 0 === Infinity', () => {
            calculator.set(1);
            calculator.divide(0);
            expect(calculator.value).toBe(Infinity);
        });

        it('4 / 4 === 1', () => {
            calculator.set(4);
            calculator.divide(4)
            expect(calculator.value).toBe(1);
        });

        test('10 / 3 === 3.33333', () => {
            calculator.set(10);
            calculator.divide(3)
            expect(calculator.value).toBeCloseTo(3.33333);
        });
    })

});