const ProductService = require('../product_service.js');
const StubProductClient = require('./stub_product_client.js');

describe('ProduceService - Stub', () => {
    let productService;

    beforeEach(() => {
        productService = new ProductService(new StubProductClient());
    });

    it('should filter out only available items', async () => {
        const items = await productService.fetchAvailableItems();
        expect(items).toEqual([{ item: 'Milk', available: true }, { item: 'Apple', available: true }]);
        expect(items.length).toBe(2);
    });

})