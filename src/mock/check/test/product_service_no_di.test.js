const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');

jest.mock('../product_client');

describe('ProductService', () => {
    // fetchItems 함수를 mock으로 구현
    const fetchItems = jest.fn(async () => [
        { item: 'Milk', available: true },
        { item: 'Banana', available: false },
        { item: 'Apple', available: true },
    ]);
    // ProductClient 클래스도 mock으로 구현. fetchItems를 리턴함.
    ProductClient.mockImplementation(() => {
        return {
            fetchItems,
        }
    });
    let productService;

    beforeEach(() => {
        productService = new ProductService();
        // jest.config.js 파일에서 clearMocks: false로 주었다면 수동으로 mockClear를 호출해주어야 함
        fetchItems.mockClear();
        ProductClient.mockClear();
    })

    it('should filter out only available items', async () => {
        const items = await productService.fetchAvailableItems();
        expect(items).toEqual([{ item: 'Milk', available: true }, { item: 'Apple', available: true }]);
        expect(items.length).toBe(2);
    });

    it('test', async () => {
        const items = await productService.fetchAvailableItems();
        expect(fetchItems).toHaveBeenCalledTimes(1);
    })
})