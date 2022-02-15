const check = require('../check');

describe('check', () => {
    let onSuccess;
    let onFail;

    beforeEach(() => {
        // mock 함수 선언
        onSuccess = jest.fn();
        onFail = jest.fn();
    });

    it('should call onSuccess when predicate is true', () => {
        check(() => true, onSuccess, onFail);
        // onSuccess mock 함수가 1번 호출되어야 한다.
        expect(onSuccess.mock.calls.length).toBe(1);
        // onSuccess mock 함수의 1번째 인자는 yes 이다.
        expect(onSuccess.mock.calls[0][0]).toBe('yes');
        expect(onFail.mock.calls.length).toBe(0);

        // api 사용
        expect(onSuccess).toHaveBeenCalledTimes(1);
        expect(onSuccess).toHaveBeenCalledWith('yes');
        expect(onFail).toHaveBeenCalledTimes(0);
    });

    it('should call onFail when predicate is false', () => {
        check(() => false, onSuccess, onFail);
        expect(onFail).toHaveBeenCalledTimes(1);
        expect(onFail).toHaveBeenCalledWith('no');
        expect(onSuccess).toHaveBeenCalledTimes(0);
    });
})