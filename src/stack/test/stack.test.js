const Stack = require('../stack.js');

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('is created empty', () => {
        expect(stack.size()).toBe(0);
    });

    it('allows to push item', () => {
        stack.push('banana');
        expect(stack.size()).toBe(1);
    });

    describe('pop', () => {
        it('throw an error if stack is empty', () => {
            expect(() => { stack.pop(); }).toThrow('Stack is empty');
        });

        it('returns the last pushed item and removes it from the stack', () => {
            stack.push('banana');
            stack.push('apple');
            expect(stack.pop()).toBe('apple');
            expect(stack.size()).toBe(1);
        });
    });

    describe('peek', () => {
        it('throw an error if stack is empty', () => {
            expect(() => { stack.peek(); }).toThrow('Stack is empty');
        });

        it('returns the last pushed item but keepse it in the stack', () => {
            stack.push('banana');
            stack.push('apple');
            expect(stack.peek()).toBe('apple');
            expect(stack.size()).toBe(2);
        });
    });
});