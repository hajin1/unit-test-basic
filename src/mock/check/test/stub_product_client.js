// 테스트용 stub
// 리얼 ProductClient 코드와 동일하게 fetchItems라는 함수를 가지고 있으면서도 네트워크를 사용하는 것이 아닌 데이터를 바로 리턴하는 함수로 만듦.
class StubProductClient {
    async fetchItems() {
        return [
            { item: 'Milk', available: true },
            { item: 'Banana', available: false },
            { item: 'Apple', available: true },
        ];
    }
}

module.exports = StubProductClient;