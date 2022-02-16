class ProductService {
    // productClient라는 의존성을 외부에서 주입하도록 수정
    constructor(productClient) {
        this.productClient = productClient;
    }

    fetchAvailableItems() {
        return this.productClient
            .fetchItems()
            .then((items) => items.filter((item) => item.available));
    }
}

module.exports = ProductService;
