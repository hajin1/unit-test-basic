/**
 * 3가지 인자 모두 콜백
 * predicate를 호출한 결과가 true라면 onSuccess를 수행
 * predicate를 호출한 결과가 false라면 onFail을 수행
 */
function check(predicate, onSuccess, onFail) {
    if (predicate()) {
        onSuccess('yes');
    } else {
        onFail('no');
    }
}

module.exports = check;
